import { Link } from "react-router-dom";

interface Application {
  id: string;
  companyName: string;
  jobTitle: string;
  status: string;
  applicationDate: string;
}

interface Props {
  applications: Application[];
}

const badgeColor = (status: string) => {
  switch (status) {
    case "SAVED":
      return "badge-neutral";

    case "APPLIED":
      return "badge-info";

    case "ASSESSMENT":
      return "badge-secondary";

    case "INTERVIEW":
      return "badge-warning";

    case "OFFER":
      return "badge-success";

    case "REJECTED":
      return "badge-error";

    default:
      return "badge-outline";
  }
};

const RecentApplications = ({ applications = [] }: Props) => {
  return (
    <div className="card bg-base-100 shadow-xl border">
      <div className="card-body">
        <div className="flex justify-between items-center mb-3">
          <h2 className="card-title">Recent Applications</h2>

          <Link to="/applications" className="btn btn-sm btn-outline">
            View All
          </Link>
        </div>

        {applications.length === 0 ? (
          <div className="py-14 text-center">
            <h3 className="font-semibold text-lg">No Applications Found</h3>

            <p className="opacity-60 mt-2">
              Start by adding your first application.
            </p>

            <Link to="/applications/new" className="btn btn-primary mt-5">
              Add Application
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="hover">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar placeholder">
                          <div className="bg-primary text-white rounded-full w-10">
                            <span>{app.companyName.charAt(0)}</span>
                          </div>
                        </div>

                        <span className="font-medium">{app.companyName}</span>
                      </div>
                    </td>

                    <td>{app.jobTitle}</td>

                    <td>
                      <span className={`badge ${badgeColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>

                    <td>
                      {new Date(app.applicationDate).toLocaleDateString()}
                    </td>

                    <td>
                      <Link
                        to={`/applications/${app.id}`}
                        className="btn btn-xs btn-primary"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentApplications;
