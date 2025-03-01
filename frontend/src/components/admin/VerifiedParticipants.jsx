import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifiedParticipants = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (!token || role !== 'admin') {
      navigate('/admin/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetchVerifiedParticipants();
  }, [filter]);

  const fetchVerifiedParticipants = async () => {
    try {
      console.log('Fetching verified participants...');
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/user/fetchdata`);
      console.log('Raw data:', response.data);

      // Check if each participant has a status field
      response.data.forEach(p => {
        console.log(`Participant ${p._id} status:`, p.status);
      });

      // Filter verified participants
      let filteredData = response.data.filter(p => p.status === 'verified');
      console.log('Verified participants:', filteredData);

      // Apply event filter
      if (filter !== 'all') {
        filteredData = filteredData.filter(p => 
          p.competition?.toLowerCase() === filter.toLowerCase() || 
          p.workshop?.toLowerCase() === filter.toLowerCase()
        );
      }
      console.log('After event filter:', filteredData);

      setParticipants(filteredData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching verified participants:', error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/admin/login');
  };

  const filteredParticipants = participants.filter(participant => {
    const searchString = searchTerm.toLowerCase();
    const teamMemberName = participant.teamMembers?.[0]?.name?.toLowerCase() || '';
    const teamMemberEmail = participant.teamMembers?.[0]?.email?.toLowerCase() || '';
    
    return teamMemberName.includes(searchString) || teamMemberEmail.includes(searchString);
  });

  console.log('Filtered participants:', filteredParticipants);

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
            Verified Participants
          </h1>
          <div className="flex gap-4">
            <select
              className="bg-white/10 border border-purple-500/20 rounded-lg px-4 py-2"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="all">All Events</option>
              <option value="hackathon">Hackathon</option>
              <option value="project">Project Competition</option>
              <option value="robotics">Robotics Competition</option>
              <option value="workshop">Workshops</option>
            </select>
            <button
              onClick={() => navigate('/admin')}
              className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30"
            >
              Dashboard
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
            >
              Logout
            </button>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search participants..."
          className="w-full mb-8 px-4 py-2 bg-white/10 border border-purple-500/20 rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : filteredParticipants.length === 0 ? (
          <div className="text-center text-gray-400">No verified participants found</div>
        ) : (
          <div className="grid gap-4">
            {filteredParticipants.map((participant) => (
              <motion.div
                key={participant._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 border border-purple-500/20 rounded-lg p-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">
                      {participant.teamMembers?.[0]?.name || 'No Name'}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {participant.teamMembers?.[0]?.email || 'No Email'}
                    </p>
                    {participant.competition && (
                      <p className="text-sm text-gray-400">
                        Competition: {participant.competition.charAt(0).toUpperCase() + participant.competition.slice(1)}
                      </p>
                    )}
                    {participant.workshop && (
                      <p className="text-sm text-gray-400">
                        Workshop: {participant.workshop.charAt(0).toUpperCase() + participant.workshop.slice(1)}
                      </p>
                    )}
                    <div className="mt-2">
                      <p className="text-sm text-gray-400">College: {participant.collegeName || 'N/A'}</p>
                      <p className="text-sm text-gray-400">Transaction ID: {participant.transactionId || 'N/A'}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      Verified
                    </span>
                    {participant.paymentScreenshot && (
                      <a
                        href={participant.paymentScreenshot}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300"
                      >
                        View Payment Proof
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifiedParticipants;