import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getApplicationService,
  deleteApplication,
} from "../../services/application.service";

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

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");
  const [sort, setSort] = useState("newest");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadApplicationService = async () => {
    try {
      setLoading(true);

      const res = await getApplicationService(
        search,
        status,
        source,
        sort,
        page,
        10,
      );

      console.log("Applications:", res);

      setApplications(res.data);
      setTotalPages(res.pagination.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplicationService();
  }, [search, status, source, sort, page]);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?",
    );

    if (!confirmDelete) return;

    try {
      await deleteApplication(id);

      alert("Application deleted successfully");

      loadApplicationService();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading Applications...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Applications</h1>

        <Link to="/applications/new" className="btn btn-primary">
          + Add Application
        </Link>
      </div>

      {/* Filters */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          className="select select-bordered w-full"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Status</option>
          <option value="SAVED">Saved</option>
          <option value="APPLIED">Applied</option>
          <option value="INTERVIEW">Interview</option>
          <option value="OFFER">Offer</option>
          <option value="REJECTED">Rejected</option>
        </select>

        <select
          className="select select-bordered w-full"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Source</option>
          <option value="LINKEDIN">LinkedIn</option>
          <option value="INDEED">Indeed</option>
          <option value="COMPANY">Company</option>
          <option value="COMPANY_WEBSITE">Company Website</option>
          <option value="OTHER">Other</option>
        </select>

        <select
          className="select select-bordered w-full"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {applications.length === 0 ? (
        <div className="text-center py-10">No Applications Found</div>
      ) : (
        <>
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
                    <td>
                      {new Date(app.applicationDate).toLocaleDateString()}
                    </td>

                    <td className="space-x-3">
                      <Link
                        to={`/applications/${app.id}`}
                        className=" btn btn-outline p-3 py-2 text-blue-600"
                      >
                        View
                      </Link>

                      <Link
                        to={`/applications/edit/${app.id}`}
                        className=" btn btn-primary text-gray-50 p-3 py-2"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(app.id)}
                        className=" btn btn-danger p-3 py-2 hover:bg-primary text-red-600 cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              className="btn"
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Previous
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              className="btn"
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Applications;
