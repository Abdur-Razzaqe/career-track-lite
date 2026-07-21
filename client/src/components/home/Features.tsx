import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  PlusCircle,
  LayoutDashboard,
  Search,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Track Applications",
    description: "Keep all your job applications organized in one place.",
    icon: BriefcaseBusiness,
    path: "/applications",
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    title: "Add Application",
    description: "Save new job opportunities with company details.",
    icon: PlusCircle,
    path: "/applications/new",
    color: "bg-success/10 text-success",
  },
  {
    id: 3,
    title: "Dashboard",
    description: "Monitor your job search progress and statistics.",
    icon: LayoutDashboard,
    path: "/dashboard",
    color: "bg-secondary/10 text-secondary",
  },
  {
    id: 4,
    title: "Search & Filter",
    description: "Quickly find applications using search and filters.",
    icon: Search,
    path: "/applications",
    color: "bg-warning/10 text-warning",
  },
  {
    id: 5,
    title: "Analytics",
    description: "View your interview rate and application insights.",
    icon: BarChart3,
    path: "/dashboard",
    color: "bg-info/10 text-info",
  },
  {
    id: 6,
    title: "Secure Account",
    description: "JWT authentication keeps your account protected.",
    icon: ShieldCheck,
    path: "/profile",
    color: "bg-error/10 text-error",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">Everything You Need</h2>

          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Manage your complete job hunting journey with CareerTrack Lite.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
              >
                <Link
                  to={feature.path}
                  className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-full"
                >
                  <div className="card-body">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${feature.color}`}
                    >
                      <Icon
                        size={32}
                        className="group-hover:scale-110 transition"
                      />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>

                    <p className="text-base-content/70">
                      {feature.description}
                    </p>

                    <div className="card-actions mt-6">
                      <span className="text-primary font-semibold group-hover:translate-x-2 transition">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
