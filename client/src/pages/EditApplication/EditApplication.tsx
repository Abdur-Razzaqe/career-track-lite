import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  getApplication,
  updateApplication,
} from "../../services/application.service";

interface FormData {
  companyName: string;
  jobTitle: string;
  jobUrl: string;
  source: string;
  status: string;
  applicationDate: string;
  notes: string;
}

const EditApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();

  useEffect(() => {
    const loadApplication = async () => {
      try {
        const res = await getApplication(id!);

        reset({
          companyName: res.data.companyName,
          jobTitle: res.data.jobTitle,
          jobUrl: res.data.jobUrl,
          source: res.data.source,
          status: res.data.status,
          applicationDate: res.data.applicationDate?.split("T")[0],
          notes: res.data.notes,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadApplication();
  }, [id, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      setError("");

      await updateApplication(id!, data);

      alert("Application Updated Successfully");

      navigate("/applications");
    } catch (err: any) {
      setError(err.response?.data?.message || "Update Failed");
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Application</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("companyName")}
          className="input input-bordered w-full"
          placeholder="Company Name"
        />

        <input
          {...register("jobTitle")}
          className="input input-bordered w-full"
          placeholder="Job Title"
        />

        <input
          {...register("jobUrl")}
          className="input input-bordered w-full"
          placeholder="Job URL"
        />

        <select
          {...register("source")}
          className="select select-bordered w-full"
        >
          <option value="LINKEDIN">LinkedIn</option>
          <option value="INDEED">Indeed</option>
          <option value="COMPANY">Company</option>
          <option value="OTHER">Other</option>
        </select>

        <select
          {...register("status")}
          className="select select-bordered w-full"
        >
          <option value="SAVED">Saved</option>
          <option value="APPLIED">Applied</option>
          <option value="INTERVIEW">Interview</option>
          <option value="OFFER">Offer</option>
          <option value="REJECTED">Rejected</option>
        </select>

        <input
          type="date"
          {...register("applicationDate")}
          className="input input-bordered w-full"
        />

        <textarea
          {...register("notes")}
          className="textarea textarea-bordered w-full"
          rows={4}
        />

        {error && <p className="text-red-500">{error}</p>}

        <button disabled={isSubmitting} className="btn btn-primary w-full">
          {isSubmitting ? "Updating..." : "Update Application"}
        </button>
      </form>
    </div>
  );
};

export default EditApplication;
