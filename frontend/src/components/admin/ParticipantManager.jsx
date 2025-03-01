import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical, BsCheckCircle, BsXCircle, BsEnvelope, BsFlag } from 'react-icons/bs';

const ParticipantManager = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchParticipants();
  }, [filter, sortBy]);

  const fetchParticipants = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/participants`, {
        params: { filter, sortBy }
      });
      setParticipants(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching participants:', error);
      setLoading(false);
    }
  };

  const handleAction = async (participantId, action) => {
    try {
      switch (action) {
        case 'verify':
          await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/verify/${participantId}`);
          break;
        case 'reject':
          await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/reject/${participantId}`);
          break;
        case 'sendEmail':
          await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/send-email/${participantId}`);
          break;
        case 'markForReview':
          await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/mark-review/${participantId}`);
          break;
      }
      fetchParticipants();
    } catch (error) {
      console.error('Error performing action:', error);
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
            Participant Management
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
            <select
              className="bg-white/10 border border-purple-500/20 rounded-lg px-4 py-2"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="pending">Pending Review</option>
              <option value="verified">Verified</option>
            </select>
          </div>
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
                className="bg-white/5 border border-purple-500/20 rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{participant.name}</h3>
                  <p className="text-sm text-gray-400">{participant.email}</p>
                  <p className="text-sm text-gray-400">Event: {participant.event}</p>
                  <div className="flex gap-2 mt-2">
                    {participant.status === 'verified' && (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                        Verified
                      </span>
                    )}
                    {participant.status === 'pending' && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                        Pending
                      </span>
                    )}
                    {participant.markedForReview && (
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                        Under Review
                      </span>
                    )}
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger className="p-2 hover:bg-white/10 rounded">
                    <BsThreeDotsVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border border-purple-500/20">
                    <DropdownMenuItem
                      className="flex items-center gap-2 hover:bg-white/10"
                      onClick={() => handleAction(participant._id, 'verify')}
                    >
                      <BsCheckCircle /> Verify
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex items-center gap-2 hover:bg-white/10"
                      onClick={() => handleAction(participant._id, 'reject')}
                    >
                      <BsXCircle /> Reject
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex items-center gap-2 hover:bg-white/10"
                      onClick={() => handleAction(participant._id, 'sendEmail')}
                    >
                      <BsEnvelope /> Send Email
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex items-center gap-2 hover:bg-white/10"
                      onClick={() => handleAction(participant._id, 'markForReview')}
                    >
                      <BsFlag /> Mark for Review
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ParticipantManager;