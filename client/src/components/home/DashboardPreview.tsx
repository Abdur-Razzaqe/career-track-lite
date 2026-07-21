import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Manage Everything
            <span className="text-primary"> From One Dashboard</span>
          </h2>

          <p className="mt-5 text-base-content/70 max-w-2xl mx-auto">
            Track applications, monitor interview progress, update job status,
            and organize your entire job search in one clean dashboard.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden border shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400"
            alt="Dashboard Preview"
            className="w-full object-cover"
          />
        </motion.div>

        <div className="flex justify-center mt-12">
          <Link to="/register" className="btn btn-primary btn-lg">
            Start Tracking
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
