import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import DashboardPage from "../features/dashboard/DashboardPage";
import DailyLogPage from "../features/daily-log/DailyLogPage";
import GoalsPage from "../features/goals/GoalsPage";
function Page({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-gray-500">
        ALI FIT {title} page
      </p>
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/daily-log" element={<DailyLogPage />} />
          <Route path="/analytics" element={<Page title="Analytics" />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/goals" element={<Page title="Goals" />} />
          <Route path="/weight" element={<Page title="Weight" />} />
          <Route path="/settings" element={<Page title="Settings" />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}