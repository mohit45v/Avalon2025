import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsPersonLinesFill, BsCheckCircle, BsInbox, BsBarChart } from 'react-icons/bs';

const AdminDashboard = () => {
  const adminLinks = [
    {
      title: 'Participant Manager',
      description: 'Manage and review all participant registrations',
      icon: <BsPersonLinesFill size={24} />,
      path: '/participants',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Verified Participants',
      description: 'View all verified participants by event',
      icon: <BsCheckCircle size={24} />,
      path: '/verified',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Query Manager',
      description: 'Handle user queries and support tickets',
      icon: <BsInbox size={24} />,
      path: '/queries',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Analytics',
      description: 'View registration statistics and insights',
      icon: <BsBarChart size={24} />,
      path: '/analytics',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
          Admin Dashboard
        </h1>

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