import {
  Dumbbell,
  Footprints,
  Droplets,
  Utensils,
} from "lucide-react";

import { recentActivities } from "../data/dashboardData";

const activityIcons = [
  Dumbbell,
  Footprints,
  Droplets,
  Utensils,
];

export default function RecentActivity() {
  return (
    <section className="rounded-2xl border bg-card p-6">
      <div>
        <h2 className="text-lg font-semibold">Recent Activity</h2>

        <p className="text-sm text-muted-foreground">
          Your latest fitness updates.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {recentActivities.map((activity, index) => {
          const Icon = activityIcons[index];

          return (
            <div
              key={activity.title}
              className="flex items-center gap-4"
            >
              <div className="rounded-xl bg-primary/10 p-3">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">
                  {activity.title}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {activity.description}
                </p>
              </div>

              <span className="shrink-0 text-xs text-muted-foreground">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}