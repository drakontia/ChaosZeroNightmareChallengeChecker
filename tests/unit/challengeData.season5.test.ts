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
