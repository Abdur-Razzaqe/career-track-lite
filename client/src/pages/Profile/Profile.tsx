import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  User,
  Mail,
  Shield,
  Calendar,
  Edit3,
  CheckCircle2,
} from "lucide-react";

interface ProfileFormData {
  name: string;
  email: string;
}

const Profile = () => {
  const { user } = useAuth() as any;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const [formData, setFormData] = useState<ProfileFormData>({
    name: user?.name || "",
    email: user?.email || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await axios.put('/api/users/profile', formData);

      setSuccessMessage("Profile updated successfully!");
      setIsEditing(false);
      setTimeout(() => setSuccessMessage(""), 4000);
    } catch (err) {
      console.error("Failed to update profile", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800">
          My Profile
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Manage your account information and preferences.
        </p>
      </div>

      {/* Success Alert */}
      {successMessage && (
        <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-700 text-sm rounded-xl flex items-center gap-2 shadow-sm">
          <CheckCircle2 className="size-5 shrink-0" />
          {successMessage}
        </div>
      )}

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Cover Banner */}
        <div className="h-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-800"></div>

        {/* Profile Details Container */}
        <div className="px-6 pb-8 pt-0 relative">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 -mt-16 mb-6">
            <div className="flex items-end gap-4">
              <div className="size-28 rounded-2xl bg-white p-2 shadow-md border border-slate-200">
                <div className="w-full h-full bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-3xl font-black">
                  {formData.name ? formData.name.charAt(0).toUpperCase() : "A"}
                </div>
              </div>
              <div className="mb-1">
                <h2 className="text-2xl font-bold text-slate-800">
                  {formData.name}
                </h2>
                <p className="text-slate-500 text-sm">
                  Full Stack Software Engineer
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <Edit3 className="size-4" />
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {/* Edit Form or Info Display */}
          {isEditing ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 pt-4 border-t border-slate-100 max-w-xl"
            >
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 text-slate-800"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 text-slate-800"
                  required
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow transition-all"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold px-5 py-2.5 rounded-lg transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="bg-blue-100 text-blue-600 p-2.5 rounded-lg">
                  <User className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Full Name
                  </p>
                  <p className="text-slate-800 font-semibold mt-0.5">
                    {formData.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="bg-indigo-100 text-indigo-600 p-2.5 rounded-lg">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="text-slate-800 font-semibold mt-0.5">
                    {formData.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="bg-emerald-100 text-emerald-600 p-2.5 rounded-lg">
                  <Shield className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Role / Status
                  </p>
                  <p className="text-slate-800 font-semibold mt-0.5">
                    Active Member
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="bg-amber-100 text-amber-600 p-2.5 rounded-lg">
                  <Calendar className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Member Since
                  </p>
                  <p className="text-slate-800 font-semibold mt-0.5">
                    January 2026
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
