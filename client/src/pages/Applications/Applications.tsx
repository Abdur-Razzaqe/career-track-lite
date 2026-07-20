import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getApplications } from "../../services/application.service";

interface Application {
  id: string;
  companyName: string;
  jobTitle: string;
  status: string;
  source: string;
  applicationDate: string;
}

const Applications = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApplications = async () => {
      try {
        const res = await getApplications();

        console.log("Applications:", res);

        setApplications(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadApplications();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading Applications...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Applications</h1>

        <Link
          to="/applications/new"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Application
        </Link>
      </div>

      {applications.length === 0 ? (
        <div className="text-center py-10">No Applications Found</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Company</th>
                <th>Job</th>
                <th>Status</th>
                <th>Source</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.companyName}</td>

                  <td>{app.jobTitle}</td>

                  <td>{app.status}</td>

                  <td>{app.source}</td>

                  <td>{new Date(app.applicationDate).toLocaleDateString()}</td>

                  <td>
                    <Link
                      to={`/applications/${app.id}`}
                      className="text-blue-600 mr-3"
                    >
                      View
                    </Link>

                    <Link
                      to={`/applications/edit/${app.id}`}
                      className="text-green-600"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Applications;
