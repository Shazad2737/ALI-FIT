import { Target } from "lucide-react";
import { dailyGoal } from "../data/dashboardData";

export default function GoalProgressCard() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-primary/10 p-3">
          <Target className="h-5 w-5 text-primary" />
        </div>

        <div>
          <h2 className="font-semibold">{dailyGoal.title}</h2>
            <p className="text-sm text-muted-foreground">
                {dailyGoal.description}
            </p>
        </div>
      </div>

      <div className="mt-7">
        <div className="mb-2 flex justify-between text-sm">
          <span>Daily activity</span>
          <span className="font-semibold">{dailyGoal.progress}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-muted">
          <div
             className="h-full rounded-full bg-primary"
            style={{ width: `${dailyGoal.progress}%` }}
            />
        </div>
      </div>
    </div>
  );
}