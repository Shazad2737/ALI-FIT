export interface DashboardStat {
  title: string;
  value: string;
  unit: string;
  description: string;
}

export interface WeeklyActivity {
  day: string;
  value: number;
}

export interface RecentActivity {
  title: string;
  description: string;
  time: string;
}

export interface DailyGoal {
  title: string;
  description: string;
  progress: number;
}

export interface ActivitySummary {
  workouts: {
    current: number;
    target: number;
  };
  activeMinutes: number;
  caloriesBurned: number;
}