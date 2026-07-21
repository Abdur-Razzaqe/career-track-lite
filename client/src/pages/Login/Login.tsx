import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError("");
      const response = await login(data);
      console.log("Login Success:", response);
      navigate("/dashboard");
    } catch (err: any) {
      console.error("Login Error:", err);
      setError(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/20">
        {/* Header Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Please enter your details to sign in to CareerTrack Lite
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              className={`w-full px-4 py-2.5 rounded-lg border text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
              }`}
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className={`w-full px-4 py-2.5 rounded-lg border text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.password
                  ? "border-red-500 focus:ring-red-200"
                  : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
              }`}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 font-medium">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </button>

          {/* Footer Link */}
          <p className="text-center text-sm text-slate-600 pt-2">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
