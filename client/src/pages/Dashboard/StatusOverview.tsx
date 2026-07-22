import { motion } from "framer-motion";

interface DashboardData {
  totalApplications: number;
  applied: number;
  assessment: number;
  interviews: number;
  offers: number;
  rejected: number;
}

interface Props {
  dashboard: DashboardData | null;
}

const StatusOverview = ({ dashboard }: Props) => {
  if (!dashboard) {
    return null;
  }

  const total = dashboard.totalApplications || 1;

  const statuses = [
    {
      title: "Applied",
      value: dashboard.applied,
      color: "progress progress-info",
    },
    {
      title: "Assessment",
      value: dashboard.assessment,
      color: "progress progress-secondary",
    },
    {
      title: "Interviews",
      value: dashboard.interviews,
      color: "progress progress-warning",
    },
    {
      title: "Offers",
      value: dashboard.offers,
      color: "progress progress-success",
    },
    {
      title: "Rejected",
      value: dashboard.rejected,
      color: "progress progress-error",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="card bg-base-100 shadow-lg border border-base-300"
    >
      <div className="card-body">
        <h2 className="card-title mb-5">Application Status Overview</h2>

        <div className="space-y-5">
          {statuses.map((status) => (
            <div key={status.title}>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>{status.title}</span>

                <span>
                  {status.value} ({Math.round((status.value / total) * 100)}
                  %)
                </span>
              </div>

              <progress
                className={`${status.color} w-full h-3`}
                value={status.value}
                max={total}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StatusOverview;
