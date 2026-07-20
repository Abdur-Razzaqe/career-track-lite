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
      try {
        const res = await getApplication(id!);

        console.log(res);

        setApplication(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadApplication();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!application) {
    return <div className="text-center mt-10">Application Not Found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Application Details</h1>

      <div className="space-y-4 border rounded-lg shadow p-6">
        <p>
          <strong>Company:</strong> {application.companyName}
        </p>

        <p>
          <strong>Job Title:</strong> {application.jobTitle}
        </p>

        <p>
          <strong>Status:</strong> {application.status}
        </p>

        <p>
          <strong>Source:</strong> {application.source}
        </p>

        <p>
          <strong>Application Date:</strong>{" "}
          {new Date(application.applicationDate).toLocaleDateString()}
        </p>

        <p>
          <strong>Job URL:</strong>{" "}
          <a
            href={application.jobUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            {application.jobUrl}
          </a>
        </p>

        <p>
          <strong>Notes:</strong>
        </p>

        <p>{application.notes}</p>

        <div className="pt-5">
          <Link
            to={`/applications/edit/${application.id}`}
            className="btn btn-primary mr-3"
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
