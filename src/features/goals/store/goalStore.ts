import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Goal } from "../types/goal.types";

interface GoalsStore {
  goals: Goal[];

  addGoal: (goal: Goal) => void;
  updateGoal: (id: string, current: number) => void;
  deleteGoal: (id: string) => void;
  updateTarget: (id: string, target: number) => void;
}

export const useGoalsStore = create<GoalsStore>()(
  persist(
    (set) => ({
      goals: [],

      addGoal: (goal) =>
        set((state) => ({
          goals: [...state.goals, goal],
        })),

      updateGoal: (id, current) =>
        set((state) => ({
          goals: state.goals.map((goal) =>
            goal.id === id
              ? { ...goal, current }
              : goal
          ),
        })),

        updateTarget: (id, target) =>
  set((state) => ({
    goals: state.goals.map((goal) =>
      goal.id === id
        ? {
            ...goal,
            target: Math.max(1, target),
          }
        : goal
    ),
  })),

      deleteGoal: (id) =>
        set((state) => ({
          goals: state.goals.filter(
            (goal) => goal.id !== id
          ),
        })),
    }),
    {
      name: "ali-fit-goals",
    }
  )
);