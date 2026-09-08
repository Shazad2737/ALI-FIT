import { useState } from "react";
import { Check } from "lucide-react";
import { useDailyLogStore } from "../store/dailyLogStore";

export default function StepsForm() {
  const [steps, setSteps] = useState("");
  const [saved, setSaved] = useState(false);
  const addSteps = useDailyLogStore((state) => state.addSteps);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!steps) return;

    addSteps(parseInt(steps));
    setSaved(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6"
    >
      <div>
        <h2 className="text-lg font-semibold">Log Steps</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Record the number of steps you walked today.
        </p>
      </div>

      <div className="mt-6">
        <label
          htmlFor="steps"
          className="mb-2 block text-sm font-medium"
        >
          Steps
        </label>

        <input
          id="steps"
          type="number"
          min="1"
          placeholder="5000"
          value={steps}
          onChange={(event) => {
            setSteps(event.target.value);
            setSaved(false);
          }}
          className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
      >
        {saved ? (
          <>
            <Check className="h-4 w-4" />
            Steps Logged
          </>
        ) : (
          "Save Steps"
        )}
      </button>
    </form>
  );
}