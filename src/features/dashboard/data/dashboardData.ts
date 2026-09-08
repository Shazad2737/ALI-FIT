import type {
  DashboardStat,
  WeeklyActivity,
  RecentActivity,
  DailyGoal,
  ActivitySummary,
} from "../types/dashboard.types";
export const dashboardStats: DashboardStat[] = [
  {
    title: "Calories",
    value: "630",
    unit: "kcal",
    description: "of 2,000 kcal goal",
  },
  {
    title: "Steps",
    value: "6,842",
    unit: "steps",
    description: "of 10,000 daily goal",
  },
  {
    title: "Water",
    value: "1.8",
    unit: "L",
    description: "of 2.5 L goal",
  },
  {
    title: "Weight",
    value: "72.5",
    unit: "kg",
    description: "0.8 kg this month",
  },
];

export const weeklyActivity: WeeklyActivity[] = [
  { day: "Mon", value: 55 },
  { day: "Tue", value: 72 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 90 },
  { day: "Sun", value: 35 },
];

export const recentActivities: RecentActivity[]  = [
  {
    title: "Workout completed",
    description: "Strength training",
    time: "Today, 9:30 AM",
  },
  {
    title: "Step goal progress",
    description: "6,842 steps recorded",
    time: "Today, 8:45 AM",
  },
  {
    title: "Water intake",
    description: "500 ml added",
    time: "Today, 8:10 AM",
  },
  {
    title: "Meal logged",
    description: "Breakfast",
    time: "Today, 7:45 AM",
  },
];
export const dailyGoal: DailyGoal = {
  title: "Today's Goal",
  description: "Keep your momentum going.",
  progress: 75,
};

export const activitySummary: ActivitySummary = {
  workouts: {
    current: 4,
    target: 6,
  },
  activeMinutes: 48,
  caloriesBurned: 630,
};