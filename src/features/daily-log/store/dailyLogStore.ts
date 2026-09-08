import { create } from "zustand";
import type { DailyLogState } from "../types/dailyLog.types";

interface DailyLogStore extends DailyLogState {
  addCalories: (amount: number) => void;
  addSteps: (amount: number) => void;
  addWater: (amount: number) => void;
  addWorkout: () => void;
}

export const useDailyLogStore = create<DailyLogStore>((set) => ({
  calories: 0,
  steps: 0,
  water: 0,
  workouts: 0,

  addCalories: (amount) =>
    set((state) => ({
      calories: state.calories + amount,
    })),

  addSteps: (amount) =>
    set((state) => ({
      steps: state.steps + amount,
    })),

  addWater: (amount) =>
    set((state) => ({
      water: state.water + amount,
    })),

  addWorkout: () =>
    set((state) => ({
      workouts: state.workouts + 1,
    })),
}));