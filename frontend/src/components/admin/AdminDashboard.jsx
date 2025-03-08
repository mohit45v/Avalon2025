import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { BsPersonLinesFill, BsCheckCircle, BsInbox, BsBarChart } from 'react-icons/bs';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    verifiedParticipants: 0,
    pendingReview: 0,
    rejectedParticipants: 0,
    totalQueries: 0,
    pendingQueries: 0,
    solvedQueries: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (!token || role !== 'admin') {
      navigate('/admin/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        setIsLoading(true);
        
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/admin/dashboard-stats`
        );
        
        setStats({
          totalRegistrations: response.data.totalRegistrations || 0,
          verifiedParticipants: response.data.verifiedParticipants || 0,
          pendingReview: response.data.pendingReview || 0,
          rejectedParticipants: response.data.rejectedParticipants || 0,
          totalQueries: response.data.totalQueries || 0,
          pendingQueries: response.data.pendingQueries || 0,
          solvedQueries: response.data.solvedQueries || 0
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardStats();
    const interval = setInterval(fetchDashboardStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/admin/login');
  };

  const adminLinks = [
    {
      title: 'Participant Manager',
      description: 'Manage and review all participant registrations',
      icon: <BsPersonLinesFill size={24} />,
      path: '/admin/participants',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Verified Participants',
      description: 'View all verified participants by event',
      icon: <BsCheckCircle size={24} />,
      path: '/admin/verified',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Query Manager',
      description: 'Handle user queries and support tickets',
      icon: <BsInbox size={24} />,
      path: '/admin/queries',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Analytics',
      description: 'View registration statistics and insights',
      icon: <BsBarChart size={24} />,
      path: '/admin/analytics',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8">
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-400">Loading dashboard data...</p>
          </div>
        </div>
      ) : (
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-gray-400">Total Registrations</h3>
              <p className="text-3xl font-bold mt-2">{stats.totalRegistrations}</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-gray-400">Verified Participants</h3>
              <p className="text-3xl font-bold mt-2 text-green-400">{stats.verifiedParticipants}</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-gray-400">Pending Review</h3>
              <p className="text-3xl font-bold mt-2 text-yellow-400">{stats.pendingReview}</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-gray-400">Rejected</h3>
              <p className="text-3xl font-bold mt-2 text-red-400">{stats.rejectedParticipants}</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-gray-400">Total Queries</h3>
              <p className="text-3xl font-bold mt-2">{stats.totalQueries}</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/20">
                  <BsInbox size={20} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-gray-400">Pending Queries</h3>
                  <p className="text-3xl font-bold mt-1">{stats.pendingQueries}</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <BsCheckCircle size={20} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-gray-400">Solved Queries</h3>
                  <p className="text-3xl font-bold mt-1">{stats.solvedQueries}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;