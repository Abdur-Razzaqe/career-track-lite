import { useEffect, useState } from "react";

import WelcomeBanner from "./WelcomeBanner";
import StatsCards from "./StatsCards";
import StatusOverview from "./StatusOverview";
import RecentApplications from "./RecentApplications";
import QuickActions from "./QuickActions";

import { getDashboardStatsService } from "../../services/dashboard.service";

import type { DashboardData } from "../../types/dashboard.types";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const res = await getDashboardStatsService();

        setDashboard(res.data);
      } catch (error) {
        console.error("Dashboard loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <WelcomeBanner dashboard={dashboard} />

      <StatsCards dashboard={dashboard} />

      <div className="grid xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RecentApplications
            applications={dashboard?.recentApplications || []}
          />
        </div>

        <QuickActions />
      </div>

      <StatusOverview dashboard={dashboard} />
    </div>
  );
};

export default Dashboard;
