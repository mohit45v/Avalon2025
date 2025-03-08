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
      Swal.fire({ 
        icon: "warning", 
        title: "Missing Fields", 
        text: "Both fields are required!",
        customClass: {
          container: 'swal-mobile' // Add custom class for mobile
        }
      });
      setLoading(false);
      return;
    }

    try {
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
          timer: 1500,
          customClass: {
            container: 'swal-mobile' // Add custom class for mobile
          }
        }).then(() => {
          navigate('/admin');
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      
      let errorMessage = "Login failed. ";
      if (error.message === "Network Error") {
        errorMessage += "Cannot connect to server. Please check your internet connection.";
      } else {
        errorMessage += error.response?.data?.message || "Invalid credentials!";
      }

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
        customClass: {
          container: 'swal-mobile' // Add custom class for mobile
        }
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030014] px-4 py-6">
      <div className="w-full max-w-md p-6 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg border border-purple-500/20">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400 text-center mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="admin@example.com"
              className="w-full p-3 border border-purple-500/20 rounded-lg bg-black/40 text-white focus:outline-none focus:border-purple-500/40 transition-colors"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full p-3 border border-purple-500/20 rounded-lg bg-black/40 text-white focus:outline-none focus:border-purple-500/40 transition-colors"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-orange-600 text-white py-3 px-4 rounded-lg hover:opacity-90 transition duration-300 disabled:opacity-50 font-semibold"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/20 border-t-white/100 rounded-full animate-spin" />
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

// Add this CSS to your global styles or component
const styles = `
  .swal-mobile {
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    .swal2-popup {
      font-size: 0.875rem !important;
      padding: 1rem !important;
    }
    
    .swal2-title {
      font-size: 1.25rem !important;
    }
    
    .swal2-content {
      font-size: 0.875rem !important;
    }
  }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default AdminLogin;
