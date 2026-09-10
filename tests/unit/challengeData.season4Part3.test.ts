import { describe, expect, test } from "vitest";
import { seasons } from "@/lib/challengeData";

describe("season 4 part 3 (issue #51) task additions", () => {
  const season4 = seasons.find((s) => s.id === "season-4");
  const categories = season4?.categories ?? [];
  const tasks = categories.flatMap((category) => category.tasks);
  const byId = new Map(tasks.map((task) => [task.id, task]));

  test("adds the 5 new mission-log story tasks", () => {
    const missionLog = categories.find((c) => c.id === "mission-log");
    const missionIds = new Set((missionLog?.tasks ?? []).map((t) => t.id));

    expect(missionIds.has("s4-ml-59")).toBe(true);
    expect(missionIds.has("s4-ml-60")).toBe(true);
    expect(missionIds.has("s4-ml-61")).toBe(true);
    expect(missionIds.has("s4-ml-62")).toBe(true);
    expect(missionIds.has("s4-ml-63")).toBe(true);
  });

  test("story tasks use progressMax:1 and the expected rewards", () => {
    expect(byId.get("s4-ml-59")?.progressMax).toBe(1);
    expect(byId.get("s4-ml-59")?.rewards?.map((r) => r.altKey)).toEqual([
      "rewards.season4.ecstatic_crystal",
      "rewards.season4.greed_scythe",
    ]);

    expect(byId.get("s4-ml-60")?.rewards?.map((r) => r.altKey)).toEqual([
      "rewards.season4.ecstatic_crystal",
      "rewards.season4.shattered_light_olga",
    ]);

    expect(byId.get("s4-ml-61")?.rewards?.map((r) => r.altKey)).toEqual([
      "rewards.season4.ecstatic_crystal",
      "rewards.season4.emilys_sword",
    ]);

    expect(byId.get("s4-ml-62")?.rewards?.map((r) => r.altKey)).toEqual([
      "rewards.season4.ecstatic_crystal",
      "rewards.season4.shattered_light_anes",
    ]);

    expect(byId.get("s4-ml-63")?.rewards?.map((r) => r.altKey)).toEqual([
      "rewards.season4.id_card_pagna",
      "rewards.season4.save_data_pagna",
    ]);
  });

  test("wires the new mission-log children into their existing derived parents", () => {
    expect(byId.get("s4-ml-64")?.isChild).toBe(true);
    expect(byId.get("s4-ml-65")?.isChild).toBe(true);

    expect(byId.get("s4-ml-48")?.childIds).toContain("s4-ml-64");
    expect(byId.get("s4-ml-32")?.childIds).toContain("s4-ml-65");

    expect(byId.get("s4-ml-64")?.rewards?.map((r) => r.altKey)).toEqual([
      "rewards.season4.ecstatic_crystal",
    ]);
    expect(byId.get("s4-ml-64")?.rewards?.[0]?.amount).toBe(200);
    expect(byId.get("s4-ml-65")?.rewards?.[0]?.amount).toBe(200);
  });

  test("adds the 2 new non-child chaos-analysis tasks", () => {
    const chaosAnalysis = categories.find((c) => c.id === "chaos-analysis");
    const chaosIds = new Set((chaosAnalysis?.tasks ?? []).map((t) => t.id));

    expect(chaosIds.has("s4-ca-70")).toBe(true);
    expect(chaosIds.has("s4-ca-71")).toBe(true);
    expect(byId.get("s4-ca-70")?.rewards?.[0]?.amount).toBe(200);
    expect(byId.get("s4-ca-71")?.rewards?.[0]?.amount).toBe(200);
  });

  test("wires the new chaos-analysis child into its derived parent", () => {
    expect(byId.get("s4-ca-72")?.isChild).toBe(true);
    expect(byId.get("s4-ca-66")?.childIds).toContain("s4-ca-72");
    expect(byId.get("s4-ca-72")?.rewards?.[0]?.amount).toBe(2000);
  });

  test("wires the new battle-report children into their derived parents", () => {
    expect(byId.get("s4-br-17")?.isChild).toBe(true);
    expect(byId.get("s4-br-18")?.isChild).toBe(true);

    expect(byId.get("s4-br-7")?.childIds).toContain("s4-br-17");
    expect(byId.get("s4-br-12")?.childIds).toContain("s4-br-18");

    expect(byId.get("s4-br-17")?.rewards?.map((r) => r.altKey)).toEqual([
      "rewards.season4.petit_anes",
    ]);
    expect(byId.get("s4-br-18")?.rewards?.map((r) => r.altKey)).toEqual([
      "rewards.season4.id_card_kaleidoscope_hatchery",
      "rewards.season4.save_data_kaleidoscope_hatchery",
    ]);
  });

  test("no titleKey/descriptionKey/altKey uses the raw: prefix", () => {
    const newIds = [
      "s4-ml-59", "s4-ml-60", "s4-ml-61", "s4-ml-62", "s4-ml-63", "s4-ml-64", "s4-ml-65",
      "s4-ca-70", "s4-ca-71", "s4-ca-72",
      "s4-br-17", "s4-br-18",
    ];

    for (const id of newIds) {
      const t = byId.get(id);
      expect(t, `task ${id} should exist`).toBeDefined();
      expect(t?.titleKey.startsWith("raw:")).toBe(false);
      expect(t?.descriptionKey.startsWith("raw:")).toBe(false);
      for (const r of t?.rewards ?? []) {
        expect(r.altKey.startsWith("raw:")).toBe(false);
      }
    }
  });
});
