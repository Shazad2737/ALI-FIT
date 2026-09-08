import { useState } from "react";
import { Check } from "lucide-react";
import { useDailyLogStore } from "../store/dailyLogStore";

export default function WaterForm() {
  const [amount, setAmount] = useState("");
  const [saved, setSaved] = useState(false);
  const addWater = useDailyLogStore((state) => state.addWater);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!amount) return;

    addWater(parseInt(amount));
    setSaved(true);
  };

  return (
    <form className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6" onSubmit={handleSubmit}>
      <div>
        <h2 className="text-lg font-semibold">Log Water</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Record how much water you drank.
        </p>
      </div>

      <div className="mt-6">
        <label
          htmlFor="water"
          className="mb-2 block text-sm font-medium"
        >
          Amount
        </label>

        <div className="relative">
          <input
            id="water"
            type="number"
            min="1"
            placeholder="500"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
              setSaved(false);
            }}
            className="w-full rounded-xl border bg-background px-4 py-3 pr-16 text-sm outline-none focus:ring-2 focus:ring-primary"
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            ml
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
      >
        {saved ? (
          <>
            <Check className="h-4 w-4" />
            Water Logged
          </>
        ) : (
          "Save Water"
        )}
      </button>
    </form>
  );
}