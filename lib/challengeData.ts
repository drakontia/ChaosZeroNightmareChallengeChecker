import { ChallengeTab } from "@/types";
import { season3 } from "./seasons/season3";
import { season4 } from "./seasons/season4";

export { season3, season4 };

export const challengeTabs: ChallengeTab[] = [
  { id: "weekly-score", labelKey: "tabs.weeklyScore" },
  { id: "mission-log", labelKey: "tabs.missionLog" },
  { id: "chaos-analysis", labelKey: "tabs.chaosAnalysis" },
  { id: "battle-report", labelKey: "tabs.battleReport" },
  { id: "annihilation", labelKey: "tabs.annihilation" },
];

export const seasons = [season3, season4];

export const defaultSeasonId =
  seasons.find((season) => season.id === "season-4")?.id ?? seasons[0].id;
