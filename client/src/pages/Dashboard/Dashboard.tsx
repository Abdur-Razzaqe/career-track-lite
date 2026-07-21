import WelcomeBanner from "./WelcomeBanner";
import StatsCards from "./StatsCards";
import StatusOverview from "./StatusOverview";
import RecentApplications from "./RecentApplications";
import QuickActions from "./QuickActions";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <WelcomeBanner />

      <StatsCards />

      <div className="grid xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RecentApplications />
        </div>

        <QuickActions />
      </div>

      <StatusOverview />
    </div>
  );
};

export default Dashboard;
