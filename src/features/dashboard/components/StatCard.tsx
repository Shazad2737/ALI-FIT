import { useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  unit: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
}

export default function StatCard({
  title,
  value,
  unit,
  description,
  icon: Icon,
  href,
}: StatCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(href);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded-2xl border bg-card p-5 shadow-sm transition-all ${
        href
          ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
          : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-primary/10 p-3">
          {Icon && <Icon className="h-5 w-5 text-primary" />}
        </div>
      </div>

      <p className="mt-5 text-sm text-muted-foreground">
        {title}
      </p>

      <div className="mt-1">
        <span className="text-2xl font-bold">{value}</span>{" "}
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>

      <p className="mt-2 text-xs text-muted-foreground">
        {description}
      </p>
    </div>
  );
}