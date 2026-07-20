import { useEffect, useState } from "react";
import { getDashboard } from "../../services/dashboard.service";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await getDashboard();

        console.log("Dashboard Response:", response);

        setDashboard(response.data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading Dashboard...</div>;
  }

  if (!dashboard) {
    return (
      <div className="text-center mt-10 text-red-500">
        Dashboard data not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        <div className="border rounded-lg p-5 shadow">
          <h2>Total Applications</h2>
          <p className="text-3xl font-bold">{dashboard.totalApplications}</p>
        </div>

        <div className="border rounded-lg p-5 shadow">
          <h2>Applied</h2>
          <p className="text-3xl font-bold">{dashboard.applied}</p>
        </div>

        <div className="border rounded-lg p-5 shadow">
          <h2>Saved</h2>
          <p className="text-3xl font-bold">{dashboard.saved}</p>
        </div>

        <div className="border rounded-lg p-5 shadow">
          <h2>Interview</h2>
          <p className="text-3xl font-bold">{dashboard.interview}</p>
        </div>

        <div className="border rounded-lg p-5 shadow">
          <h2>Offer</h2>
          <p className="text-3xl font-bold">{dashboard.offer}</p>
        </div>

        <div className="border rounded-lg p-5 shadow">
          <h2>Rejected</h2>
          <p className="text-3xl font-bold">{dashboard.rejected}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
