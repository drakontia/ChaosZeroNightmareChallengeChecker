import { Season } from "@/types";
import { rewardOf } from "../rewardHelper";

export const season4: Season = 
{
  id: "season-4",
  nameKey: "season.s4",
  categories: [
    // ─── 今週の達成スコア ──────────────────────────────────────────
    {
      id: "weekly-score",
      tasks: [
        {
          id: "s4-ws-1",
          status: "manual",
          titleKey: "tasks.s4WS1.title",
          descriptionKey: "tasks.s4WS1.description",
          rewards: [
            rewardOf("ecstatic_crystal", 1000),
            rewardOf("unit", 25000),
          ],
          progressMax: 2000,
        },
        {
          id: "s4-ws-2",
          status: "manual",
          titleKey: "tasks.s4WS2.title",
          descriptionKey: "tasks.s4WS2.description",
          rewards: [
            rewardOf("ecstatic_crystal", 1000),
            rewardOf("crystal", 20),
          ],
          progressMax: 3000,
        },
        {
          id: "s4-ws-3",
          status: "manual",
          titleKey: "tasks.s4WS3.title",
          descriptionKey: "tasks.s4WS3.description",
          rewards: [
            rewardOf("ecstatic_crystal", 1000),
            rewardOf("crystal", 20),
          ],
          progressMax: 4000,
        },
        {
          id: "s4-ws-4",
          status: "manual",
          titleKey: "tasks.s4WS4.title",
          descriptionKey: "tasks.s4WS4.description",
          rewards: [
            rewardOf("ecstatic_crystal", 1000),
            rewardOf("crystal", 20),
          ],
          progressMax: 6000,
        },
        {
          id: "s4-ws-5",
          status: "manual",
          titleKey: "tasks.s4WS5.title",
          descriptionKey: "tasks.s4WS5.description",
          rewards: [
            rewardOf("ecstatic_crystal", 1000),
            rewardOf("crystal", 20),
          ],
          progressMax: 8000,
        },
      ],
    },

    // ─── 任務記録 ──────────────────────────────────────────────
    {
      id: "mission-log",
      tasks: [
        {
          id: "s4-ml-1",
          status: "manual",
          titleKey: "tasks.s4ML1.title",
          descriptionKey: "tasks.s4ML1.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("unit", 25000),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-2",
          status: "manual",
          titleKey: "tasks.s4ML2.title",
          descriptionKey: "tasks.s4ML2.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("hildes_bow"),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-3",
          status: "manual",
          titleKey: "tasks.s4ML3.title",
          descriptionKey: "tasks.s4ML3.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("unis_gatling_gun"),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-4",
          status: "manual",
          titleKey: "tasks.s4ML4.title",
          descriptionKey: "tasks.s4ML4.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("shattered_light_hilde"),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-5",
          status: "manual",
          titleKey: "tasks.s4ML5.title",
          descriptionKey: "tasks.s4ML5.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("cute_snake_ornament"),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-6",
          status: "manual",
          titleKey: "tasks.s4ML6.title",
          descriptionKey: "tasks.s4ML6.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("black_panther_ears"),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-7",
          status: "manual",
          titleKey: "tasks.s4ML7.title",
          descriptionKey: "tasks.s4ML7.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("shattered_light_arabella"),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-8",
          status: "manual",
          titleKey: "tasks.s4ML8.title",
          descriptionKey: "tasks.s4ML8.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("unit", 50000),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-9",
          status: "manual",
          titleKey: "tasks.s4ML9.title",
          descriptionKey: "tasks.s4ML9.description",
          rewards: [
            rewardOf("support_data", 4),
            rewardOf("battle_memory", 8),
          ],
          progressMax: 10000,
        },
        {
          id: "s4-ml-10",
          status: "manual",
          titleKey: "tasks.s4ML10.title",
          descriptionKey: "tasks.s4ML10.description",
          rewards: [
            rewardOf("support_data", 4),
            rewardOf("battle_memory", 8),
          ],
          progressMax: 30000,
        },
        {
          id: "s4-ml-11",
          status: "manual",
          titleKey: "tasks.s4ML11.title",
          descriptionKey: "tasks.s4ML11.description",
          rewards: [
            rewardOf("support_data", 4),
            rewardOf("battle_memory", 8),
          ],
          progressMax: 50000,
        },
        {
          id: "s4-ml-12",
          status: "manual",
          titleKey: "tasks.s4ML12.title",
          descriptionKey: "tasks.s4ML12.description",
          rewards: [
            rewardOf("support_data", 4),
            rewardOf("battle_memory", 8),
          ],
          progressMax: 100000,
        },
        {
          id: "s4-ml-13",
          status: "manual",
          titleKey: "tasks.s4ML13.title",
          descriptionKey: "tasks.s4ML13.description",
          rewards: [
            rewardOf("support_data", 4),
            rewardOf("battle_memory", 8),
          ],
          progressMax: 150000,
        },
        {
          id: "s4-ml-14",
          status: "manual",
          titleKey: "tasks.s4ML14.title",
          descriptionKey: "tasks.s4ML14.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
            rewardOf("memory_traces", 50),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-15",
          status: "manual",
          titleKey: "tasks.s4ML15.title",
          descriptionKey: "tasks.s4ML15.description",
          rewards: [
            rewardOf("ecstatic_crystal", 300),
            rewardOf("memory_traces", 50),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-16",
          status: "manual",
          titleKey: "tasks.s4ML16.title",
          descriptionKey: "tasks.s4ML16.description",
          rewards: [
            rewardOf("ecstatic_crystal", 400),
            rewardOf("memory_traces", 50),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-17",
          status: "manual",
          titleKey: "tasks.s4ML17.title",
          descriptionKey: "tasks.s4ML17.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-18",
          status: "manual",
          titleKey: "tasks.s4ML18.title",
          descriptionKey: "tasks.s4ML18.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-19",
          status: "manual",
          titleKey: "tasks.s4ML19.title",
          descriptionKey: "tasks.s4ML19.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-20",
          status: "manual",
          titleKey: "tasks.s4ML20.title",
          descriptionKey: "tasks.s4ML20.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-21",
          status: "manual",
          titleKey: "tasks.s4ML21.title",
          descriptionKey: "tasks.s4ML21.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-22",
          status: "manual",
          titleKey: "tasks.s4ML22.title",
          descriptionKey: "tasks.s4ML22.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-23",
          status: "manual",
          titleKey: "tasks.s4ML23.title",
          descriptionKey: "tasks.s4ML23.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-24",
          status: "manual",
          titleKey: "tasks.s4ML24.title",
          descriptionKey: "tasks.s4ML24.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-25",
          status: "manual",
          titleKey: "tasks.s4ML25.title",
          descriptionKey: "tasks.s4ML25.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-26",
          status: "manual",
          titleKey: "tasks.s4ML26.title",
          descriptionKey: "tasks.s4ML26.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-27",
          status: "manual",
          titleKey: "tasks.s4ML27.title",
          descriptionKey: "tasks.s4ML27.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-28",
          status: "manual",
          titleKey: "tasks.s4ML28.title",
          descriptionKey: "tasks.s4ML28.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-29",
          status: "manual",
          titleKey: "tasks.s4ML29.title",
          descriptionKey: "tasks.s4ML29.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-30",
          status: "manual",
          titleKey: "tasks.s4ML30.title",
          descriptionKey: "tasks.s4ML30.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-31",
          status: "manual",
          titleKey: "tasks.s4ML31.title",
          descriptionKey: "tasks.s4ML31.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-32",
          status: "derived",
          titleKey: "tasks.s4ML32.title",
          descriptionKey: "tasks.s4ML32.description",
          rewards: [
            rewardOf("prism_lens", 2),
          ],
          childIds: ["s4-ml-33", "s4-ml-34", "s4-ml-35", "s4-ml-36", "s4-ml-37", "s4-ml-38", "s4-ml-39", "s4-ml-40", "s4-ml-41", "s4-ml-42", "s4-ml-43", "s4-ml-44", "s4-ml-45", "s4-ml-46", "s4-ml-47"],
        },
        {
          id: "s4-ml-33",
          status: "manual",
          titleKey: "tasks.s4ML33.title",
          descriptionKey: "tasks.s4ML33.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-34",
          status: "manual",
          titleKey: "tasks.s4ML34.title",
          descriptionKey: "tasks.s4ML34.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-35",
          status: "manual",
          titleKey: "tasks.s4ML35.title",
          descriptionKey: "tasks.s4ML35.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-36",
          status: "manual",
          titleKey: "tasks.s4ML36.title",
          descriptionKey: "tasks.s4ML36.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-37",
          status: "manual",
          titleKey: "tasks.s4ML37.title",
          descriptionKey: "tasks.s4ML37.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-38",
          status: "manual",
          titleKey: "tasks.s4ML38.title",
          descriptionKey: "tasks.s4ML38.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-39",
          status: "manual",
          titleKey: "tasks.s4ML39.title",
          descriptionKey: "tasks.s4ML39.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-40",
          status: "manual",
          titleKey: "tasks.s4ML40.title",
          descriptionKey: "tasks.s4ML40.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-41",
          status: "manual",
          titleKey: "tasks.s4ML41.title",
          descriptionKey: "tasks.s4ML41.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-42",
          status: "manual",
          titleKey: "tasks.s4ML42.title",
          descriptionKey: "tasks.s4ML42.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-43",
          status: "manual",
          titleKey: "tasks.s4ML43.title",
          descriptionKey: "tasks.s4ML43.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-44",
          status: "manual",
          titleKey: "tasks.s4ML44.title",
          descriptionKey: "tasks.s4ML44.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-45",
          status: "manual",
          titleKey: "tasks.s4ML45.title",
          descriptionKey: "tasks.s4ML45.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-46",
          status: "manual",
          titleKey: "tasks.s4ML46.title",
          descriptionKey: "tasks.s4ML46.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-47",
          status: "manual",
          titleKey: "tasks.s4ML47.title",
          descriptionKey: "tasks.s4ML47.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ml-48",
          status: "derived",
          titleKey: "tasks.s4ML48.title",
          descriptionKey: "tasks.s4ML48.description",
          rewards: [
            rewardOf("desire_guidepost"),
          ],
          childIds: ["s4-ml-17", "s4-ml-18", "s4-ml-19", "s4-ml-20", "s4-ml-21", "s4-ml-22", "s4-ml-23", "s4-ml-24", "s4-ml-25", "s4-ml-26", "s4-ml-27", "s4-ml-28", "s4-ml-29", "s4-ml-30", "s4-ml-31"],
        },
        {
          id: "s4-ml-49",
          status: "derived",
          titleKey: "tasks.s4ML49.title",
          descriptionKey: "tasks.s4ML49.description",
          rewards: [
            rewardOf("greed_without_price"),
          ],
          childIds: ["s4-ml-50", "s4-ml-51"],
        },
        {
          id: "s4-ml-50",
          status: "manual",
          titleKey: "tasks.s4ML50.title",
          descriptionKey: "tasks.s4ML50.description",
          rewards: [
            rewardOf("universal_support_certificate", 15),
            rewardOf("universal_tactics_certificate", 15),
          ],
          progressMax: 1,
          isChild: true,
        },
        {
          id: "s4-ml-51",
          status: "manual",
          titleKey: "tasks.s4ML51.title",
          descriptionKey: "tasks.s4ML51.description",
          rewards: [
            rewardOf("universal_support_certificate", 15),
            rewardOf("universal_tactics_certificate", 15),
          ],
          progressMax: 1,
          isChild: true,
        },
        {
          id: "s4-ml-52",
          status: "manual",
          titleKey: "tasks.s4ML52.title",
          descriptionKey: "tasks.s4ML52.description",
          rewards: [
            rewardOf("shattered_light_and_claw"),
          ],
          progressMax: 1,
        },
        {
          id: "s4-ml-53",
          status: "manual",
          titleKey: "tasks.s4ML53.title",
          descriptionKey: "tasks.s4ML53.description",
        },
        {
          id: "s4-ml-54",
          status: "manual",
          titleKey: "tasks.s4ML54.title",
          descriptionKey: "tasks.s4ML54.description",
        },
        {
          id: "s4-ml-55",
          status: "manual",
          titleKey: "tasks.s4ML55.title",
          descriptionKey: "tasks.s4ML55.description",
        },
        {
          id: "s4-ml-56",
          status: "manual",
          titleKey: "tasks.s4ML56.title",
          descriptionKey: "tasks.s4ML56.description",
        },
        {
          id: "s4-ml-57",
          status: "manual",
          titleKey: "tasks.s4ML57.title",
          descriptionKey: "tasks.s4ML57.description",
        },
        {
          id: "s4-ml-58",
          status: "manual",
          titleKey: "tasks.s4ML58.title",
          descriptionKey: "tasks.s4ML58.description",
        },
      ],
    },

    // ─── カオス究明 ─────────────────────────────────────────────
    {
      id: "chaos-analysis",
      tasks: [
        {
          id: "s4-ca-1",
          status: "manual",
          titleKey: "tasks.s4CA1.title",
          descriptionKey: "tasks.s4CA1.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("potencial_disk", 8),
          ],
        },
        {
          id: "s4-ca-2",
          status: "manual",
          titleKey: "tasks.s4CA2.title",
          descriptionKey: "tasks.s4CA2.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("potencial_disk", 8),
          ],
        },
        {
          id: "s4-ca-3",
          status: "manual",
          titleKey: "tasks.s4CA3.title",
          descriptionKey: "tasks.s4CA3.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("potencial_disk", 8),
          ],
        },
        {
          id: "s4-ca-4",
          status: "manual",
          titleKey: "tasks.s4CA4.title",
          descriptionKey: "tasks.s4CA4.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("potencial_disk", 8),
          ],
        },
        {
          id: "s4-ca-5",
          status: "manual",
          titleKey: "tasks.s4CA5.title",
          descriptionKey: "tasks.s4CA5.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("potencial_disk", 8),
          ],
        },
        {
          id: "s4-ca-6",
          status: "manual",
          titleKey: "tasks.s4CA6.title",
          descriptionKey: "tasks.s4CA6.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("potencial_disk", 8),
          ],
        },
        {
          id: "s4-ca-7",
          status: "manual",
          titleKey: "tasks.s4CA7.title",
          descriptionKey: "tasks.s4CA7.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("potencial_disk", 8),
          ],
        },
        {
          id: "s4-ca-8",
          status: "manual",
          titleKey: "tasks.s4CA8.title",
          descriptionKey: "tasks.s4CA8.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("potencial_disk", 8),
          ],
        },
        {
          id: "s4-ca-9",
          status: "manual",
          titleKey: "tasks.s4CA9.title",
          descriptionKey: "tasks.s4CA9.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("abyssal_survivor"),
          ],
        },
        {
          id: "s4-ca-10",
          status: "derived",
          titleKey: "tasks.s4CA10.title",
          descriptionKey: "tasks.s4CA10.description",
          rewards: [
            rewardOf("crystal", 20),
          ],
          childIds: ["s4-ca-18", "s4-ca-19", "s4-ca-20", "s4-ca-21", "s4-ca-22"],
        },
        {
          id: "s4-ca-11",
          status: "derived",
          titleKey: "tasks.s4CA11.title",
          descriptionKey: "tasks.s4CA11.description",
          rewards: [
            rewardOf("crystal", 20),
          ],
          childIds: ["s4-ca-16", "s4-ca-27", "s4-ca-28", "s4-ca-38", "s4-ca-48", "s4-ca-49"],
        },
        {
          id: "s4-ca-12",
          status: "derived",
          titleKey: "tasks.s4CA12.title",
          descriptionKey: "tasks.s4CA12.description",
          rewards: [
            rewardOf("crystal", 20),
          ],
          childIds: ["s4-ca-15", "s4-ca-29", "s4-ca-37"],
        },
        {
          id: "s4-ca-13",
          status: "derived",
          titleKey: "tasks.s4CA13.title",
          descriptionKey: "tasks.s4CA13.description",
          rewards: [
            rewardOf("crystal", 20),
          ],
          childIds: ["s4-ca-34", "s4-ca-35"],
        },
        {
          id: "s4-ca-14",
          status: "manual",
          titleKey: "tasks.s4CA14.title",
          descriptionKey: "tasks.s4CA14.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-15",
          status: "manual",
          titleKey: "tasks.s4CA15.title",
          descriptionKey: "tasks.s4CA15.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-16",
          status: "manual",
          titleKey: "tasks.s4CA16.title",
          descriptionKey: "tasks.s4CA16.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-17",
          status: "manual",
          titleKey: "tasks.s4CA17.title",
          descriptionKey: "tasks.s4CA17.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-18",
          status: "manual",
          titleKey: "tasks.s4CA18.title",
          descriptionKey: "tasks.s4CA18.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-19",
          status: "manual",
          titleKey: "tasks.s4CA19.title",
          descriptionKey: "tasks.s4CA19.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-20",
          status: "manual",
          titleKey: "tasks.s4CA20.title",
          descriptionKey: "tasks.s4CA20.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-21",
          status: "manual",
          titleKey: "tasks.s4CA21.title",
          descriptionKey: "tasks.s4CA21.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-22",
          status: "manual",
          titleKey: "tasks.s4CA22.title",
          descriptionKey: "tasks.s4CA22.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-23",
          status: "manual",
          titleKey: "tasks.s4CA23.title",
          descriptionKey: "tasks.s4CA23.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-24",
          status: "manual",
          titleKey: "tasks.s4CA24.title",
          descriptionKey: "tasks.s4CA24.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-25",
          status: "manual",
          titleKey: "tasks.s4CA25.title",
          descriptionKey: "tasks.s4CA25.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-26",
          status: "manual",
          titleKey: "tasks.s4CA26.title",
          descriptionKey: "tasks.s4CA26.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-27",
          status: "manual",
          titleKey: "tasks.s4CA27.title",
          descriptionKey: "tasks.s4CA27.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-28",
          status: "manual",
          titleKey: "tasks.s4CA28.title",
          descriptionKey: "tasks.s4CA28.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-29",
          status: "manual",
          titleKey: "tasks.s4CA29.title",
          descriptionKey: "tasks.s4CA29.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-30",
          status: "manual",
          titleKey: "tasks.s4CA30.title",
          descriptionKey: "tasks.s4CA30.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-31",
          status: "manual",
          titleKey: "tasks.s4CA31.title",
          descriptionKey: "tasks.s4CA31.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-32",
          status: "manual",
          titleKey: "tasks.s4CA32.title",
          descriptionKey: "tasks.s4CA32.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-33",
          status: "manual",
          titleKey: "tasks.s4CA33.title",
          descriptionKey: "tasks.s4CA33.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-34",
          status: "manual",
          titleKey: "tasks.s4CA34.title",
          descriptionKey: "tasks.s4CA34.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-35",
          status: "manual",
          titleKey: "tasks.s4CA35.title",
          descriptionKey: "tasks.s4CA35.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-36",
          status: "manual",
          titleKey: "tasks.s4CA36.title",
          descriptionKey: "tasks.s4CA36.description",
        },
        {
          id: "s4-ca-37",
          status: "manual",
          titleKey: "tasks.s4CA37.title",
          descriptionKey: "tasks.s4CA37.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-38",
          status: "manual",
          titleKey: "tasks.s4CA38.title",
          descriptionKey: "tasks.s4CA38.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-39",
          status: "manual",
          titleKey: "tasks.s4CA39.title",
          descriptionKey: "tasks.s4CA39.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-40",
          status: "manual",
          titleKey: "tasks.s4CA40.title",
          descriptionKey: "tasks.s4CA40.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-41",
          status: "manual",
          titleKey: "tasks.s4CA41.title",
          descriptionKey: "tasks.s4CA41.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-42",
          status: "manual",
          titleKey: "tasks.s4CA42.title",
          descriptionKey: "tasks.s4CA42.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-43",
          status: "manual",
          titleKey: "tasks.s4CA43.title",
          descriptionKey: "tasks.s4CA43.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-44",
          status: "manual",
          titleKey: "tasks.s4CA44.title",
          descriptionKey: "tasks.s4CA44.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-45",
          status: "manual",
          titleKey: "tasks.s4CA45.title",
          descriptionKey: "tasks.s4CA45.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-46",
          status: "manual",
          titleKey: "tasks.s4CA46.title",
          descriptionKey: "tasks.s4CA46.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-47",
          status: "manual",
          titleKey: "tasks.s4CA47.title",
          descriptionKey: "tasks.s4CA47.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-48",
          status: "manual",
          titleKey: "tasks.s4CA48.title",
          descriptionKey: "tasks.s4CA48.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-49",
          status: "manual",
          titleKey: "tasks.s4CA49.title",
          descriptionKey: "tasks.s4CA49.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-50",
          status: "manual",
          titleKey: "tasks.s4CA50.title",
          descriptionKey: "tasks.s4CA50.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-51",
          status: "manual",
          titleKey: "tasks.s4CA51.title",
          descriptionKey: "tasks.s4CA51.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-52",
          status: "manual",
          titleKey: "tasks.s4CA52.title",
          descriptionKey: "tasks.s4CA52.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-53",
          status: "manual",
          titleKey: "tasks.s4CA53.title",
          descriptionKey: "tasks.s4CA53.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-54",
          status: "manual",
          titleKey: "tasks.s4CA54.title",
          descriptionKey: "tasks.s4CA54.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-55",
          status: "manual",
          titleKey: "tasks.s4CA55.title",
          descriptionKey: "tasks.s4CA55.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-56",
          status: "manual",
          titleKey: "tasks.s4CA56.title",
          descriptionKey: "tasks.s4CA56.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-57",
          status: "manual",
          titleKey: "tasks.s4CA57.title",
          descriptionKey: "tasks.s4CA57.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-58",
          status: "manual",
          titleKey: "tasks.s4CA58.title",
          descriptionKey: "tasks.s4CA58.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-59",
          status: "manual",
          titleKey: "tasks.s4CA59.title",
          descriptionKey: "tasks.s4CA59.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-60",
          status: "manual",
          titleKey: "tasks.s4CA60.title",
          descriptionKey: "tasks.s4CA60.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-61",
          status: "manual",
          titleKey: "tasks.s4CA61.title",
          descriptionKey: "tasks.s4CA61.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-62",
          status: "manual",
          titleKey: "tasks.s4CA62.title",
          descriptionKey: "tasks.s4CA62.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
          ],
        },
        {
          id: "s4-ca-63",
          status: "manual",
          titleKey: "tasks.s4CA63.title",
          descriptionKey: "tasks.s4CA63.description",
          rewards: [
            rewardOf("ecstatic_crystal", 2000),
          ],
          isChild: true,
        },
        {
          id: "s4-ca-64",
          status: "derived",
          titleKey: "tasks.s4CA64.title",
          descriptionKey: "tasks.s4CA64.description",
          rewards: [
            rewardOf("pagna_invader"),
          ],
          childIds: ["s4-ca-15", "s4-ca-16", "s4-ca-25", "s4-ca-27", "s4-ca-28", "s4-ca-29", "s4-ca-37", "s4-ca-38", "s4-ca-48", "s4-ca-49", "s4-ca-58"],
        },
        {
          id: "s4-ca-65",
          status: "manual",
          titleKey: "tasks.s4CA65.title",
          descriptionKey: "tasks.s4CA65.description",
          rewards: [
            rewardOf("unknown_ecosystem"),
          ],
        },
        {
          id: "s4-ca-66",
          status: "derived",
          titleKey: "tasks.s4CA66.title",
          descriptionKey: "tasks.s4CA66.description",
          rewards: [
            rewardOf("glorious_metamorphosis"),
          ],
          childIds: ["s4-ca-63", "s4-ca-69"],
        },
        {
          id: "s4-ca-67",
          status: "manual",
          titleKey: "tasks.s4CA67.title",
          descriptionKey: "tasks.s4CA67.description",
        },
        {
          id: "s4-ca-68",
          status: "manual",
          titleKey: "tasks.s4CA68.title",
          descriptionKey: "tasks.s4CA68.description",
        },
        {
          id: "s4-ca-69",
          status: "manual",
          titleKey: "tasks.s4CA69.title",
          descriptionKey: "tasks.s4CA69.description",
          isChild: true,
        },
      ],
    },

    // ─── 戦闘報告 ──────────────────────────────────────────────
    {
      id: "battle-report",
      tasks: [
        {
          id: "s4-br-1",
          status: "manual",
          titleKey: "tasks.s4BR1.title",
          descriptionKey: "tasks.s4BR1.description",
          rewards: [
            rewardOf("prism_of_all_things"),
          ],
        },
        {
          id: "s4-br-2",
          status: "derived",
          titleKey: "tasks.s4BR2.title",
          descriptionKey: "tasks.s4BR2.description",
          rewards: [
            rewardOf("condensed_world"),
          ],
          childIds: ["s4-br-3", "s4-br-4", "s4-br-5", "s4-br-6"],
        },
        {
          id: "s4-br-3",
          status: "manual",
          titleKey: "tasks.s4BR3.title",
          descriptionKey: "tasks.s4BR3.description",
          rewards: [
            rewardOf("ecstatic_crystal", 500),
          ],
          isChild: true,
        },
        {
          id: "s4-br-4",
          status: "manual",
          titleKey: "tasks.s4BR4.title",
          descriptionKey: "tasks.s4BR4.description",
          rewards: [
            rewardOf("ecstatic_crystal", 500),
          ],
          isChild: true,
        },
        {
          id: "s4-br-5",
          status: "manual",
          titleKey: "tasks.s4BR5.title",
          descriptionKey: "tasks.s4BR5.description",
          rewards: [
            rewardOf("ecstatic_crystal", 500),
          ],
          isChild: true,
        },
        {
          id: "s4-br-6",
          status: "manual",
          titleKey: "tasks.s4BR6.title",
          descriptionKey: "tasks.s4BR6.description",
          rewards: [
            rewardOf("ecstatic_crystal", 500),
          ],
          isChild: true,
        },
        {
          id: "s4-br-7",
          status: "derived",
          titleKey: "tasks.s4BR7.title",
          descriptionKey: "tasks.s4BR7.description",
          rewards: [
            rewardOf("perfect_taxidermy"),
          ],
          childIds: ["s4-br-8", "s4-br-9", "s4-br-10", "s4-br-11", "s4-br-15"],
        },
        {
          id: "s4-br-8",
          status: "manual",
          titleKey: "tasks.s4BR8.title",
          descriptionKey: "tasks.s4BR8.description",
          rewards: [
            rewardOf("ecstatic_crystal", 1000),
          ],
          isChild: true,
        },
        {
          id: "s4-br-9",
          status: "manual",
          titleKey: "tasks.s4BR9.title",
          descriptionKey: "tasks.s4BR9.description",
          rewards: [
            rewardOf("ecstatic_crystal", 1000),
          ],
          isChild: true,
        },
        {
          id: "s4-br-10",
          status: "manual",
          titleKey: "tasks.s4BR10.title",
          descriptionKey: "tasks.s4BR10.description",
          rewards: [
            rewardOf("ecstatic_crystal", 1000),
          ],
          isChild: true,
        },
        {
          id: "s4-br-11",
          status: "manual",
          titleKey: "tasks.s4BR11.title",
          descriptionKey: "tasks.s4BR11.description",
          rewards: [
            rewardOf("ecstatic_crystal", 1000),
          ],
          isChild: true,
        },
        {
          id: "s4-br-12",
          status: "derived",
          titleKey: "tasks.s4BR12.title",
          descriptionKey: "tasks.s4BR12.description",
          rewards: [
            rewardOf("proof_of_the_fittest"),
          ],
          childIds: ["s4-br-13", "s4-br-14", "s4-br-16"],
        },
        {
          id: "s4-br-13",
          status: "manual",
          titleKey: "tasks.s4BR13.title",
          descriptionKey: "tasks.s4BR13.description",
          rewards: [
            rewardOf("ecstatic_crystal", 2000),
          ],
          isChild: true,
        },
        {
          id: "s4-br-14",
          status: "manual",
          titleKey: "tasks.s4BR14.title",
          descriptionKey: "tasks.s4BR14.description",
          rewards: [
            rewardOf("ecstatic_crystal", 2000),
          ],
          isChild: true,
        },
        {
          id: "s4-br-15",
          status: "manual",
          titleKey: "tasks.s4BR15.title",
          descriptionKey: "tasks.s4BR15.description",
          isChild: true,
        },
        {
          id: "s4-br-16",
          status: "manual",
          titleKey: "tasks.s4BR16.title",
          descriptionKey: "tasks.s4BR16.description",
          isChild: true,
        },
      ],
    },

    // ─── 壊滅作戦 ──────────────────────────────────────────────
    {
      id: "annihilation",
      tasks: [
        {
          id: "s4-an-1",
          status: "manual",
          titleKey: "tasks.s4AN1.title",
          descriptionKey: "tasks.s4AN1.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
            rewardOf("crystal", 20),
          ],
        },
        {
          id: "s4-an-2",
          status: "manual",
          titleKey: "tasks.s4AN2.title",
          descriptionKey: "tasks.s4AN2.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-3",
          status: "manual",
          titleKey: "tasks.s4AN3.title",
          descriptionKey: "tasks.s4AN3.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-4",
          status: "manual",
          titleKey: "tasks.s4AN4.title",
          descriptionKey: "tasks.s4AN4.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-5",
          status: "manual",
          titleKey: "tasks.s4AN5.title",
          descriptionKey: "tasks.s4AN5.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-6",
          status: "manual",
          titleKey: "tasks.s4AN6.title",
          descriptionKey: "tasks.s4AN6.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-7",
          status: "manual",
          titleKey: "tasks.s4AN7.title",
          descriptionKey: "tasks.s4AN7.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-8",
          status: "manual",
          titleKey: "tasks.s4AN8.title",
          descriptionKey: "tasks.s4AN8.description",
          rewards: [
            rewardOf("ecstatic_crystal", 50),
            rewardOf("memory_particles", 20),
          ],
        },
        {
          id: "s4-an-9",
          status: "manual",
          titleKey: "tasks.s4AN9.title",
          descriptionKey: "tasks.s4AN9.description",
          rewards: [
            rewardOf("ecstatic_crystal", 50),
            rewardOf("memory_particles", 20),
          ],
        },
        {
          id: "s4-an-10",
          status: "manual",
          titleKey: "tasks.s4AN10.title",
          descriptionKey: "tasks.s4AN10.description",
          rewards: [
            rewardOf("ecstatic_crystal", 50),
            rewardOf("memory_particles", 20),
          ],
        },
        {
          id: "s4-an-11",
          status: "manual",
          titleKey: "tasks.s4AN11.title",
          descriptionKey: "tasks.s4AN11.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
            rewardOf("crystal", 20),
          ],
        },
        {
          id: "s4-an-12",
          status: "manual",
          titleKey: "tasks.s4AN12.title",
          descriptionKey: "tasks.s4AN12.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-13",
          status: "manual",
          titleKey: "tasks.s4AN13.title",
          descriptionKey: "tasks.s4AN13.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-14",
          status: "manual",
          titleKey: "tasks.s4AN14.title",
          descriptionKey: "tasks.s4AN14.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-15",
          status: "manual",
          titleKey: "tasks.s4AN15.title",
          descriptionKey: "tasks.s4AN15.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-16",
          status: "manual",
          titleKey: "tasks.s4AN16.title",
          descriptionKey: "tasks.s4AN16.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-17",
          status: "manual",
          titleKey: "tasks.s4AN17.title",
          descriptionKey: "tasks.s4AN17.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-18",
          status: "manual",
          titleKey: "tasks.s4AN18.title",
          descriptionKey: "tasks.s4AN18.description",
          rewards: [
            rewardOf("ecstatic_crystal", 50),
            rewardOf("memory_particles", 20),
          ],
        },
        {
          id: "s4-an-19",
          status: "manual",
          titleKey: "tasks.s4AN19.title",
          descriptionKey: "tasks.s4AN19.description",
          rewards: [
            rewardOf("ecstatic_crystal", 50),
            rewardOf("memory_particles", 20),
          ],
        },
        {
          id: "s4-an-20",
          status: "manual",
          titleKey: "tasks.s4AN20.title",
          descriptionKey: "tasks.s4AN20.description",
          rewards: [
            rewardOf("ecstatic_crystal", 50),
            rewardOf("memory_particles", 20),
          ],
        },
        {
          id: "s4-an-21",
          status: "manual",
          titleKey: "tasks.s4AN21.title",
          descriptionKey: "tasks.s4AN21.description",
          rewards: [
            rewardOf("ecstatic_crystal", 200),
            rewardOf("crystal", 20),
          ],
        },
        {
          id: "s4-an-22",
          status: "manual",
          titleKey: "tasks.s4AN22.title",
          descriptionKey: "tasks.s4AN22.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-23",
          status: "manual",
          titleKey: "tasks.s4AN23.title",
          descriptionKey: "tasks.s4AN23.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-24",
          status: "manual",
          titleKey: "tasks.s4AN24.title",
          descriptionKey: "tasks.s4AN24.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-25",
          status: "manual",
          titleKey: "tasks.s4AN25.title",
          descriptionKey: "tasks.s4AN25.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-26",
          status: "manual",
          titleKey: "tasks.s4AN26.title",
          descriptionKey: "tasks.s4AN26.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-27",
          status: "manual",
          titleKey: "tasks.s4AN27.title",
          descriptionKey: "tasks.s4AN27.description",
          rewards: [
            rewardOf("ecstatic_crystal", 100),
            rewardOf("crystal", 10),
          ],
        },
        {
          id: "s4-an-28",
          status: "manual",
          titleKey: "tasks.s4AN28.title",
          descriptionKey: "tasks.s4AN28.description",
          rewards: [
            rewardOf("ecstatic_crystal", 50),
            rewardOf("memory_particles", 20),
          ],
        },
        {
          id: "s4-an-29",
          status: "manual",
          titleKey: "tasks.s4AN29.title",
          descriptionKey: "tasks.s4AN29.description",
          rewards: [
            rewardOf("ecstatic_crystal", 50),
            rewardOf("memory_particles", 20),
          ],
        },
        {
          id: "s4-an-30",
          status: "manual",
          titleKey: "tasks.s4AN30.title",
          descriptionKey: "tasks.s4AN30.description",
          rewards: [
            rewardOf("ecstatic_crystal", 50),
            rewardOf("memory_particles", 20),
          ],
        },
      ],
    },

  ],
};
