import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero min-h-[90vh] bg-base-100 overflow-hidden">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse max-w-7xl gap-16">
        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            alt="Career"
            className="rounded-3xl shadow-2xl"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
            className="badge badge-primary badge-lg mb-6 gap-2"
          >
            <BriefcaseBusiness size={18} />
            Smart Job Tracker
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="text-5xl lg:text-7xl font-extrabold leading-tight"
          >
            Track Your
            <br />
            <span className="text-primary">Dream Career</span>
            <br />
            Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
            }}
            className="py-8 text-lg text-base-content/70"
          >
            Organize every job application, monitor interview progress, manage
            offers, and stay focused on landing your dream job.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
            }}
            className="flex flex-wrap gap-5"
          >
            <Link to="/register" className="btn btn-primary btn-lg">
              Get Started
              <ArrowRight size={20} />
            </Link>

            <Link to="/login" className="btn btn-outline btn-lg">
              Login
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
