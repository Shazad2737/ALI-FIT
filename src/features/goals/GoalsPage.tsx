import { useState } from "react";
import { Plus, Target, Trash2 } from "lucide-react";
import { useGoalsStore } from "./store/goalStore";
import {useDailyLogStore} from "../daily-log/store/dailyLogStore";
import { getGoalProgress } from "@/services/goalProgress";

export default function GoalsPage() {
  const goals = useGoalsStore((state) => state.goals);
  const addGoal = useGoalsStore((state) => state.addGoal);
  const deleteGoal = useGoalsStore((state) => state.deleteGoal);

  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");

  const calories = useDailyLogStore((state) => state.calories);
  const steps = useDailyLogStore((state) => state.steps);
  const water = useDailyLogStore((state) => state.water);
  const workouts = useDailyLogStore((state) => state.workouts);
  const updateTarget = useGoalsStore((state) => state.updateTarget);
  const dailyLog = {
  calories,
  steps,
  water,
  workouts,
};
    const getUnit = (goalTitle: string) => {
  switch (goalTitle) {
    case "Steps":
      return "steps";
    case "Water":
      return "L";
    case "Calories":
      return "kcal";
    case "Workouts":
      return "workouts";
    default:
      return "";
  }
};

  const handleAddGoal = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title || !target) return;

    addGoal({
      id: crypto.randomUUID(),
      title,
      target: Number(target),
      current: 0,
      unit: getUnit(title),
      createdAt: new Date().toISOString(),
    });

    setTitle("");
    setTarget("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Goals</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Set targets and track your progress.
        </p>
      </div>

      <form
        onSubmit={handleAddGoal}
        className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Target className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h2 className="font-semibold">Create a Goal</h2>
            <p className="text-sm text-muted-foreground">
              Add something you want to achieve.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <select
  value={title}
  onChange={(event) => setTitle(event.target.value)}
  className="rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
>
  <option value="">Select a goal</option>
  <option value="Steps">Steps</option>
  <option value="Water">Water</option>
  <option value="Calories">Calories</option>
  <option value="Workouts">Workouts</option>
</select>

          <input
            type="number"
            min="1"
            placeholder="Target"
            value={target}
            onChange={(event) => setTarget(event.target.value)}
            className="rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />

        </div>

        <button
          type="submit"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground active:scale-[0.98] sm:w-auto"
        >
          <Plus className="h-4 w-4" />
          Add Goal
        </button>
      </form>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Your Goals</h2>

        {goals.length === 0 ? (
          <div className="rounded-2xl border bg-card p-8 text-center">
            <Target className="mx-auto h-10 w-10 text-muted-foreground" />

            <p className="mt-3 font-medium">No goals yet</p>

            <p className="mt-1 text-sm text-muted-foreground">
              Create your first fitness goal above.
            </p>
          </div>
        ) : (
          goals.map((goal) => {
           const progressData = getGoalProgress(goal, dailyLog);
           const progress = progressData.percentage;
           const current = progressData.current;
           const remaining = progressData.remaining;

            return (
              <div
                key={goal.id}
                className="rounded-2xl border bg-card p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-semibold">{goal.title}</h3>

                    <div className="mt-1 flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">
                            {current} / {goal.target} {goal.unit}
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                            const newTarget = window.prompt(
                                `Enter new target (${goal.unit})`,
                                String(goal.target)
                            );

                            if (newTarget === null) return;

                            const value = Number(newTarget);

                            if (Number.isFinite(value) && value > 0) {
                                updateTarget(goal.id, value);
                            }
                            }}
                            className="text-xs font-medium text-primary hover:underline"
                        >
                            Edit target
                        </button>
                        </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => deleteGoal(goal.id)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-destructive"
                    aria-label={`Delete ${goal.title}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mt-2 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
                  <span>
                    {progress >= 100
                        ? "100% complete"
                        : `${Math.round(progress)}% complete`}
                    </span>

                  <span>
                     {progress >= 100
                     ? "Goal completed ✓"
                    : `${remaining} ${goal.unit} remaining`}
                    </span>
                </div>

              </div>
            );
          })
        )}
      </section>
    </div>
  );
}