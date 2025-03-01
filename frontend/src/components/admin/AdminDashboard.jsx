import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsPersonLinesFill, BsCheckCircle, BsInbox, BsBarChart } from 'react-icons/bs';
import { useNavigate } from'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
          >
            Logout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={link.path}>
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${link.color} bg-opacity-20`}>
                      {link.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{link.title}</h2>
                      <p className="text-gray-400 mt-1">{link.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-gray-400">Total Registrations</h3>
            <p className="text-3xl font-bold mt-2">234</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-gray-400">Verified Participants</h3>
            <p className="text-3xl font-bold mt-2">156</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-gray-400">Pending Review</h3>
            <p className="text-3xl font-bold mt-2">45</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-gray-400">Active Queries</h3>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;