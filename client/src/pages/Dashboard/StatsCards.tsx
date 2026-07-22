import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Send,
  ClipboardCheck,
  Users,
  Award,
  XCircle,
} from "lucide-react";

import type { DashboardData } from "../../types/dashboard.types";

interface StatsCardsProps {
  dashboard: DashboardData | null;
}

const StatsCards = ({ dashboard }: StatsCardsProps) => {
  const cards = [
    {
      title: "Total Applications",
      value: dashboard?.totalApplications ?? 0,
      icon: BriefcaseBusiness,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Applied",
      value: dashboard?.applied ?? 0,
      icon: Send,
      color: "text-info",
      bg: "bg-info/10",
    },
    {
      title: "Assessment",
      value: dashboard?.assessment ?? 0,
      icon: ClipboardCheck,
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      title: "Interviews",
      value: dashboard?.interviews ?? 0,
      icon: Users,
      color: "text-warning",
      bg: "bg-warning/10",
    },
    {
      title: "Offers",
      value: dashboard?.offers ?? 0,
      icon: Award,
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      title: "Rejected",
      value: dashboard?.rejected ?? 0,
      icon: XCircle,
      color: "text-error",
      bg: "bg-error/10",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="card bg-base-100 shadow-lg border border-base-300"
          >
            <div className="card-body">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-70">{card.title}</p>

                  <h2 className={`text-5xl font-bold mt-2 ${card.color}`}>
                    {card.value}
                  </h2>
                </div>

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${card.bg}`}
                >
                  <Icon className={card.color} size={30} />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCards;
