import { describe, expect, test } from "vitest";
import { defaultSeasonId, seasons } from "@/lib/challengeData";
import jaMessages from "@/messages/ja/common.json";
import season5Rows from "@/lib/season5Rows.json";

const categoryMap: Record<string, { id: string; prefix: string }> = {
  今週の達成スコア: { id: "weekly-score", prefix: "ws" },
  任務記録: { id: "mission-log", prefix: "ml" },
  カオス究明: { id: "chaos-analysis", prefix: "ca" },
  戦闘報告: { id: "battle-report", prefix: "br" },
  壊滅作戦: { id: "annihilation", prefix: "an" },
};

describe("season 5 challenge data", () => {
  const season5 = seasons.find((season) => season.id === "season-5");
  const categories = season5?.categories ?? [];
  const tasks = categories.flatMap((category) => category.tasks);

  test("registers season-5 and makes it the default season", () => {
    expect(season5?.nameKey).toBe("season.s5");
    expect(defaultSeasonId).toBe("season-5");
  });

  test("imports all issue tasks in their expected categories", () => {
    const byCategory = Object.fromEntries(
      categories.map((category) => [category.id, category.tasks.length]),
    );

    expect(byCategory).toEqual({
      "weekly-score": 5,
      "mission-log": 30,
      "chaos-analysis": 70,
      "battle-report": 19,
      annihilation: 30,
    });
    expect(tasks).toHaveLength(154);
    expect(new Set(tasks.map((task) => task.id)).size).toBe(154);
  });

  test("provides Japanese messages for all season-5 task keys", () => {
    const taskMessages = jaMessages.tasks as Record<string, { title?: string; description?: string }>;
    const season5Rewards = (jaMessages.rewards as { season5?: Record<string, string> }).season5 ?? {};

    for (const task of tasks) {
      const [, key] = task.titleKey.split(".");
      expect(taskMessages[key]?.title, `${key} title`).toBeDefined();
      expect(taskMessages[key]?.description, `${key} description`).toBeDefined();
      expect(task.titleKey.startsWith("raw:")).toBe(false);
      expect(task.descriptionKey.startsWith("raw:")).toBe(false);
      for (const reward of task.rewards ?? []) {
        expect(reward.altKey.startsWith("raw:")).toBe(false);
        if (reward.altKey.startsWith("rewards.season5.")) {
          const rewardKey = reward.altKey.split(".").at(-1);
          expect(season5Rewards[rewardKey ?? ""]).toBeDefined();
        }
      }
    }
  });

  test("preserves every issue title and description", () => {
    const taskMessages = jaMessages.tasks as Record<string, { title?: string; description?: string }>;
    const indexes: Record<string, number> = {};

    for (const row of season5Rows) {
      const category = categoryMap[row.category];
      indexes[category.id] = (indexes[category.id] ?? 0) + 1;
      const key = `s5${category.prefix.toUpperCase()}${indexes[category.id]}`;

      expect(taskMessages[key]?.title).toBe(row.title.trim());
      expect(taskMessages[key]?.description).toBe(row.description.trim());
    }
  });

  test("includes the ten Season 5 part 2 challenges from issue #55", () => {
    const taskMessages = jaMessages.tasks as Record<string, { title?: string; description?: string }>;
    const issueEntries = [
      {
        category: "mission-log",
        title: "炎の主",
        description: "ストーリー-第2章【#02 救出】完了",
        progressMax: 1,
        rewards: ["rewards.season4.ecstatic_crystal:100", "rewards.season5.promise_exchanged_in_snow_blazebell"],
      },
      {
        category: "mission-log",
        title: "抱きしめた塵",
        description: "ストーリー-第2章【#07 彼の処刑】完了",
        progressMax: 1,
        rewards: ["rewards.season4.ecstatic_crystal:100", "rewards.season5.vivians_horn"],
      },
      {
        category: "mission-log",
        title: "狩りを、やってみませんか",
        description: "ストーリー-第2章【#09 激突】完了",
        progressMax: 1,
        rewards: ["rewards.season4.ecstatic_crystal:100", "rewards.season5.blaze_bells_horn"],
      },
      {
        category: "mission-log",
        title: "最後まで残したもの",
        description: "ストーリー-第2章【#10 回収】完了",
        progressMax: 1,
        rewards: ["rewards.season4.ecstatic_crystal:100", "rewards.unit:24000"],
      },
      {
        category: "mission-log",
        title: "僕を信じて",
        description: "未確認エリア：記憶の果て【記憶：僕を信じて】確認",
        progressMax: 1,
        rewards: ["rewards.season4.ecstatic_crystal:300"],
      },
      {
        category: "mission-log",
        title: "燃えなかったもの",
        description: "ブレイズベルと一緒に未確認エリア：記憶の果て【記憶：僕を信じて】確認",
        progressMax: 1,
        rewards: ["rewards.season4.ecstatic_crystal:500"],
      },
      {
        category: "chaos-analysis",
        title: "ブレイズベルの判決",
        description: "ブレイズベルと一緒に未確認エリア【定められた判決】で、兵士を助けようと答える",
        progressMax: 1,
        rewards: ["rewards.season4.ecstatic_crystal:200"],
      },
      {
        category: "chaos-analysis",
        title: "見たくない顔",
        description: "ブレイズベルと一緒に未確認エリア【揺らぐ信仰】で市長の銅像を調べる",
        progressMax: 1,
        rewards: ["rewards.season4.ecstatic_crystal:200"],
      },
      {
        category: "battle-report",
        title: "裂けた審判",
        description: "カオス - 【天井の防壁】記憶の果てで【審判の代理人】との戦闘中に【罪悪】を排除してから戦闘に勝利",
        progressMax: 1,
        rewards: ["rewards.season4.ecstatic_crystal:2000"],
      },
      {
        category: "battle-report",
        title: "交差する神聖",
        description: "カオス -【天上の防壁】記憶の果てで審判の代理人を撃破",
        progressMax: 1,
        rewards: [
          "rewards.season5.id_card_tree_of_wishes",
          "rewards.season5.save_data_tree_of_wishes",
        ],
      },
    ];

    for (const entry of issueEntries) {
      const matchingTasks = categories
        .find((category) => category.id === entry.category)
        ?.tasks.filter((task) => {
          const [, key] = task.titleKey.split(".");
          return taskMessages[key]?.title === entry.title;
        }) ?? [];
      expect(matchingTasks, entry.title).toHaveLength(1);

      const task = matchingTasks[0];
      const [, key] = task.titleKey.split(".");
      expect(taskMessages[key]?.description).toBe(entry.description);
      expect(task.progressMax).toBe(entry.progressMax);
      expect(
        task.rewards?.map((reward) =>
          reward.amount === undefined ? reward.altKey : `${reward.altKey}:${reward.amount}`,
        ),
      ).toEqual(entry.rewards);
    }

    const battleTasks = categories.find((category) => category.id === "battle-report")?.tasks ?? [];
    const byTitle = new Map(
      battleTasks.map((task) => {
        const [, key] = task.titleKey.split(".");
        return [taskMessages[key]?.title, task];
      }),
    );
    const parents = battleTasks.filter((task) => task.status === "derived");
    const judgment = byTitle.get("裂けた審判");
    const divine = byTitle.get("交差する神聖");
    const hunter = byTitle.get("極地専門ハンター");

    expect(judgment?.isChild).toBe(true);
    expect(hunter?.childIds).toContain(judgment?.id);
    expect(divine?.isChild).toBeFalsy();
    expect(parents.some((parent) => parent.childIds?.includes(divine?.id ?? ""))).toBe(false);
  });

  test("all derived tasks reference valid child tasks", () => {
    const tasksById = new Map(tasks.map((task) => [task.id, task]));

    for (const task of tasks.filter((entry) => entry.status === "derived")) {
      expect(task.childIds?.length, `${task.id} childIds`).toBeGreaterThan(0);
      for (const childId of task.childIds ?? []) {
        expect(tasksById.has(childId), `${task.id} references ${childId}`).toBe(true);
        expect(tasksById.get(childId)?.isChild, `${childId} is a child`).toBe(true);
      }
    }
  });
});
