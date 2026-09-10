import { describe, expect, test } from "vitest";
import { seasons } from "@/lib/challengeData";
import jaMessages from "@/messages/ja/common.json";

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

  test("replaces the placeholder mission-log children of their existing derived parents", () => {
    expect(byId.get("s4-ml-31")?.isChild).toBe(true);
    expect(byId.get("s4-ml-47")?.isChild).toBe(true);

    expect(byId.get("s4-ml-48")?.childIds).toContain("s4-ml-31");
    expect(byId.get("s4-ml-32")?.childIds).toContain("s4-ml-47");

    expect(byId.get("s4-ml-31")?.rewards?.map((r) => r.altKey)).toEqual([
      "rewards.season4.ecstatic_crystal",
    ]);
    expect(byId.get("s4-ml-31")?.rewards?.[0]?.amount).toBe(200);
    expect(byId.get("s4-ml-47")?.rewards?.[0]?.amount).toBe(200);
  });

  test("replaces the 2 placeholder chaos-analysis tasks with real content", () => {
    const chaosAnalysis = categories.find((c) => c.id === "chaos-analysis");
    const chaosIds = new Set((chaosAnalysis?.tasks ?? []).map((t) => t.id));

    expect(chaosIds.has("s4-ca-67")).toBe(true);
    expect(chaosIds.has("s4-ca-68")).toBe(true);
    expect(byId.get("s4-ca-67")?.rewards?.[0]?.amount).toBe(200);
    expect(byId.get("s4-ca-68")?.rewards?.[0]?.amount).toBe(200);
  });

  test("replaces the placeholder chaos-analysis child of the derived parent", () => {
    expect(byId.get("s4-ca-69")?.isChild).toBe(true);
    expect(byId.get("s4-ca-66")?.childIds).toContain("s4-ca-69");
    expect(byId.get("s4-ca-69")?.rewards?.[0]?.amount).toBe(2000);
  });

  test("replaces the placeholder battle-report children of the derived parents", () => {
    expect(byId.get("s4-br-15")?.isChild).toBe(true);
    expect(byId.get("s4-br-16")?.isChild).toBe(true);

    expect(byId.get("s4-br-7")?.childIds).toContain("s4-br-15");
    expect(byId.get("s4-br-12")?.childIds).toContain("s4-br-16");

    expect(byId.get("s4-br-15")?.rewards?.map((r) => r.altKey)).toEqual([
      "rewards.season4.petit_anes",
    ]);
    expect(byId.get("s4-br-16")?.rewards?.map((r) => r.altKey)).toEqual([
      "rewards.season4.id_card_kaleidoscope_hatchery",
      "rewards.season4.save_data_kaleidoscope_hatchery",
    ]);
  });

  test("no remaining 'アップデート予定' placeholder text on the replaced tasks", () => {
    const tasksMessages = jaMessages.tasks as Record<string, { title: string; description: string }>;
    const replacedKeys = ["s4ML31", "s4ML47", "s4CA67", "s4CA68", "s4CA69", "s4BR15", "s4BR16"];

    for (const key of replacedKeys) {
      expect(tasksMessages[key]?.title).not.toContain("アップデート予定");
    }
  });

  test("no titleKey/descriptionKey/altKey uses the raw: prefix", () => {
    const newIds = [
      "s4-ml-59", "s4-ml-60", "s4-ml-61", "s4-ml-62", "s4-ml-63", "s4-ml-31", "s4-ml-47",
      "s4-ca-67", "s4-ca-68", "s4-ca-69",
      "s4-br-15", "s4-br-16",
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
