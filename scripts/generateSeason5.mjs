import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const rows = JSON.parse(readFileSync(join(root, "lib/season5Rows.json"), "utf8"));

const categoryMap = {
  "今週の達成スコア": "weekly-score",
  "任務記録": "mission-log",
  "カオス究明": "chaos-analysis",
  "戦闘報告": "battle-report",
  "壊滅作戦": "annihilation",
};
const idPrefix = {
  "weekly-score": "ws",
  "mission-log": "ml",
  "chaos-analysis": "ca",
  "battle-report": "br",
  annihilation: "an",
};
const season5RewardKeys = {
  完成した記憶: "completed_memory",
  輝かしき過去の痕跡: "trace_of_glorious_past",
  守られた約束: "protected_promise",
  色褪せぬ記憶: "unfading_memory",
  "吹雪の中の道しるべ": "guidepost_in_blizzard",
  雪に交わした約束: "promise_exchanged_in_snow",
  雪に交わした約束ヒルデ: "promise_exchanged_in_snow_hilde",
  雪原の支配者: "ruler_of_snowfield",
  凍てつかぬ意志: "unfrozen_will",
  凍てつく文明の遺産: "frozen_civilization_legacy",
};
const rewardKeys = {
  クリスタル: "crystal",
  ユニット: "unit",
  "サポートデータ（上級）": "support_data",
  "戦闘メモリー(上級)": "battle_memory",
  潜在ディスク: "potencial_disk",
  記憶の粒子: "memory_particles",
  記憶の痕跡: "memory_traces",
  ユニバーサル支援認定書: "universal_support_certificate",
  ユニバーサル戦術認定書: "universal_tactics_certificate",
  "ヒルデの弓": "hildes_bow",
  "ユニのガトリングガン": "unis_gatling_gun",
  完璧な剥製: "perfect_taxidermy",
  深淵の生存者: "abyssal_survivor",
  未知の生態系: "unknown_ecosystem",
  ...season5RewardKeys,
};

const categoryIndexes = Object.fromEntries(Object.values(categoryMap).map((id) => [id, 0]));
const normalized = rows.map((row) => {
  const category = categoryMap[row.category];
  if (!category) throw new Error(`Unknown category: ${row.category}`);

  categoryIndexes[category] += 1;
  const index = categoryIndexes[category];
  const rewards = row.reward
    .replace(/\s+/g, " ")
    .trim()
    .split("、")
    .filter(Boolean)
    .map((part) => {
      const normalizedPart = part.trim();
      const match = normalizedPart.match(/^(.+?)×\s*([\d,]+)$/);
      const name = (match?.[1] ?? normalizedPart).trim();
      const key = rewardKeys[name];
      if (!key) throw new Error(`Unknown reward: ${name}`);
      return { key, amount: match ? Number(match[2].replace(/,/g, "")) : undefined };
    });
  const progress = row.progress.trim().match(/^\s*\d+\s*\/\s*([\d,]+)\s*$/);

  return {
    ...row,
    title: row.title.trim(),
    description: row.description.trim(),
    category,
    id: `s5-${idPrefix[category]}-${index}`,
    key: `s5${idPrefix[category].toUpperCase()}${index}`,
    parents: row.parent.trim().split("、").map((name) => name.trim()).filter(Boolean),
    rewards,
    progressMax: progress ? Number(progress[1].replace(/,/g, "")) : undefined,
  };
});

const idsByTitle = new Map();
for (const row of normalized) {
  const ids = idsByTitle.get(row.title) ?? [];
  ids.push(row.id);
  idsByTitle.set(row.title, ids);
}

const childrenByParent = new Map();
for (const row of normalized) {
  for (const parentTitle of row.parents) {
    for (const parentId of idsByTitle.get(parentTitle) ?? []) {
      const children = childrenByParent.get(parentId) ?? new Set();
      children.add(row.id);
      childrenByParent.set(parentId, children);
    }
  }
}

const categories = Object.values(categoryMap);
const tasksByCategory = Object.fromEntries(categories.map((category) => [category, []]));
for (const row of normalized) {
  const childIds = [...(childrenByParent.get(row.id) ?? [])];
  const derived = childIds.length > 0;
  const task = {
    id: row.id,
    status: derived ? "derived" : "manual",
    titleKey: `tasks.${row.key}.title`,
    descriptionKey: `tasks.${row.key}.description`,
  };

  if (row.rewards.length > 0) {
    task.rewards = row.rewards.map(({ key, amount }) =>
      amount === undefined ? `rewardOf("${key}")` : `rewardOf("${key}", ${amount})`,
    );
  }
  if (!derived && row.progressMax !== undefined) task.progressMax = row.progressMax;
  if (row.parents.length > 0) task.isChild = true;
  if (childIds.length > 0) task.childIds = childIds;
  tasksByCategory[row.category].push(task);
}

const categoriesTs = categories
  .map((category) => {
    const tasks = tasksByCategory[category]
      .map((task) => {
        const lines = [
          "          {",
          `            id: "${task.id}",`,
          `            status: "${task.status}",`,
          `            titleKey: "${task.titleKey}",`,
          `            descriptionKey: "${task.descriptionKey}",`,
        ];
        if (task.rewards) {
          lines.push("            rewards: [");
          lines.push(...task.rewards.map((reward) => `              ${reward},`));
          lines.push("            ],");
        }
        if (task.progressMax !== undefined) lines.push(`            progressMax: ${task.progressMax},`);
        if (task.isChild) lines.push("            isChild: true,");
        if (task.childIds) lines.push(`            childIds: [${task.childIds.map((id) => `"${id}"`).join(", ")}],`);
        lines.push("          },");
        return lines.join("\n");
      })
      .join("\n");
    return `      {\n        id: "${category}",\n        tasks: [\n${tasks}\n        ],\n      },`;
  })
  .join("\n");

const seasonFile = `import { Season } from "@/types";
import { rewardOf } from "../rewardHelper";

export const season5: Season = {
  id: "season-5",
  nameKey: "season.s5",
  categories: [
${categoriesTs}
  ],
};
`;
writeFileSync(join(root, "lib/seasons/season5.ts"), seasonFile);

const messagesPath = join(root, "messages/ja/common.json");
const messages = JSON.parse(readFileSync(messagesPath, "utf8"));
messages.season.s5 = "シーズン5「雪に交わした約束」";
messages.rewards.season5 = Object.fromEntries(
  Object.entries(season5RewardKeys).map(([name, key]) => [key, name]),
);
for (const row of normalized) {
  messages.tasks[row.key] = { title: row.title, description: row.description };
}
writeFileSync(messagesPath, `${JSON.stringify(messages, null, 2)}\n`);
