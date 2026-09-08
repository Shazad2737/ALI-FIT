import { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import MealForm from "./components/MealForm";
import {
  Check,
  Dumbbell,
  Droplets,
  Footprints,
  Utensils,
} from "lucide-react";

const activities = [
  {
    id: "workout",
    title: "Workout",
    description: "Log your workout",
    icon: Dumbbell,
  },
  {
    id: "food",
    title: "Meal",
    description: "Track what you ate",
    icon: Utensils,
  },
  {
    id: "water",
    title: "Water",
    description: "Record your water intake",
    icon: Droplets,
  },
  {
    id: "steps",
    title: "Steps",
    description: "Update your steps",
    icon: Footprints,
  },
];

function DailyLogPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      <section>
        <p className="text-sm font-medium text-primary">Today</p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight">
          Daily Log
        </h1>

        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Keep track of your daily fitness activities.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {activities.map((activity) => {
          const Icon = activity.icon;
          const isSelected = selected === activity.id;

          return (
            <button
              key={activity.id}
              type="button"
              onClick={() => setSelected(activity.id)}
              className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "bg-card hover:shadow-md"
              }`}
            >
              <div className="shrink-0 rounded-xl bg-primary/10 p-3">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="font-semibold">{activity.title}</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </div>

              {isSelected && (
                <div className="shrink-0 rounded-full bg-primary p-1">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
            </button>
          );
        })}
      </section>
     {selected === "workout" && <WorkoutForm />}

    {selected === "food" && <MealForm />}

      <section className="rounded-2xl border bg-card p-5 sm:p-6">
        <h2 className="font-semibold">Today's Summary</h2>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <p className="text-xs text-muted-foreground">Calories</p>
            <p className="mt-1 text-xl font-bold">630</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Steps</p>
            <p className="mt-1 text-xl font-bold">6,842</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Water</p>
            <p className="mt-1 text-xl font-bold">1.8 L</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Workouts</p>
            <p className="mt-1 text-xl font-bold">4</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DailyLogPage;