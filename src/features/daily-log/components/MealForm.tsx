import { useState } from "react";
import { Check } from "lucide-react";

export default function MealForm() {
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!meal || !calories) return;

    setSaved(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6"
    >
      <div>
        <h2 className="text-lg font-semibold">Log Meal</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Record your meal and calories.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="meal"
            className="mb-2 block text-sm font-medium"
          >
            Meal
          </label>

          <select
            id="meal"
            value={meal}
            onChange={(event) => {
              setMeal(event.target.value);
              setSaved(false);
            }}
            className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select meal</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="calories"
            className="mb-2 block text-sm font-medium"
          >
            Calories
          </label>

          <div className="relative">
            <input
              id="calories"
              type="number"
              min="1"
              placeholder="500"
              value={calories}
              onChange={(event) => {
                setCalories(event.target.value);
                setSaved(false);
              }}
              className="w-full rounded-xl border bg-background px-4 py-3 pr-16 text-sm outline-none focus:ring-2 focus:ring-primary"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              kcal
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
        >
          {saved ? (
            <>
              <Check className="h-4 w-4" />
              Meal Logged
            </>
          ) : (
            "Save Meal"
          )}
        </button>
      </div>
    </form>
  );
}