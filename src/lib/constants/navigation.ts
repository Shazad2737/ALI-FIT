import type { LucideIcon } from "lucide-react";
import {
  ChartColumn,
  LayoutDashboard,
  NotebookPen,
  Scale,
  Settings,
  Target,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  path: string;
  icon: LucideIcon;
  end?: boolean;
  badge?: string;
  disabled?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    end: true,
  },
  {
    title: "Daily Log",
    path: "/daily-log",
    icon: NotebookPen,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: ChartColumn,
  },
  {
    title: "Goals",
    path: "/goals",
    icon: Target,
  },
  {
    title: "Weight",
    path: "/weight",
    icon: Scale,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];