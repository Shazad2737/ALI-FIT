export interface DailyLogState {
  calories: number;
  steps: number;
  water: number;
  workouts: number;
}

export interface DailyLogRecord extends DailyLogState {
  date: string;
}