import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Quick Actions</h2>

        <Link to="/applications/new" className="btn btn-primary">
          Add Application
        </Link>

        <Link to="/applications" className="btn btn-outline">
          View Applications
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
