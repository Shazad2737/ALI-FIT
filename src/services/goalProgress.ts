import type { Goal } from "../features/goals/types/goal.types";
import type { DailyLogState } from "../features/daily-log/types/dailyLog.types";

export function getGoalProgress(
  goal: Goal,
  dailyLog: DailyLogState
) {
  const title = goal.title.toLowerCase();

  let current = goal.current;

  if (title.includes("step")) {
    current = dailyLog.steps;
  } else if (title.includes("water")) {
    current = dailyLog.water/1000; // Convert milliliters to liters
  } else if (title.includes("calorie")) {
    current = dailyLog.calories;
  } else if (title.includes("workout")) {
    current = dailyLog.workouts;
  }

  const percentage =
    goal.target > 0
      ? Math.min((current / goal.target) * 100, 100)
      : 0;

  return {
    current,
    percentage,
    remaining: Math.max(goal.target - current, 0),
  };
}