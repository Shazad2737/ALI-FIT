import { Activity } from "lucide-react";
import { activitySummary } from "../data/dashboardData";

export default function ActivityCard() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-primary/10 p-3">
          <Activity className="h-5 w-5 text-primary" />
        </div>

        <div>
          <h2 className="font-semibold">Activity</h2>
          <p className="text-sm text-muted-foreground">
            Today's movement
          </p>
        </div>
      </div>

    <div className="mt-6 space-y-4">
  <div className="flex justify-between text-sm">
    <span className="text-muted-foreground">Workouts</span>
    <span className="font-semibold">
      {activitySummary.workouts.current} /{" "}
      {activitySummary.workouts.target}
    </span>
  </div>

  <div className="flex justify-between text-sm">
    <span className="text-muted-foreground">
      Active minutes
    </span>
    <span className="font-semibold">
      {activitySummary.activeMinutes} min
    </span>
  </div>

  <div className="flex justify-between text-sm">
    <span className="text-muted-foreground">
      Calories burned
    </span>
    <span className="font-semibold">
      {activitySummary.caloriesBurned} kcal
    </span>
  </div>
</div>
    </div>
  );
}