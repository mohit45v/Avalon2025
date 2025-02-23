import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/user/fetchdata`)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const sendEmail = async (user) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to send an email to ${user.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/send-email`, {
          email: user.email,
        });

        Swal.fire({
          icon: "success",
          title: "Email Sent!",
          text: `Email successfully sent to ${user.name}.`,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Failed to Send Email",
          text: "An error occurred while sending the email.",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6 relative">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">Dashboard</h2>

      {loading ? (
        <p className="text-gray-300">Loading users...</p>
      ) : users.length === 0 ? (
        <p className="text-gray-400">No users registered yet.</p>
      ) : (
        <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-lg p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="p-2 text-indigo-300">Name</th>
                <th className="p-2 text-indigo-300">Email</th>
                <th className="p-2 text-indigo-300">Phone</th>
                <th className="p-2 text-indigo-300">Payment Screenshot</th>
                <th className="p-2 text-indigo-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email} className="border-b border-gray-700">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.mobileNo}</td>
                  <td className="p-2">
                    {user.paymentScreenshot ? (
                      <img
                        src={user.paymentScreenshot}
                        alt="Payment Screenshot"
                        className="w-16 h-16 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
                        onClick={() => setSelectedImage(user.paymentScreenshot)}
                      />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => sendEmail(user)}
                      className="bg-indigo-500 px-4 py-1 text-white rounded-lg hover:bg-indigo-600 transition"
                    >
                      Send Email
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Image Preview Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-gray-900 p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-red-500 px-3 py-1 rounded-full hover:bg-red-600 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
