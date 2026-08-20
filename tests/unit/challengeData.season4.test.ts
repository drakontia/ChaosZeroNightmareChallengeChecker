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
});
