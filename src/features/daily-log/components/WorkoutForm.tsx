import { useState } from "react";
import { Check } from "lucide-react";

export default function WorkoutForm() {
  const [workout, setWorkout] = useState("");
  const [duration, setDuration] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!workout || !duration) return;

    setCompleted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6"
    >
      <div>
        <h2 className="text-lg font-semibold">Log Workout</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Record your workout for today.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="workout"
            className="mb-2 block text-sm font-medium"
          >
            Workout type
          </label>

          <select
            id="workout"
            value={workout}
            onChange={(event) => setWorkout(event.target.value)}
            className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select workout</option>
            <option value="Strength Training">Strength Training</option>
            <option value="Running">Running</option>
            <option value="Walking">Walking</option>
            <option value="Cycling">Cycling</option>
            <option value="Yoga">Yoga</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="duration"
            className="mb-2 block text-sm font-medium"
          >
            Duration
          </label>

          <div className="relative">
            <input
              id="duration"
              type="number"
              min="1"
              placeholder="30"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              className="w-full rounded-xl border bg-background px-4 py-3 pr-16 text-sm outline-none focus:ring-2 focus:ring-primary"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              min
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
        >
          {completed ? (
            <>
              <Check className="h-4 w-4" />
              Workout Logged
            </>
          ) : (
            "Save Workout"
          )}
        </button>
      </div>
    </form>
  );
}