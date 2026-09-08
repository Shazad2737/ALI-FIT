import StatCard from "./components/StatCard";
import GoalProgressCard from "./components/GoalProgressCard";
import ActivityCard from "./components/ActivityCard";
import WeeklyProgress from "./components/WeeklyProgress";
import RecentActivity from "./components/RecentActivity";
import { dashboardStats } from "./data/dashboardData";
import {
  Activity,
  Flame,
  Footprints,
  Droplets,
  Scale,
  Target,
  TrendingUp,
} from "lucide-react";



export default function DashboardPage() {
  return (
    <div className="w-full max-w-full space-y-6 overflow-x-hidden sm:space-y-8">
      {/* Welcome */}
      <section>
        <p className="text-sm font-medium text-primary">
          Monday, September 7
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Good morning, Ali 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Here's your fitness progress for today.
        </p>
      </section>

      {/* Statistics */}
   {/* Statistics */}
<section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
  {dashboardStats.map((stat) => {
  const iconMap = {
    Calories: Flame,
    Steps: Footprints,
    Water: Droplets,
    Weight: Scale,
  };

  return (
    <StatCard
      key={stat.title}
      title={stat.title}
      value={stat.value}
      unit={stat.unit}
      description={stat.description}
      icon={iconMap[stat.title as keyof typeof iconMap]}
      href={stat.title === "Weight" ? "/weight" : "/daily-log"}
    />
  );
})}
</section>

      {/* Goal + Activity */}
     <section className="grid gap-6 lg:grid-cols-3">
  <div className="lg:col-span-2">
    <GoalProgressCard />
  </div>

  <ActivityCard />
</section>

      {/* Weekly Progress */}
      <WeeklyProgress />
      <RecentActivity />
    </div>
  );
}