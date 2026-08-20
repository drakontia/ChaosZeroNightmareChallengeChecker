"use client";

import { useEffect, useMemo, useState } from "react";
import { ChallengeTask } from "@/types";
import {
  getAchievedTaskIds,
  getSeasonCheckedStorageKey,
  getSeasonWeeklyResetKey,
  getWeekStartTimestamp,
} from "@/lib";

export const useChallengeProgress = (
  tasks: ChallengeTask[],
  weeklyScoreTaskIds: string[] = [],
  seasonId = "season-3",
) => {
  const [checkedTaskIds, setCheckedTaskIds] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const weeklyScoreTaskIdsKey = useMemo(
    () => weeklyScoreTaskIds.join("|"),
    [weeklyScoreTaskIds],
  );
  const checkedStorageKey = useMemo(
    () => getSeasonCheckedStorageKey(seasonId),
    [seasonId],
  );
  const weeklyResetStorageKey = useMemo(
    () => getSeasonWeeklyResetKey(seasonId),
    [seasonId],
  );

  useEffect(() => {
    const currentWeekStart = getWeekStartTimestamp();

    let restored: string[] = [];
    const raw = window.localStorage.getItem(checkedStorageKey);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed)) {
          restored = parsed.filter(
            (value): value is string => typeof value === "string",
          );
        }
      } catch {
        window.localStorage.removeItem(checkedStorageKey);
      }
    }

    const storedWeekStart = Number(
      window.localStorage.getItem(weeklyResetStorageKey) ?? 0,
    );
    if (weeklyScoreTaskIds.length > 0 && currentWeekStart > storedWeekStart) {
      const weeklySet = new Set(weeklyScoreTaskIds);
      restored = restored.filter((id) => !weeklySet.has(id));
    }

    window.localStorage.setItem(weeklyResetStorageKey, String(currentWeekStart));

    setCheckedTaskIds(restored);
    setIsHydrated(true);
  }, [checkedStorageKey, seasonId, weeklyResetStorageKey, weeklyScoreTaskIdsKey]);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(checkedStorageKey, JSON.stringify(checkedTaskIds));
  }, [checkedStorageKey, isHydrated, checkedTaskIds]);

  const achievedTaskIds = useMemo(
    () => getAchievedTaskIds(tasks, checkedTaskIds),
    [checkedTaskIds, tasks],
  );

  const toggleTask = (task: ChallengeTask) => {
    if (task.status === "derived") {
      return;
    }

    setCheckedTaskIds((current) =>
      current.includes(task.id)
        ? current.filter((taskId) => taskId !== task.id)
        : [...current, task.id],
    );
  };

  return {
    checkedTaskIds,
    achievedTaskIds,
    toggleTask,
  };
};
