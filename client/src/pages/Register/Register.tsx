import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setError("");

      const response = await registerUser(data);

      console.log("Registration Success:", response);

      alert("Registration successful!");

      navigate("/login");
    } catch (err: any) {
      console.error("Registration Error:", err);

      setError(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>

          <input
            type="text"
            autoComplete="name"
            className="w-full border rounded p-2"
            {...register("name", {
              required: "Name is required",
            })}
          />

          <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>

          <input
            type="email"
            autoComplete="email"
            className="w-full border rounded p-2"
            {...register("email", {
              required: "Email is required",
            })}
          />

          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password</label>

          <input
            type="password"
            autoComplete="new-password"
            className="w-full border rounded p-2"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.password?.message}
          </p>
        </div>

        {error && (
          <p className="text-center text-red-500 font-medium">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded disabled:bg-gray-400"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
