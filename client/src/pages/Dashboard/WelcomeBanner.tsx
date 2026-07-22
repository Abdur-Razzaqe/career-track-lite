interface WelcomeBannerProps {
  dashboard: {
    name?: string;
  } | null;
}

const WelcomeBanner = ({ dashboard }: WelcomeBannerProps) => {
  return (
    <div className="hero rounded-3xl bg-primary text-primary-content">
      <div className="hero-content w-full justify-between py-10">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome Back {dashboard?.name || ""}
          </h1>

          <p className="mt-3 opacity-80">
            Manage all your job applications from one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
