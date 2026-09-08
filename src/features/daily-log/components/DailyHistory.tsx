import { useDailyLogStore } from "../store/dailyLogStore";

export default function DailyHistory() {
  const logs = useDailyLogStore((state) => state.logs);
  const date = useDailyLogStore((state) => state.date);

  const history = Object.values(logs)
    .filter((log) => log.date !== date)
    .sort((a, b) => b.date.localeCompare(a.date));

  if (history.length === 0) {
    return (
      <section className="rounded-2xl border bg-card p-5 sm:p-6">
        <h2 className="font-semibold">Daily History</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Your previous daily records will appear here.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border bg-card p-5 sm:p-6">
      <h2 className="font-semibold">Daily History</h2>

      <div className="mt-4 space-y-3">
        {history.map((log) => (
          <div
            key={log.date}
            className="rounded-xl border p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">
                {new Date(`${log.date}T00:00:00`).toLocaleDateString(
                  "en-IN",
                  {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </p>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              <div>
                <p className="text-xs text-muted-foreground">
                  Calories
                </p>
                <p className="mt-1 font-semibold">
                  {log.calories}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Steps
                </p>
                <p className="mt-1 font-semibold">
                  {log.steps.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Water
                </p>
                <p className="mt-1 font-semibold">
                  {(log.water / 1000).toFixed(1)} L
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Workouts
                </p>
                <p className="mt-1 font-semibold">
                  {log.workouts}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}