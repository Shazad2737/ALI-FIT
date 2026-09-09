import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  DailyLogState,
  DailyLogRecord,
} from "../types/dailyLog.types";

interface DailyLogStore extends DailyLogState {
  date: string;
  logs: Record<string, DailyLogRecord>;

  addCalories: (amount: number) => void;
  addSteps: (amount: number) => void;
  addWater: (amount: number) => void;
  addWorkout: () => void;
  setDate: (date: string) => void;
  goToToday: () => void;
}

const getToday = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const today = getToday();

const emptyLog: DailyLogState = {
  calories: 0,
  steps: 0,
  water: 0,
  workouts: 0,
};

export const useDailyLogStore = create<DailyLogStore>()(
  persist(
    (set) => ({
      date: today,

      calories: 0,
      steps: 0,
      water: 0,
      workouts: 0,

      logs: {
        [today]: {
          date: today,
          ...emptyLog,
        },
      },
     setDate: (date) =>
  set((state) => {
    const existingLog = state.logs[date];

    if (existingLog) {
      return {
        date,
        calories: existingLog.calories,
        steps: existingLog.steps,
        water: existingLog.water,
        workouts: existingLog.workouts,
      };
    }

    const newLog = {
      date,
      calories: 0,
      steps: 0,
      water: 0,
      workouts: 0,
    };

    return {
      date,
      calories: 0,
      steps: 0,
      water: 0,
      workouts: 0,
      logs: {
        ...state.logs,
        [date]: newLog,
      },
    };
  }),

goToToday: () =>
  set((state) => {
    const today = getToday();
    const existingLog = state.logs[today];

    if (existingLog) {
      return {
        date: today,
        calories: existingLog.calories,
        steps: existingLog.steps,
        water: existingLog.water,
        workouts: existingLog.workouts,
      };
    }

    const newLog = {
      date: today,
      calories: 0,
      steps: 0,
      water: 0,
      workouts: 0,
    };

    return {
      date: today,
      calories: 0,
      steps: 0,
      water: 0,
      workouts: 0,
      logs: {
        ...state.logs,
        [today]: newLog,
      },
    };
  }),

      addCalories: (amount) =>
        set((state) => {
          const currentLog = state.logs[state.date] ?? {
            date: state.date,
            ...emptyLog,
          };

          const calories = currentLog.calories + amount;

          return {
            calories,
            logs: {
              ...state.logs,
              [state.date]: {
                ...currentLog,
                calories,
              },
            },
          };
        }),

      addSteps: (amount) =>
        set((state) => {
          const currentLog = state.logs[state.date] ?? {
            date: state.date,
            ...emptyLog,
          };

          const steps = currentLog.steps + amount;

          return {
            steps,
            logs: {
              ...state.logs,
              [state.date]: {
                ...currentLog,
                steps,
              },
            },
          };
        }),

      addWater: (amount) =>
        set((state) => {
          const currentLog = state.logs[state.date] ?? {
            date: state.date,
            ...emptyLog,
          };

          const water = currentLog.water + amount;

          return {
            water,
            logs: {
              ...state.logs,
              [state.date]: {
                ...currentLog,
                water,
              },
            },
          };
        }),

      addWorkout: () =>
        set((state) => {
          const currentLog = state.logs[state.date] ?? {
            date: state.date,
            ...emptyLog,
          };

          const workouts = currentLog.workouts + 1;

          return {
            workouts,
            logs: {
              ...state.logs,
              [state.date]: {
                ...currentLog,
                workouts,
              },
            },
          };
        }),
    }),
    {
      name: "ali-fit-daily-log",
    }
  )
);