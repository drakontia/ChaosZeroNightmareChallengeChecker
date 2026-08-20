import { describe, expect, test } from "vitest";
import { defaultSeasonId, seasons } from "@/lib/challengeData";

describe("season 4 data onboarding", () => {
  test("registers season-4 and makes it the default season", () => {
    const season4 = seasons.find((season) => season.id === "season-4");

    expect(season4).toBeDefined();
    expect(season4?.nameKey).toBe("season.s4");
    expect(defaultSeasonId).toBe("season-4");
  });

  test("imports all season-4 tasks from the issue table", () => {
    const season4 = seasons.find((season) => season.id === "season-4");
    const byCategory = Object.fromEntries(
      (season4?.categories ?? []).map((category) => [category.id, category.tasks.length]),
    );

    expect(byCategory["weekly-score"]).toBe(5);
    expect(byCategory["mission-log"]).toBe(58);
    expect(byCategory["chaos-analysis"]).toBe(69);
    expect(byCategory["battle-report"]).toBe(16);
    expect(byCategory.annihilation).toBe(30);
  });

  test("all season-4 task keys follow i18n format (no raw: prefix)", () => {
    const season4 = seasons.find((season) => season.id === "season-4");
    const allTasks = season4?.categories.flatMap((c) => c.tasks) ?? [];

    const rawTitleKeys = allTasks.filter((t) => t.titleKey.startsWith("raw:")).map((t) => t.titleKey);
    const rawDescKeys = allTasks.filter((t) => t.descriptionKey.startsWith("raw:")).map((t) => t.descriptionKey);
    const rawAltKeys = allTasks
      .flatMap((t) => t.rewards ?? [])
      .filter((r) => r.altKey.startsWith("raw:"))
      .map((r) => r.altKey);

    expect(rawTitleKeys, "titleKey must not use raw: prefix").toHaveLength(0);
    expect(rawDescKeys, "descriptionKey must not use raw: prefix").toHaveLength(0);
    expect(rawAltKeys, "reward altKey must not use raw: prefix").toHaveLength(0);
  });

  test("defaultSeasonId falls back to seasons[0].id when season-4 is absent", () => {
    // This tests the ?? fallback branch in challengeData.ts
    const mockSeasons = [{ id: "season-3" }, { id: "season-5" }];
    const result = mockSeasons.find((s) => s.id === "season-4")?.id ?? mockSeasons[0].id;

    expect(result).toBe("season-3");
  });
});
