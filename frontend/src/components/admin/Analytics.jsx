import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Analytics = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    verifiedParticipants: 0,
    pendingReview: 0,
    rejectedParticipants: 0,
    totalQueries: 0,
    pendingQueries: 0,
    solvedQueries: 0,
    registrationsByEvent: {},
    dailyRegistrations: [],
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        // Fetch dashboard stats
        const dashboardResponse = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/admin/dashboard-stats`
        );
        
        // Fetch registration data
        const registrationResponse = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/user/fetchdata`
        );

        const dashboardData = dashboardResponse.data;
        const registrationData = registrationResponse.data;

        // Process registration data for charts
        const processedData = processAnalyticsData(registrationData);

        setStats({
          ...dashboardData,
          registrationsByEvent: processedData.registrationsByEvent,
          dailyRegistrations: processedData.dailyRegistrations,
        });
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const processAnalyticsData = (data) => {
    const registrationsByEvent = {
      Hackathon: 0,
      'Cube Casting': 0,
      'Robo Race': 0,
    };

    const dailyRegistrations = {};
    
    data.forEach(registration => {
      if (registration.competition) {
        registrationsByEvent[registration.competition]++;
      }

      const date = new Date(registration.createdAt).toLocaleDateString();
      dailyRegistrations[date] = (dailyRegistrations[date] || 0) + 1;
    });

    return {
      registrationsByEvent,
      dailyRegistrations: Object.entries(dailyRegistrations).map(([date, count]) => ({
        date,
        count,
      })),
    };
  };

  const lineChartData = {
    labels: stats.dailyRegistrations.map(item => item.date),
    datasets: [
      {
        label: 'Daily Registrations',
        data: stats.dailyRegistrations.map(item => item.count),
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const pieChartData = {
    labels: Object.keys(stats.registrationsByEvent),
    datasets: [
      {
        data: Object.values(stats.registrationsByEvent),
        backgroundColor: [
          'rgba(139, 92, 246, 0.6)',  // Purple
          'rgba(236, 72, 153, 0.6)',   // Pink
          'rgba(234, 179, 8, 0.6)',    // Yellow
        ],
        borderColor: [
          'rgba(139, 92, 246, 1)',
          'rgba(236, 72, 153, 1)',
          'rgba(234, 179, 8, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const verificationChartData = {
    labels: ['Verified', 'Pending', 'Rejected'],
    datasets: [
      {
        data: [
          stats.verifiedParticipants,
          stats.pendingReview,
          stats.rejectedParticipants
        ],
        backgroundColor: [
          'rgba(34, 197, 94, 0.6)',  // Green
          'rgba(234, 179, 8, 0.6)',  // Yellow
          'rgba(239, 68, 68, 0.6)',  // Red
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(234, 179, 8, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
            Analytics Dashboard
          </h1>
          <button
            onClick={() => navigate('/admin')}
            className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all"
          >
            Back to Dashboard
          </button>
        </div>

        {loading ? (
          <div className="h-[80vh] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Loading analytics...</p>
            </div>
          </div>
        ) : (
          <div className="grid gap-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
                <h3 className="text-gray-400">Total Registrations</h3>
                <p className="text-3xl font-bold mt-2">{stats.totalRegistrations}</p>
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all">
                <h3 className="text-gray-400">Verified</h3>
                <p className="text-3xl font-bold mt-2 text-green-400">{stats.verifiedParticipants}</p>
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-yellow-500/40 transition-all">
                <h3 className="text-gray-400">Pending</h3>
                <p className="text-3xl font-bold mt-2 text-yellow-400">{stats.pendingReview}</p>
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all">
                <h3 className="text-gray-400">Rejected</h3>
                <p className="text-3xl font-bold mt-2 text-red-400">{stats.rejectedParticipants}</p>
              </div>
            </div>

            {/* Query Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
                <h3 className="text-gray-400">Total Queries</h3>
                <p className="text-3xl font-bold mt-2">{stats.totalQueries}</p>
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-yellow-500/40 transition-all">
                <h3 className="text-gray-400">Pending Queries</h3>
                <p className="text-3xl font-bold mt-2 text-yellow-400">{stats.pendingQueries}</p>
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all">
                <h3 className="text-gray-400">Solved Queries</h3>
                <p className="text-3xl font-bold mt-2 text-green-400">{stats.solvedQueries}</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
                <h3 className="text-lg font-semibold mb-4">Registration Trends</h3>
                <Line 
                  data={lineChartData} 
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        labels: { color: 'white' }
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { color: 'white' }
                      },
                      x: {
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { color: 'white' }
                      }
                    }
                  }} 
                />
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
                <h3 className="text-lg font-semibold mb-4">Registration Distribution</h3>
                <Pie 
                  data={pieChartData} 
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: { color: 'white' }
                      }
                    }
                  }} 
                />
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
                <h3 className="text-lg font-semibold mb-4">Verification Status</h3>
                <Pie 
                  data={verificationChartData} 
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: { color: 'white' }
                      }
                    }
                  }} 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics; 