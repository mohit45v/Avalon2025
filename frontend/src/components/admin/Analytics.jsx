import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Line, Pie } from 'react-chartjs-2';
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
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Analytics = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState({
    totalRegistrations: 0,
    registrationsByEvent: {},
    dailyRegistrations: [],
    paymentStatus: {},
    verificationStatus: {},
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/user/fetchdata`);
      const data = response.data;

      // Process data for analytics
      const analytics = processAnalyticsData(data);
      setAnalytics(analytics);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching analytics:', error);
      setLoading(false);
    }
  };

  const processAnalyticsData = (data) => {
    // Initialize counters
    const registrationsByEvent = {
      hackathon: 0,
      project: 0,
      robotics: 0,
      workshop: 0,
    };

    const verificationStatus = {
      verified: 0,
      pending: 0,
      rejected: 0,
    };

    // Process daily registrations
    const dailyRegistrations = {};
    
    data.forEach(registration => {
      // Count by event type
      if (registration.competition) {
        registrationsByEvent[registration.competition]++;
      }
      if (registration.workshop) {
        registrationsByEvent.workshop++;
      }

      // Count by verification status
      verificationStatus[registration.status || 'pending']++;

      // Group by date
      const date = new Date(registration.createdAt).toLocaleDateString();
      dailyRegistrations[date] = (dailyRegistrations[date] || 0) + 1;
    });

    return {
      totalRegistrations: data.length,
      registrationsByEvent,
      dailyRegistrations: Object.entries(dailyRegistrations).map(([date, count]) => ({
        date,
        count,
      })),
      verificationStatus,
    };
  };

  const lineChartData = {
    labels: analytics.dailyRegistrations.map(item => item.date),
    datasets: [
      {
        label: 'Daily Registrations',
        data: analytics.dailyRegistrations.map(item => item.count),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: Object.keys(analytics.registrationsByEvent),
    datasets: [
      {
        data: Object.values(analytics.registrationsByEvent),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
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
            className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30"
          >
            Back to Dashboard
          </button>
        </div>

        {loading ? (
          <div className="text-center">Loading analytics...</div>
        ) : (
          <div className="grid gap-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Total Registrations</h3>
                <p className="text-3xl font-bold text-purple-400">
                  {analytics.totalRegistrations}
                </p>
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Verified Participants</h3>
                <p className="text-3xl font-bold text-green-400">
                  {analytics.verificationStatus.verified}
                </p>
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Pending Verifications</h3>
                <p className="text-3xl font-bold text-yellow-400">
                  {analytics.verificationStatus.pending}
                </p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Registration Trends</h3>
                <Line data={lineChartData} options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      labels: {
                        color: 'white'
                      }
                    }
                  },
                  scales: {
                    y: {
                      ticks: { color: 'white' }
                    },
                    x: {
                      ticks: { color: 'white' }
                    }
                  }
                }} />
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Registration Distribution</h3>
                <Pie data={pieChartData} options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      labels: {
                        color: 'white'
                      }
                    }
                  }
                }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics; 