/**
 * Code-generation script: converts season4Rows.json into season-3-style TypeScript.
 *
 * Outputs:
 *   - stdout: TypeScript block for the season-4 entry in challengeData.ts
 *   - stderr: i18n keys to merge into messages/ja/common.json
 *
 * Run: node scripts/generateSeason4.mjs
 */

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rows = JSON.parse(readFileSync(join(__dirname, "../lib/season4Rows.json"), "utf-8"));

// ── Category mapping ──────────────────────────────────────────────────────────

const CATEGORY_MAP = {
  "今週の達成スコア": "weekly-score",
  "任務記録": "mission-log",
  "カオス究明": "chaos-analysis",
  "戦闘報告": "battle-report",
  "壊滅作戦": "annihilation",
};

const ID_PREFIX = {
  "weekly-score": "ws",
  "mission-log": "ml",
  "chaos-analysis": "ca",
  "battle-report": "br",
  "annihilation": "an",
};

// ── Common reward key mapping (items shared with season 3) ───────────────────

const COMMON_REWARD_KEY = {
  "クリスタル": "crystal",
  "ユニット": "unit",
  "サポートデータ（上級）": "support_data",
  "戦闘メモリー(上級)": "battle_memory",
  "潜在ディスク": "potencial_disk",
  "記憶の粒子": "memory_particles",
  "記憶の痕跡": "memory_traces",
  "ユニバーサル支援認定書": "universal_support_certificate",
  "ユニバーサル戦術認定書": "universal_tactics_certificate",
};

// ── Season-4-specific reward keys ────────────────────────────────────────────
// Items unique to season 4; images will use crystal.png as placeholder until
// real assets are added.

const S4_REWARD_KEY = {
  "恍惚の結晶石": "ecstatic_crystal",
  "ヒルデの弓": "hildes_bow",
  "ユニのガトリングガン": "unis_gatling_gun",
  "砕けた光と爪ヒルデ": "shattered_light_hilde",
  "可愛い蛇の装飾": "cute_snake_ornament",
  "黒豹の耳": "black_panther_ears",
  "砕けた光と爪アラベラ": "shattered_light_arabella",
  "プリズムレンズ": "prism_lens",
  "凝縮された世界": "condensed_world",
  "輝かしい羽化": "glorious_metamorphosis",
  "砕けた光と爪": "shattered_light_and_claw",
  "万象のプリズム": "prism_of_all_things",
  "未知の生態系": "unknown_ecosystem",
  "適者の証明": "proof_of_the_fittest",
  "パグナ侵略者": "pagna_invader",
  "深淵の生存者": "abyssal_survivor",
  "欲望の道しるべ": "desire_guidepost",
  "代償なき貪欲": "greed_without_price",
  "完璧な剥製": "perfect_taxidermy",
};

const ALL_REWARD_KEY = { ...COMMON_REWARD_KEY, ...S4_REWARD_KEY };

// ── Helpers ───────────────────────────────────────────────────────────────────

function toCamelCase(str) {
  // Convert Japanese string index to a safe camelCase key by using a simple
  // sequential approach: the caller handles naming.
  return str;
}

function parseProgress(raw) {
  const m = raw.match(/^\s*\d+\s*\/\s*([\d,]+)\s*$/);
  return m ? parseInt(m[1].replace(/,/g, ""), 10) : undefined;
}

function parseRewards(raw) {
  const normalized = raw.replace(/\s+/g, " ").trim();
  if (!normalized) return [];
  return normalized.split("、").map((part) => {
    const m = part.match(/^(.+?)×\s*([\d,]+)$/);
    if (m) {
      const name = m[1].trim();
      const amount = parseInt(m[2].replace(/,/g, ""), 10);
      const key = ALL_REWARD_KEY[name];
      return key ? { key, amount } : { rawName: name, amount };
    }
    const name = part.trim();
    const key = ALL_REWARD_KEY[name];
    return key ? { key } : { rawName: name };
  });
}

function rewardToTs(r) {
  if (r.key) {
    return r.amount !== undefined ? `rewardOf("${r.key}", ${r.amount})` : `rewardOf("${r.key}")`;
  }
  // Unmapped name — use crystal placeholder; caller should add to REWARD_MAP
  return r.amount !== undefined
    ? `{ image: "/rewards/crystal.png", altKey: "rewards.season4.${slugify(r.rawName)}", amount: ${r.amount} }`
    : `{ image: "/rewards/crystal.png", altKey: "rewards.season4.${slugify(r.rawName)}" }`;
}

function slugify(str) {
  return str
    .replace(/[^\p{L}\p{N}]/gu, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "")
    .toLowerCase();
}

// ── Build normalized rows ─────────────────────────────────────────────────────

const categoryIndexes = {
  "weekly-score": 0,
  "mission-log": 0,
  "chaos-analysis": 0,
  "battle-report": 0,
  "annihilation": 0,
};

const normalized = rows.map((row) => {
  const cat = CATEGORY_MAP[row.category];
  if (!cat) throw new Error(`Unknown category: ${row.category}`);
  categoryIndexes[cat] += 1;
  const idx = categoryIndexes[cat];
  const prefix = ID_PREFIX[cat];
  return {
    ...row,
    cat,
    id: `s4-${prefix}-${idx}`,
    i18nKey: `s4${prefix.toUpperCase()}${idx}`,
    parentNames: row.parent.split("、").map((s) => s.trim()).filter(Boolean),
    rewards: parseRewards(row.reward),
    progressMax: parseProgress(row.progress),
  };
});

// ── Build parent→children map ─────────────────────────────────────────────────

const titleToIds = new Map();
for (const r of normalized) {
  const list = titleToIds.get(r.title) ?? [];
  list.push(r.id);
  titleToIds.set(r.title, list);
}

const childIdsByParent = new Map();
for (const r of normalized) {
  for (const pName of r.parentNames) {
    const parentIds = titleToIds.get(pName) ?? [];
    for (const pid of parentIds) {
      const set = childIdsByParent.get(pid) ?? new Set();
      set.add(r.id);
      childIdsByParent.set(pid, set);
    }
  }
}

// ── Generate TypeScript ───────────────────────────────────────────────────────

const tasksByCategory = {
  "weekly-score": [],
  "mission-log": [],
  "chaos-analysis": [],
  "battle-report": [],
  "annihilation": [],
};

for (const r of normalized) {
  const childIds = childIdsByParent.get(r.id);
  const isDerived = Boolean(childIds && childIds.size > 0);
  tasksByCategory[r.cat].push({ ...r, isDerived, childIds: childIds ? [...childIds] : undefined });
}

function taskToTs(t, indent) {
  const pad = " ".repeat(indent);
  const lines = [`${pad}{`];
  lines.push(`${pad}  id: "${t.id}",`);
  lines.push(`${pad}  status: "${t.isDerived ? "derived" : "manual"}",`);
  lines.push(`${pad}  titleKey: "tasks.${t.i18nKey}.title",`);
  lines.push(`${pad}  descriptionKey: "tasks.${t.i18nKey}.description",`);

  if (t.rewards.length > 0) {
    const rewardLines = t.rewards.map((r) => `${pad}    ${rewardToTs(r)},`).join("\n");
    lines.push(`${pad}  rewards: [\n${rewardLines}\n${pad}  ],`);
  }

  if (!t.isDerived && t.progressMax !== undefined) {
    lines.push(`${pad}  progressMax: ${t.progressMax},`);
  }
  if (t.isChild || t.parentNames.length > 0) {
    lines.push(`${pad}  isChild: true,`);
  }
  if (t.childIds && t.childIds.length > 0) {
    const ids = t.childIds.map((id) => `"${id}"`).join(", ");
    lines.push(`${pad}  childIds: [${ids}],`);
  }
  lines.push(`${pad}},`);
  return lines.join("\n");
}

const catLabel = {
  "weekly-score": "今週の達成スコア",
  "mission-log": "任務記録",
  "chaos-analysis": "カオス究明",
  "battle-report": "戦闘報告",
  "annihilation": "壊滅作戦",
};

const catId = ["weekly-score", "mission-log", "chaos-analysis", "battle-report", "annihilation"];

let tsOut = `  // ─── season-4: 砕けた光と爪 ──────────────────────────────────────────────\n`;
tsOut += `  {\n    id: "season-4",\n    nameKey: "season.s4",\n    categories: [\n`;

for (const cat of catId) {
  tsOut += `      // ─── ${catLabel[cat]} ${"─".repeat(Math.max(0, 50 - catLabel[cat].length))}\n`;
  tsOut += `      {\n        id: "${cat}",\n        tasks: [\n`;
  for (const t of tasksByCategory[cat]) {
    tsOut += taskToTs(t, 10) + "\n";
  }
  tsOut += `        ],\n      },\n\n`;
}

tsOut += `    ],\n  },`;

process.stdout.write(tsOut + "\n");

// ── Generate i18n entries ─────────────────────────────────────────────────────

const i18nTasks = {};
for (const r of normalized) {
  i18nTasks[r.i18nKey] = { title: r.title, description: r.description };
}

process.stderr.write(
  "// Paste these under \"tasks\" in messages/ja/common.json:\n" +
    JSON.stringify(i18nTasks, null, 2) +
    "\n"
);

// ── Report unmapped reward names ──────────────────────────────────────────────

const unmapped = new Set();
for (const r of normalized) {
  for (const reward of r.rewards) {
    if (reward.rawName) unmapped.add(reward.rawName);
  }
}
if (unmapped.size > 0) {
  process.stderr.write(`\n// Unmapped reward names (add to REWARD_MAP):\n${[...unmapped].join("\n")}\n`);
}

// ── Report new RewardKey entries needed ───────────────────────────────────────

const usedS4Keys = new Set();
for (const r of normalized) {
  for (const reward of r.rewards) {
    if (reward.key && S4_REWARD_KEY[Object.keys(S4_REWARD_KEY).find(k => S4_REWARD_KEY[k] === reward.key)]) {
      usedS4Keys.add(reward.key);
    }
  }
}

// Collect all used S4 keys from rewards
const allUsedKeys = new Set();
for (const r of normalized) {
  for (const reward of r.rewards) {
    if (reward.key && Object.values(S4_REWARD_KEY).includes(reward.key)) {
      allUsedKeys.add(reward.key);
    }
  }
}

process.stderr.write(
  `\n// New RewardKey entries for types/index.ts:\n${[...allUsedKeys].map(k => `  | "${k}"`).join("\n")}\n`
);

process.stderr.write(
  `\n// New REWARD_MAP entries for rewardHelper.ts:\n` +
  [...allUsedKeys].map(k => {
    return `  ${k}: {\n    image: "/rewards/crystal.png",\n    altKey: "rewards.season4.${k}",\n  },`;
  }).join("\n") + "\n"
);
