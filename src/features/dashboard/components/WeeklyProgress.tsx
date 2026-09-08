import { weeklyActivity } from "../data/dashboardData";

export default function WeeklyProgress() {
  return (
    <section className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Weekly Progress</h2>
          <p className="text-sm text-muted-foreground">
            Your activity over the last 7 days.
          </p>
        </div>

        <span className="text-sm font-medium text-primary">
          This Week
        </span>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-1 sm:mt-8 sm:gap-3">
        {weeklyActivity.map((item) => (
          <div
            key={item.day}
            className="flex flex-col items-center gap-2"
          >
           <div className="flex h-24 w-full min-w-0 items-end justify-center rounded-lg bg-muted sm:h-32 sm:rounded-xl">              <div
                className="w-3/5 rounded-t-lg bg-primary"
                style={{ height: `${item.value}%` }}
              />
            </div>

            <span className="text-xs text-muted-foreground">
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}