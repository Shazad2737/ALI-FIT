import { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import MealForm from "./components/MealForm";
import WaterForm from "./components/WaterForm";
import StepsForm from "./components/StepsForm";
import DailyHistory from "./components/DailyHistory";
import { useDailyLogStore } from "./store/dailyLogStore";
import {
  Check,
  Dumbbell,
  Droplets,
  Footprints,
  Utensils,
  ChevronLeft,
  ChevronRight,
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
  const logs = useDailyLogStore((state) => state.logs);
const date = useDailyLogStore((state) => state.date);
const setDate = useDailyLogStore((state) => state.setDate);
const goToToday = useDailyLogStore((state) => state.goToToday);

const changeDate = (days: number) => {
  const currentDate = new Date(`${date}T00:00:00`);
  currentDate.setDate(currentDate.getDate() + days);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  setDate(`${year}-${month}-${day}`);1
};

const isToday = date === new Date().toISOString().split("T")[0];

const todayLog = logs[date];

const calories = todayLog?.calories ?? 0;
const steps = todayLog?.steps ?? 0;
const water = todayLog?.water ?? 0;
const workouts = todayLog?.workouts ?? 0;

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      <section>
      <div className="flex items-center justify-between gap-2">
  <button
    type="button"
    onClick={() => changeDate(-1)}
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-card transition-colors hover:bg-muted active:scale-95"
    aria-label="Previous day"
  >
    <ChevronLeft className="h-5 w-5" />
  </button>

  <div className="min-w-0 flex-1 text-center">
    <p className="text-sm font-medium text-primary">
      {isToday
        ? "Today"
        : new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
            weekday: "long",
          })}
    </p>

    <p className="mt-1 text-sm text-muted-foreground">
      {new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </p>
  </div>

  <button
    type="button"
    onClick={() => changeDate(1)}
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-card transition-colors hover:bg-muted active:scale-95"
    aria-label="Next day"
  >
    <ChevronRight className="h-5 w-5" />
  </button>
</div>

{!isToday && (
  <button
    type="button"
    onClick={goToToday}
    className="mx-auto block text-sm font-medium text-primary"
  >
    Back to Today
  </button>
)}

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
    {selected === "water" && <WaterForm />}
    {selected === "steps" && <StepsForm />}

      <section className="rounded-2xl border bg-card p-5 sm:p-6">
        <h2 className="font-semibold">Today's Summary</h2>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <p className="text-xs text-muted-foreground">Calories</p>
            <p className="mt-1 text-xl font-bold">{calories}</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Steps</p>
            <p className="mt-1 text-xl font-bold">{steps.toLocaleString()}</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Water</p>
            <p className="mt-1 text-xl font-bold">{(water / 1000).toFixed(1)} L</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Workouts</p>
            <p className="mt-1 text-xl font-bold">{workouts}</p>
          </div>
        </div>
      </section>
      <DailyHistory />
    </div>
  );
}

export default DailyLogPage;