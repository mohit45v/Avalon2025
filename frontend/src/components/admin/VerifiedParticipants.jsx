import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const VerifiedParticipants = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchVerifiedParticipants();
  }, [filter]);

  const fetchVerifiedParticipants = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/verified-participants`, {
        params: { filter }
      });
      setParticipants(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching verified participants:', error);
      setLoading(false);
    }
  };

  const filteredParticipants = participants.filter(participant =>
    participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
            Verified Participants
          </h1>
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
        </div>

        <input
          type="text"
          placeholder="Search participants..."
          className="w-full mb-8 px-4 py-2 bg-white/10 border border-purple-500/20 rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {loading ? (
          <div className="text-center">Loading...</div>
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
                    <h3 className="font-semibold">{participant.name}</h3>
                    <p className="text-sm text-gray-400">{participant.email}</p>
                    <p className="text-sm text-gray-400">Event: {participant.event}</p>
                    <p className="text-sm text-gray-400">
                      Verified on: {new Date(participant.verifiedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    Verified
                  </span>
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