import { useState } from "react";
import {
  Moon,
  Sun,
  Bell,
  Shield,
  Lock,
  Save,
  CheckCircle2,
} from "lucide-react";

interface SettingsState {
  darkMode: boolean;
  emailNotifications: boolean;
  jobAlerts: boolean;
  profileVisibility: string;
}

const Settings = () => {
  const [settings, setSettings] = useState<SettingsState>({
    darkMode: false,
    emailNotifications: true,
    jobAlerts: true,
    profileVisibility: "public",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleToggle = (key: keyof SettingsState) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    // await api.put('/users/settings', settings);

    setSuccessMessage("Settings updated successfully!");
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800">
          Account Settings
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Customize your preferences, notifications, and application settings.
        </p>
      </div>

      {/* Success Alert */}
      {successMessage && (
        <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-700 text-sm rounded-xl flex items-center gap-2 shadow-sm">
          <CheckCircle2 className="size-5 shrink-0" />
          {successMessage}
        </div>
      )}

      {/* Settings Form Container */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* 1. Appearance & Theme Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl">
              {settings.darkMode ? (
                <Moon className="size-5" />
              ) : (
                <Sun className="size-5" />
              )}
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-lg">Appearance</h2>
              <p className="text-sm text-slate-500">
                Customize how CareerTrack Lite looks on your device.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-semibold text-slate-700">Dark Mode</p>
              <p className="text-sm text-slate-500">
                Enable dark theme for low-light environments.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleToggle("darkMode")}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                settings.darkMode ? "bg-blue-600" : "bg-slate-300"
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  settings.darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* 2. Notification Preferences */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-xl">
              <Bell className="size-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-lg">
                Notifications
              </h2>
              <p className="text-sm text-slate-500">
                Manage your alert preferences and emails.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-semibold text-slate-700">
                Email Notifications
              </p>
              <p className="text-sm text-slate-500">
                Receive summary emails regarding your application status
                updates.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleToggle("emailNotifications")}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                settings.emailNotifications ? "bg-blue-600" : "bg-slate-300"
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  settings.emailNotifications
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-2 border-t border-slate-50">
            <div>
              <p className="font-semibold text-slate-700">
                Job Interview Reminders
              </p>
              <p className="text-sm text-slate-500">
                Get reminders before scheduled interview dates.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleToggle("jobAlerts")}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                settings.jobAlerts ? "bg-blue-600" : "bg-slate-300"
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  settings.jobAlerts ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* 3. Privacy & Security */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl">
              <Shield className="size-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-lg">
                Privacy & Security
              </h2>
              <p className="text-sm text-slate-500">
                Control your account access and profile privacy.
              </p>
            </div>
          </div>

          <div className="py-2 max-w-md">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Profile Visibility
            </label>
            <select
              name="profileVisibility"
              value={settings.profileVisibility}
              onChange={handleSelectChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 text-slate-800 bg-white"
            >
              <option value="public">Public (Visible to network)</option>
              <option value="private">Private (Only me)</option>
            </select>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-blue-600/20 flex items-center gap-2 transition-all duration-200"
          >
            <Save className="size-5" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
