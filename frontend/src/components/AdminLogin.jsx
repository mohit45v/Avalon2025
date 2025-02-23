import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Dashboard from "./Dashboard";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      Swal.fire({ icon: "warning", title: "Missing Fields", text: "Both fields are required!" });
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/adminlogin`,
        formData
      );

      // Store token & role in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome to the admin panel!",
        confirmButtonText: "OK",
      }).then(() => {
        setIsLoggedIn(true); // Set login state to true
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "Invalid credentials!",
      });
    }
  };

  // If logged in, render Dashboard instead of Login
  if (isLoggedIn) {
    return <Dashboard />;
  }

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
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
