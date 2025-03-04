import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.email || !formData.password) {
      Swal.fire({ icon: "warning", title: "Missing Fields", text: "Both fields are required!" });
      setLoading(false);
      return;
    }

    try {
      console.log('Backend URL:', import.meta.env.VITE_BASE_URL); // Debug log
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/adminlogin`,
        formData
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", "admin");

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome to the admin panel!",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate('/admin');
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      
      let errorMessage = "Login failed. ";
      if (error.message === "Network Error") {
        errorMessage += "Cannot connect to server. Please make sure the backend server is running.";
      } else {
        errorMessage += error.response?.data?.message || "Invalid credentials!";
      }

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center">Admin Login</h2>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="admin@example.com"
              className="w-full mt-1 p-2 border border-gray-700 rounded bg-gray-700 text-white"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full mt-1 p-2 border border-gray-700 rounded bg-gray-700 text-white"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
