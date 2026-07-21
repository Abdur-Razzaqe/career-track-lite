import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createApplication } from "../../services/application.service";
import { useState } from "react";

interface ApplicationForm {
  companyName: string;
  jobTitle: string;
  jobUrl: string;
  source:
    | "LINKEDIN"
    | "BDJOBS"
    | "INDEED"
    | "WELLFOUND"
    | "FACEBOOK"
    | "REFERRAL"
    | "OTHER";

  status:
    | "SAVED"
    | "APPLIED"
    | "ASSESSMENT"
    | "INTERVIEW"
    | "OFFER"
    | "REJECTED";

  applicationDate: string;
  notes: string;
}

const AddApplication = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationForm>();

  const onSubmit = async (data: ApplicationForm) => {
    try {
      setError("");

      await createApplication(data);

      alert("Application Added Successfully");
      navigate("/applications");
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add Job Application</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Company Name */}
        <div>
          <label>Company Name</label>

          <input
            className="input input-bordered w-full"
            {...register("companyName", {
              required: "Company Name is required",
            })}
          />

          <p className="text-red-500">{errors.companyName?.message}</p>
        </div>

        {/* Job Title */}
        <div>
          <label>Job Title</label>

          <input
            className="input input-bordered w-full"
            {...register("jobTitle", {
              required: "Job Title is required",
            })}
          />

          <p className="text-red-500">{errors.jobTitle?.message}</p>
        </div>

        {/* Job URL */}
        <div>
          <label>Job URL</label>

          <input
            type="url"
            className="input input-bordered w-full"
            placeholder="https://example.com/job"
            {...register("jobUrl")}
          />
        </div>

        {/* Source */}
        <div>
          <label>Application Source</label>

          <select
            className="select select-bordered w-full"
            {...register("source", {
              required: "Application source is required",
            })}
          >
            <option value="LINKEDIN">LinkedIn</option>
            <option value="BDJOBS">BDJobs</option>
            <option value="INDEED">Indeed</option>
            <option value="WELLFOUND">Wellfound</option>
            <option value="FACEBOOK">Facebook</option>
            <option value="REFERRAL">Referral</option>
            <option value="OTHER">Other</option>
          </select>

          <p className="text-red-500">{errors.source?.message}</p>
        </div>

        {/* Status */}
        <div>
          <label>Status</label>

          <select
            className="select select-bordered w-full"
            {...register("status", {
              required: "Status is required",
            })}
          >
            <option value="SAVED">Saved</option>
            <option value="APPLIED">Applied</option>
            <option value="ASSESSMENT">Assessment</option>
            <option value="INTERVIEW">Interview</option>
            <option value="OFFER">Offer</option>
            <option value="REJECTED">Rejected</option>
          </select>

          <p className="text-red-500">{errors.status?.message}</p>
        </div>

        {/* Application Date */}
        <div>
          <label>Application Date</label>

          <input
            type="date"
            className="input input-bordered w-full"
            {...register("applicationDate", {
              required: "Application date is required",
            })}
          />

          <p className="text-red-500">{errors.applicationDate?.message}</p>
        </div>

        {/* Notes */}
        <div>
          <label>Notes</label>

          <textarea
            rows={4}
            className="textarea textarea-bordered w-full"
            {...register("notes")}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full"
        >
          {isSubmitting ? "Saving..." : "Save Application"}
        </button>
      </form>
    </div>
  );
};

export default AddApplication;
