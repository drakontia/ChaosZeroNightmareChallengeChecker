import { Season } from "@/types";
import { rewardOf } from "../rewardHelper";

export const season5: Season = {
  id: "season-5",
  nameKey: "season.s5",
  categories: [
      {
        id: "weekly-score",
        tasks: [
          {
            id: "s5-ws-1",
            status: "manual",
            titleKey: "tasks.s5WS1.title",
            descriptionKey: "tasks.s5WS1.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
              rewardOf("unit", 25000),
            ],
            progressMax: 2000,
          },
          {
            id: "s5-ws-2",
            status: "manual",
            titleKey: "tasks.s5WS2.title",
            descriptionKey: "tasks.s5WS2.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
              rewardOf("crystal", 20),
            ],
            progressMax: 3000,
          },
          {
            id: "s5-ws-3",
            status: "manual",
            titleKey: "tasks.s5WS3.title",
            descriptionKey: "tasks.s5WS3.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
              rewardOf("crystal", 20),
            ],
            progressMax: 4000,
          },
          {
            id: "s5-ws-4",
            status: "manual",
            titleKey: "tasks.s5WS4.title",
            descriptionKey: "tasks.s5WS4.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
              rewardOf("crystal", 20),
            ],
            progressMax: 6000,
          },
          {
            id: "s5-ws-5",
            status: "manual",
            titleKey: "tasks.s5WS5.title",
            descriptionKey: "tasks.s5WS5.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
              rewardOf("crystal", 20),
            ],
            progressMax: 8000,
          },
        ],
      },
      {
        id: "mission-log",
        tasks: [
          {
            id: "s5-ml-1",
            status: "manual",
            titleKey: "tasks.s5ML1.title",
            descriptionKey: "tasks.s5ML1.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("unit", 25000),
            ],
            progressMax: 1,
          },
          {
            id: "s5-ml-2",
            status: "manual",
            titleKey: "tasks.s5ML2.title",
            descriptionKey: "tasks.s5ML2.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("hildes_bow"),
            ],
            progressMax: 1,
          },
          {
            id: "s5-ml-3",
            status: "manual",
            titleKey: "tasks.s5ML3.title",
            descriptionKey: "tasks.s5ML3.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("unis_gatling_gun"),
            ],
            progressMax: 1,
          },
          {
            id: "s5-ml-4",
            status: "manual",
            titleKey: "tasks.s5ML4.title",
            descriptionKey: "tasks.s5ML4.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("promise_exchanged_in_snow_hilde"),
            ],
            progressMax: 1,
          },
          {
            id: "s5-ml-5",
            status: "manual",
            titleKey: "tasks.s5ML5.title",
            descriptionKey: "tasks.s5ML5.description",
            rewards: [
              rewardOf("support_data", 4),
              rewardOf("battle_memory", 8),
            ],
            progressMax: 10000,
          },
          {
            id: "s5-ml-6",
            status: "manual",
            titleKey: "tasks.s5ML6.title",
            descriptionKey: "tasks.s5ML6.description",
            rewards: [
              rewardOf("support_data", 4),
              rewardOf("battle_memory", 8),
            ],
            progressMax: 30000,
          },
          {
            id: "s5-ml-7",
            status: "manual",
            titleKey: "tasks.s5ML7.title",
            descriptionKey: "tasks.s5ML7.description",
            rewards: [
              rewardOf("support_data", 4),
              rewardOf("battle_memory", 8),
            ],
            progressMax: 50000,
          },
          {
            id: "s5-ml-8",
            status: "manual",
            titleKey: "tasks.s5ML8.title",
            descriptionKey: "tasks.s5ML8.description",
            rewards: [
              rewardOf("support_data", 4),
              rewardOf("battle_memory", 8),
            ],
            progressMax: 100000,
          },
          {
            id: "s5-ml-9",
            status: "manual",
            titleKey: "tasks.s5ML9.title",
            descriptionKey: "tasks.s5ML9.description",
            rewards: [
              rewardOf("support_data", 4),
              rewardOf("battle_memory", 8),
            ],
            progressMax: 150000,
          },
          {
            id: "s5-ml-10",
            status: "manual",
            titleKey: "tasks.s5ML10.title",
            descriptionKey: "tasks.s5ML10.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
              rewardOf("memory_traces", 50),
            ],
            progressMax: 1,
          },
          {
            id: "s5-ml-11",
            status: "manual",
            titleKey: "tasks.s5ML11.title",
            descriptionKey: "tasks.s5ML11.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 300),
              rewardOf("memory_traces", 50),
            ],
            progressMax: 1,
          },
          {
            id: "s5-ml-12",
            status: "manual",
            titleKey: "tasks.s5ML12.title",
            descriptionKey: "tasks.s5ML12.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 400),
              rewardOf("memory_traces", 50),
            ],
            progressMax: 1,
          },
          {
            id: "s5-ml-13",
            status: "manual",
            titleKey: "tasks.s5ML13.title",
            descriptionKey: "tasks.s5ML13.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 300),
            ],
          },
          {
            id: "s5-ml-14",
            status: "manual",
            titleKey: "tasks.s5ML14.title",
            descriptionKey: "tasks.s5ML14.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 500),
            ],
          },
          {
            id: "s5-ml-15",
            status: "derived",
            titleKey: "tasks.s5ML15.title",
            descriptionKey: "tasks.s5ML15.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 2000),
              rewardOf("unfrozen_will"),
            ],
            childIds: ["s5-ml-16", "s5-ml-17"],
          },
          {
            id: "s5-ml-16",
            status: "manual",
            titleKey: "tasks.s5ML16.title",
            descriptionKey: "tasks.s5ML16.description",
            rewards: [
              rewardOf("universal_support_certificate", 15),
              rewardOf("universal_tactics_certificate", 15),
            ],
            progressMax: 1,
            isChild: true,
          },
          {
            id: "s5-ml-17",
            status: "manual",
            titleKey: "tasks.s5ML17.title",
            descriptionKey: "tasks.s5ML17.description",
            rewards: [
              rewardOf("universal_support_certificate", 15),
              rewardOf("universal_tactics_certificate", 15),
            ],
            progressMax: 1,
            isChild: true,
          },
          {
            id: "s5-ml-18",
            status: "manual",
            titleKey: "tasks.s5ML18.title",
            descriptionKey: "tasks.s5ML18.description",
            rewards: [
              rewardOf("promise_exchanged_in_snow"),
            ],
            progressMax: 1,
          },
          {
            id: "s5-ml-19",
            status: "manual",
            titleKey: "tasks.s5ML19.title",
            descriptionKey: "tasks.s5ML19.description",
          },
          {
            id: "s5-ml-20",
            status: "manual",
            titleKey: "tasks.s5ML20.title",
            descriptionKey: "tasks.s5ML20.description",
          },
          {
            id: "s5-ml-21",
            status: "manual",
            titleKey: "tasks.s5ML21.title",
            descriptionKey: "tasks.s5ML21.description",
          },
          {
            id: "s5-ml-22",
            status: "manual",
            titleKey: "tasks.s5ML22.title",
            descriptionKey: "tasks.s5ML22.description",
          },
          {
            id: "s5-ml-23",
            status: "manual",
            titleKey: "tasks.s5ML23.title",
            descriptionKey: "tasks.s5ML23.description",
          },
          {
            id: "s5-ml-24",
            status: "manual",
            titleKey: "tasks.s5ML24.title",
            descriptionKey: "tasks.s5ML24.description",
          },
          {
            id: "s5-ml-25",
            status: "manual",
            titleKey: "tasks.s5ML25.title",
            descriptionKey: "tasks.s5ML25.description",
          },
          {
            id: "s5-ml-26",
            status: "manual",
            titleKey: "tasks.s5ML26.title",
            descriptionKey: "tasks.s5ML26.description",
          },
          {
            id: "s5-ml-27",
            status: "manual",
            titleKey: "tasks.s5ML27.title",
            descriptionKey: "tasks.s5ML27.description",
          },
          {
            id: "s5-ml-28",
            status: "manual",
            titleKey: "tasks.s5ML28.title",
            descriptionKey: "tasks.s5ML28.description",
          },
          {
            id: "s5-ml-29",
            status: "manual",
            titleKey: "tasks.s5ML29.title",
            descriptionKey: "tasks.s5ML29.description",
          },
          {
            id: "s5-ml-30",
            status: "manual",
            titleKey: "tasks.s5ML30.title",
            descriptionKey: "tasks.s5ML30.description",
          },
        ],
      },
      {
        id: "chaos-analysis",
        tasks: [
          {
            id: "s5-ca-1",
            status: "manual",
            titleKey: "tasks.s5CA1.title",
            descriptionKey: "tasks.s5CA1.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s5-ca-2",
            status: "manual",
            titleKey: "tasks.s5CA2.title",
            descriptionKey: "tasks.s5CA2.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s5-ca-3",
            status: "manual",
            titleKey: "tasks.s5CA3.title",
            descriptionKey: "tasks.s5CA3.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s5-ca-4",
            status: "manual",
            titleKey: "tasks.s5CA4.title",
            descriptionKey: "tasks.s5CA4.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s5-ca-5",
            status: "manual",
            titleKey: "tasks.s5CA5.title",
            descriptionKey: "tasks.s5CA5.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s5-ca-6",
            status: "manual",
            titleKey: "tasks.s5CA6.title",
            descriptionKey: "tasks.s5CA6.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s5-ca-7",
            status: "manual",
            titleKey: "tasks.s5CA7.title",
            descriptionKey: "tasks.s5CA7.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s5-ca-8",
            status: "manual",
            titleKey: "tasks.s5CA8.title",
            descriptionKey: "tasks.s5CA8.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s5-ca-9",
            status: "manual",
            titleKey: "tasks.s5CA9.title",
            descriptionKey: "tasks.s5CA9.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("abyssal_survivor"),
            ],
          },
          {
            id: "s5-ca-10",
            status: "derived",
            titleKey: "tasks.s5CA10.title",
            descriptionKey: "tasks.s5CA10.description",
            rewards: [
              rewardOf("crystal", 20),
            ],
            childIds: ["s5-ca-11", "s5-ca-12", "s5-ca-13"],
          },
          {
            id: "s5-ca-11",
            status: "manual",
            titleKey: "tasks.s5CA11.title",
            descriptionKey: "tasks.s5CA11.description",
            rewards: [
              rewardOf("crystal", 20),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-12",
            status: "manual",
            titleKey: "tasks.s5CA12.title",
            descriptionKey: "tasks.s5CA12.description",
            rewards: [
              rewardOf("crystal", 20),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-13",
            status: "manual",
            titleKey: "tasks.s5CA13.title",
            descriptionKey: "tasks.s5CA13.description",
            rewards: [
              rewardOf("crystal", 20),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-14",
            status: "manual",
            titleKey: "tasks.s5CA14.title",
            descriptionKey: "tasks.s5CA14.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-15",
            status: "manual",
            titleKey: "tasks.s5CA15.title",
            descriptionKey: "tasks.s5CA15.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-16",
            status: "manual",
            titleKey: "tasks.s5CA16.title",
            descriptionKey: "tasks.s5CA16.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-17",
            status: "manual",
            titleKey: "tasks.s5CA17.title",
            descriptionKey: "tasks.s5CA17.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-18",
            status: "manual",
            titleKey: "tasks.s5CA18.title",
            descriptionKey: "tasks.s5CA18.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-19",
            status: "manual",
            titleKey: "tasks.s5CA19.title",
            descriptionKey: "tasks.s5CA19.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-20",
            status: "manual",
            titleKey: "tasks.s5CA20.title",
            descriptionKey: "tasks.s5CA20.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-21",
            status: "manual",
            titleKey: "tasks.s5CA21.title",
            descriptionKey: "tasks.s5CA21.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-22",
            status: "manual",
            titleKey: "tasks.s5CA22.title",
            descriptionKey: "tasks.s5CA22.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-23",
            status: "manual",
            titleKey: "tasks.s5CA23.title",
            descriptionKey: "tasks.s5CA23.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-24",
            status: "manual",
            titleKey: "tasks.s5CA24.title",
            descriptionKey: "tasks.s5CA24.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-25",
            status: "manual",
            titleKey: "tasks.s5CA25.title",
            descriptionKey: "tasks.s5CA25.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-26",
            status: "manual",
            titleKey: "tasks.s5CA26.title",
            descriptionKey: "tasks.s5CA26.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-27",
            status: "manual",
            titleKey: "tasks.s5CA27.title",
            descriptionKey: "tasks.s5CA27.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-28",
            status: "manual",
            titleKey: "tasks.s5CA28.title",
            descriptionKey: "tasks.s5CA28.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-29",
            status: "manual",
            titleKey: "tasks.s5CA29.title",
            descriptionKey: "tasks.s5CA29.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-30",
            status: "manual",
            titleKey: "tasks.s5CA30.title",
            descriptionKey: "tasks.s5CA30.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-31",
            status: "manual",
            titleKey: "tasks.s5CA31.title",
            descriptionKey: "tasks.s5CA31.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-32",
            status: "manual",
            titleKey: "tasks.s5CA32.title",
            descriptionKey: "tasks.s5CA32.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-33",
            status: "manual",
            titleKey: "tasks.s5CA33.title",
            descriptionKey: "tasks.s5CA33.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-34",
            status: "manual",
            titleKey: "tasks.s5CA34.title",
            descriptionKey: "tasks.s5CA34.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-35",
            status: "manual",
            titleKey: "tasks.s5CA35.title",
            descriptionKey: "tasks.s5CA35.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
          },
          {
            id: "s5-ca-36",
            status: "derived",
            titleKey: "tasks.s5CA36.title",
            descriptionKey: "tasks.s5CA36.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 500),
              rewardOf("crystal", 20),
            ],
            childIds: ["s5-ca-37", "s5-ca-38", "s5-ca-39", "s5-ca-40", "s5-ca-41", "s5-ca-42", "s5-ca-43", "s5-ca-44"],
          },
          {
            id: "s5-ca-37",
            status: "manual",
            titleKey: "tasks.s5CA37.title",
            descriptionKey: "tasks.s5CA37.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-38",
            status: "manual",
            titleKey: "tasks.s5CA38.title",
            descriptionKey: "tasks.s5CA38.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-39",
            status: "manual",
            titleKey: "tasks.s5CA39.title",
            descriptionKey: "tasks.s5CA39.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-40",
            status: "manual",
            titleKey: "tasks.s5CA40.title",
            descriptionKey: "tasks.s5CA40.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-41",
            status: "manual",
            titleKey: "tasks.s5CA41.title",
            descriptionKey: "tasks.s5CA41.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-42",
            status: "manual",
            titleKey: "tasks.s5CA42.title",
            descriptionKey: "tasks.s5CA42.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-43",
            status: "manual",
            titleKey: "tasks.s5CA43.title",
            descriptionKey: "tasks.s5CA43.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-44",
            status: "manual",
            titleKey: "tasks.s5CA44.title",
            descriptionKey: "tasks.s5CA44.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-45",
            status: "manual",
            titleKey: "tasks.s5CA45.title",
            descriptionKey: "tasks.s5CA45.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-46",
            status: "manual",
            titleKey: "tasks.s5CA46.title",
            descriptionKey: "tasks.s5CA46.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-47",
            status: "manual",
            titleKey: "tasks.s5CA47.title",
            descriptionKey: "tasks.s5CA47.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-48",
            status: "manual",
            titleKey: "tasks.s5CA48.title",
            descriptionKey: "tasks.s5CA48.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-49",
            status: "derived",
            titleKey: "tasks.s5CA49.title",
            descriptionKey: "tasks.s5CA49.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
            childIds: ["s5-ca-50", "s5-ca-51", "s5-ca-52"],
          },
          {
            id: "s5-ca-50",
            status: "manual",
            titleKey: "tasks.s5CA50.title",
            descriptionKey: "tasks.s5CA50.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-51",
            status: "manual",
            titleKey: "tasks.s5CA51.title",
            descriptionKey: "tasks.s5CA51.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-52",
            status: "manual",
            titleKey: "tasks.s5CA52.title",
            descriptionKey: "tasks.s5CA52.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-53",
            status: "manual",
            titleKey: "tasks.s5CA53.title",
            descriptionKey: "tasks.s5CA53.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-54",
            status: "manual",
            titleKey: "tasks.s5CA54.title",
            descriptionKey: "tasks.s5CA54.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-55",
            status: "derived",
            titleKey: "tasks.s5CA55.title",
            descriptionKey: "tasks.s5CA55.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 500),
              rewardOf("crystal", 20),
            ],
            isChild: true,
            childIds: ["s5-ca-55", "s5-ca-56", "s5-ca-57", "s5-ca-58"],
          },
          {
            id: "s5-ca-56",
            status: "manual",
            titleKey: "tasks.s5CA56.title",
            descriptionKey: "tasks.s5CA56.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-57",
            status: "manual",
            titleKey: "tasks.s5CA57.title",
            descriptionKey: "tasks.s5CA57.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-58",
            status: "manual",
            titleKey: "tasks.s5CA58.title",
            descriptionKey: "tasks.s5CA58.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-59",
            status: "manual",
            titleKey: "tasks.s5CA59.title",
            descriptionKey: "tasks.s5CA59.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-60",
            status: "manual",
            titleKey: "tasks.s5CA60.title",
            descriptionKey: "tasks.s5CA60.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-61",
            status: "manual",
            titleKey: "tasks.s5CA61.title",
            descriptionKey: "tasks.s5CA61.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-62",
            status: "manual",
            titleKey: "tasks.s5CA62.title",
            descriptionKey: "tasks.s5CA62.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            isChild: true,
          },
          {
            id: "s5-ca-63",
            status: "derived",
            titleKey: "tasks.s5CA63.title",
            descriptionKey: "tasks.s5CA63.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
            ],
            childIds: ["s5-ca-59", "s5-ca-60", "s5-ca-61", "s5-ca-62"],
          },
          {
            id: "s5-ca-64",
            status: "derived",
            titleKey: "tasks.s5CA64.title",
            descriptionKey: "tasks.s5CA64.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
              rewardOf("guidepost_in_blizzard"),
            ],
            childIds: ["s5-ca-45", "s5-ca-46", "s5-ca-47", "s5-ca-48", "s5-ca-49", "s5-ca-50", "s5-ca-51", "s5-ca-52", "s5-ca-53", "s5-ca-54", "s5-ca-56", "s5-ca-57", "s5-ca-58"],
          },
          {
            id: "s5-ca-65",
            status: "manual",
            titleKey: "tasks.s5CA65.title",
            descriptionKey: "tasks.s5CA65.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
              rewardOf("unknown_ecosystem"),
            ],
          },
          {
            id: "s5-ca-66",
            status: "manual",
            titleKey: "tasks.s5CA66.title",
            descriptionKey: "tasks.s5CA66.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 2000),
              rewardOf("protected_promise"),
            ],
          },
          {
            id: "s5-ca-67",
            status: "manual",
            titleKey: "tasks.s5CA67.title",
            descriptionKey: "tasks.s5CA67.description",
          },
          {
            id: "s5-ca-68",
            status: "manual",
            titleKey: "tasks.s5CA68.title",
            descriptionKey: "tasks.s5CA68.description",
          },
          {
            id: "s5-ca-69",
            status: "manual",
            titleKey: "tasks.s5CA69.title",
            descriptionKey: "tasks.s5CA69.description",
          },
          {
            id: "s5-ca-70",
            status: "manual",
            titleKey: "tasks.s5CA70.title",
            descriptionKey: "tasks.s5CA70.description",
          },
        ],
      },
      {
        id: "battle-report",
        tasks: [
          {
            id: "s5-br-1",
            status: "manual",
            titleKey: "tasks.s5BR1.title",
            descriptionKey: "tasks.s5BR1.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
              rewardOf("trace_of_glorious_past"),
            ],
          },
          {
            id: "s5-br-2",
            status: "manual",
            titleKey: "tasks.s5BR2.title",
            descriptionKey: "tasks.s5BR2.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 300),
            ],
          },
          {
            id: "s5-br-3",
            status: "manual",
            titleKey: "tasks.s5BR3.title",
            descriptionKey: "tasks.s5BR3.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 300),
            ],
          },
          {
            id: "s5-br-4",
            status: "manual",
            titleKey: "tasks.s5BR4.title",
            descriptionKey: "tasks.s5BR4.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 300),
            ],
          },
          {
            id: "s5-br-5",
            status: "manual",
            titleKey: "tasks.s5BR5.title",
            descriptionKey: "tasks.s5BR5.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 300),
            ],
          },
          {
            id: "s5-br-6",
            status: "manual",
            titleKey: "tasks.s5BR6.title",
            descriptionKey: "tasks.s5BR6.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 300),
            ],
          },
          {
            id: "s5-br-7",
            status: "manual",
            titleKey: "tasks.s5BR7.title",
            descriptionKey: "tasks.s5BR7.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 300),
            ],
          },
          {
            id: "s5-br-8",
            status: "manual",
            titleKey: "tasks.s5BR8.title",
            descriptionKey: "tasks.s5BR8.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 2000),
              rewardOf("completed_memory"),
            ],
          },
          {
            id: "s5-br-9",
            status: "manual",
            titleKey: "tasks.s5BR9.title",
            descriptionKey: "tasks.s5BR9.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
              rewardOf("unfading_memory"),
            ],
          },
          {
            id: "s5-br-10",
            status: "derived",
            titleKey: "tasks.s5BR10.title",
            descriptionKey: "tasks.s5BR10.description",
            rewards: [
              rewardOf("perfect_taxidermy"),
            ],
            childIds: ["s5-br-11", "s5-br-12", "s5-br-13", "s5-br-16", "s5-br-17"],
          },
          {
            id: "s5-br-11",
            status: "manual",
            titleKey: "tasks.s5BR11.title",
            descriptionKey: "tasks.s5BR11.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
            ],
            isChild: true,
          },
          {
            id: "s5-br-12",
            status: "manual",
            titleKey: "tasks.s5BR12.title",
            descriptionKey: "tasks.s5BR12.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
            ],
            isChild: true,
          },
          {
            id: "s5-br-13",
            status: "manual",
            titleKey: "tasks.s5BR13.title",
            descriptionKey: "tasks.s5BR13.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
            ],
            isChild: true,
          },
          {
            id: "s5-br-14",
            status: "derived",
            titleKey: "tasks.s5BR14.title",
            descriptionKey: "tasks.s5BR14.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 1000),
              rewardOf("ruler_of_snowfield"),
            ],
            childIds: ["s5-br-15", "s5-br-18", "s5-br-19"],
          },
          {
            id: "s5-br-15",
            status: "manual",
            titleKey: "tasks.s5BR15.title",
            descriptionKey: "tasks.s5BR15.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 2000),
            ],
            isChild: true,
          },
          {
            id: "s5-br-16",
            status: "manual",
            titleKey: "tasks.s5BR16.title",
            descriptionKey: "tasks.s5BR16.description",
            isChild: true,
          },
          {
            id: "s5-br-17",
            status: "manual",
            titleKey: "tasks.s5BR17.title",
            descriptionKey: "tasks.s5BR17.description",
            isChild: true,
          },
          {
            id: "s5-br-18",
            status: "manual",
            titleKey: "tasks.s5BR18.title",
            descriptionKey: "tasks.s5BR18.description",
            isChild: true,
          },
          {
            id: "s5-br-19",
            status: "manual",
            titleKey: "tasks.s5BR19.title",
            descriptionKey: "tasks.s5BR19.description",
            isChild: true,
          },
        ],
      },
      {
        id: "annihilation",
        tasks: [
          {
            id: "s5-an-1",
            status: "manual",
            titleKey: "tasks.s5AN1.title",
            descriptionKey: "tasks.s5AN1.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
              rewardOf("crystal", 20),
            ],
          },
          {
            id: "s5-an-2",
            status: "manual",
            titleKey: "tasks.s5AN2.title",
            descriptionKey: "tasks.s5AN2.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-3",
            status: "manual",
            titleKey: "tasks.s5AN3.title",
            descriptionKey: "tasks.s5AN3.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-4",
            status: "manual",
            titleKey: "tasks.s5AN4.title",
            descriptionKey: "tasks.s5AN4.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-5",
            status: "manual",
            titleKey: "tasks.s5AN5.title",
            descriptionKey: "tasks.s5AN5.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-6",
            status: "manual",
            titleKey: "tasks.s5AN6.title",
            descriptionKey: "tasks.s5AN6.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-7",
            status: "manual",
            titleKey: "tasks.s5AN7.title",
            descriptionKey: "tasks.s5AN7.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-8",
            status: "manual",
            titleKey: "tasks.s5AN8.title",
            descriptionKey: "tasks.s5AN8.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s5-an-9",
            status: "manual",
            titleKey: "tasks.s5AN9.title",
            descriptionKey: "tasks.s5AN9.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s5-an-10",
            status: "manual",
            titleKey: "tasks.s5AN10.title",
            descriptionKey: "tasks.s5AN10.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s5-an-11",
            status: "manual",
            titleKey: "tasks.s5AN11.title",
            descriptionKey: "tasks.s5AN11.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
              rewardOf("crystal", 20),
            ],
          },
          {
            id: "s5-an-12",
            status: "manual",
            titleKey: "tasks.s5AN12.title",
            descriptionKey: "tasks.s5AN12.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-13",
            status: "manual",
            titleKey: "tasks.s5AN13.title",
            descriptionKey: "tasks.s5AN13.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-14",
            status: "manual",
            titleKey: "tasks.s5AN14.title",
            descriptionKey: "tasks.s5AN14.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-15",
            status: "manual",
            titleKey: "tasks.s5AN15.title",
            descriptionKey: "tasks.s5AN15.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-16",
            status: "manual",
            titleKey: "tasks.s5AN16.title",
            descriptionKey: "tasks.s5AN16.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-17",
            status: "manual",
            titleKey: "tasks.s5AN17.title",
            descriptionKey: "tasks.s5AN17.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-18",
            status: "manual",
            titleKey: "tasks.s5AN18.title",
            descriptionKey: "tasks.s5AN18.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s5-an-19",
            status: "manual",
            titleKey: "tasks.s5AN19.title",
            descriptionKey: "tasks.s5AN19.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s5-an-20",
            status: "manual",
            titleKey: "tasks.s5AN20.title",
            descriptionKey: "tasks.s5AN20.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s5-an-21",
            status: "manual",
            titleKey: "tasks.s5AN21.title",
            descriptionKey: "tasks.s5AN21.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 200),
              rewardOf("crystal", 20),
            ],
          },
          {
            id: "s5-an-22",
            status: "manual",
            titleKey: "tasks.s5AN22.title",
            descriptionKey: "tasks.s5AN22.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-23",
            status: "manual",
            titleKey: "tasks.s5AN23.title",
            descriptionKey: "tasks.s5AN23.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-24",
            status: "manual",
            titleKey: "tasks.s5AN24.title",
            descriptionKey: "tasks.s5AN24.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-25",
            status: "manual",
            titleKey: "tasks.s5AN25.title",
            descriptionKey: "tasks.s5AN25.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-26",
            status: "manual",
            titleKey: "tasks.s5AN26.title",
            descriptionKey: "tasks.s5AN26.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-27",
            status: "manual",
            titleKey: "tasks.s5AN27.title",
            descriptionKey: "tasks.s5AN27.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s5-an-28",
            status: "manual",
            titleKey: "tasks.s5AN28.title",
            descriptionKey: "tasks.s5AN28.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s5-an-29",
            status: "manual",
            titleKey: "tasks.s5AN29.title",
            descriptionKey: "tasks.s5AN29.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s5-an-30",
            status: "manual",
            titleKey: "tasks.s5AN30.title",
            descriptionKey: "tasks.s5AN30.description",
            rewards: [
              rewardOf("frozen_civilization_legacy", 50),
              rewardOf("memory_particles", 20),
            ],
          },
        ],
      },
  ],
};
