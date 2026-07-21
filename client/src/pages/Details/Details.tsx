import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getApplication } from "../../services/application.service";

interface Application {
  id: string;
  companyName: string;
  jobTitle: string;
  jobUrl: string;
  source: string;
  status: string;
  applicationDate: string;
  notes: string;
}

const Details = () => {
  const { id } = useParams();

  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApplication = async () => {
      if (!id) return;

      try {
        const res = await getApplication(id);

        console.log("Application Details:", res);

        setApplication(res.data);
      } catch (error) {
        console.error("Failed to load application:", error);
      } finally {
        setLoading(false);
      }
    };

    loadApplication();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-500">
          Application Not Found
        </h2>

        <Link to="/applications" className="btn btn-primary mt-5">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Application Details</h1>

      <div className="bg-base-100 border rounded-xl shadow-lg p-6 space-y-4">
        <div>
          <p className="font-semibold">Company Name</p>
          <p>{application.companyName}</p>
        </div>

        <div>
          <p className="font-semibold">Job Title</p>
          <p>{application.jobTitle}</p>
        </div>

        <div>
          <p className="font-semibold">Status</p>
          <span className="badge badge-primary">{application.status}</span>
        </div>

        <div>
          <p className="font-semibold">Source</p>
          <p>{application.source}</p>
        </div>

        <div>
          <p className="font-semibold">Application Date</p>
          <p>
            {application.applicationDate
              ? new Date(application.applicationDate).toLocaleDateString()
              : "-"}
          </p>
        </div>

        <div>
          <p className="font-semibold">Job URL</p>

          {application.jobUrl ? (
            <a
              href={application.jobUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline break-all"
            >
              {application.jobUrl}
            </a>
          ) : (
            <p>No URL</p>
          )}
        </div>

        <div>
          <p className="font-semibold">Notes</p>
          <p>{application.notes || "No Notes"}</p>
        </div>

        <div className="flex gap-3 pt-5">
          <Link
            to={`/applications/edit/${application.id}`}
            className="btn btn-primary"
          >
            Edit
          </Link>

          <Link to="/applications" className="btn btn-outline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
