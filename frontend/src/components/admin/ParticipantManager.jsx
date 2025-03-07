import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Swal from "sweetalert2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical, BsCheckCircle, BsXCircle, BsEnvelope } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ParticipantManager = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchParticipants();
  }, [filter, sortBy]);

  const fetchParticipants = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/user/fetchdata`);
      let sortedData = [...response.data];

      switch (sortBy) {
        case 'newest':
          sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          break;
        case 'oldest':
          sortedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
          break;
        case 'pending':
          sortedData.sort((a, b) => (a.status === 'pending' ? -1 : 1));
          break;
        case 'verified':
          sortedData.sort((a, b) => (a.status === 'verified' ? -1 : 1));
          break;
      }

      if (filter !== 'all') {
        sortedData = sortedData.filter(p => p.competition === filter || p.workshop === filter);
      }

      setParticipants(sortedData);
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
          // Show loading alert
          Swal.fire({
            title: 'Verifying...',
            text: 'Please wait while we verify the participant',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            }
          });

          await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/verify/${participantId}`);
          
          // Show success alert
          await Swal.fire({
            icon: 'success',
            title: 'Verified Successfully!',
            text: 'Participant has been verified and email has been sent.',
            showConfirmButton: true,
            timer: 2000
          });
          break;

        case 'reject':
          await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/reject/${participantId}`);
          
          await Swal.fire({
            icon: 'info',
            title: 'Rejected',
            text: 'Participant has been rejected.',
            showConfirmButton: true,
            timer: 2000
          });
          break;

        case 'sendEmail':
          // Show loading while sending email
          Swal.fire({
            title: 'Sending Email...',
            text: 'Please wait',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            }
          });

          await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/send-email/${participantId}`);
          
          // Show success message
          await Swal.fire({
            icon: 'success',
            title: 'Email Sent!',
            text: 'Email has been sent successfully.',
            showConfirmButton: true,
            timer: 2000
          });
          break;

        case 'markForReview':
          // Show loading
          Swal.fire({
            title: 'Marking for Review...',
            text: 'Please wait',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            }
          });

          await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/mark-review/${participantId}`);
          
          // Show success
          await Swal.fire({
            icon: 'info',
            title: 'Marked for Review',
            text: 'Participant has been marked for review.',
            showConfirmButton: true,
            timer: 2000
          });
          break;
      }

      // Refresh the participants list after any action
      await fetchParticipants();

    } catch (error) {
      console.error('Error performing action:', error);
      
      // Show error alert
      Swal.fire({
        icon: 'error',
        title: 'Operation Failed',
        text: error.response?.data?.message || 'Something went wrong!',
        showConfirmButton: true
      });
    }
  };

  const filteredParticipants = participants.filter(participant =>
    (participant?.teamMembers[0]?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant?.teamMembers[0]?.email?.toLowerCase().includes(searchTerm.toLowerCase())) ?? false
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
            <button
              onClick={() => navigate('/admin')}
              className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30"
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                localStorage.clear();
                navigate('/admin/login');
              }}
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
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setExpandedId(expandedId === participant._id ? null : participant._id)}
                >
                  <div>
                    <h3 className="font-semibold">{participant.teamMembers[0].name}</h3>
                    <p className="text-sm text-gray-400">{participant.teamMembers[0].email}</p>
                    <p className="text-sm text-gray-400">
                      Event: {participant.competition.charAt(0).toUpperCase() + participant.competition.slice(1)}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
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
                    </div>
                    <BsThreeDotsVertical />
                  </div>
                </div>

                {expandedId === participant._id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 pt-4 border-t border-purple-500/20"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">College Details</h4>
                        <p className="text-sm text-gray-400">Name: {participant.collegeName}</p>
                        <p className="text-sm text-gray-400">Address: {participant.collegeAddress}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Event Details</h4>
                        <p className="text-sm text-gray-400">Competition: {participant.competition}</p>
                        {participant.workshop && (
                          <p className="text-sm text-gray-400">Workshop: {participant.workshop}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Payment Details</h4>
                      <p className="text-sm text-gray-400">Transaction ID: {participant.transactionId}</p>
                      {participant.paymentScreenshot && (
                        <img
                          src={participant.paymentScreenshot}
                          alt="Payment Screenshot"
                          className="w-32 h-32 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition mt-2"
                          onClick={() => setSelectedImage(participant.paymentScreenshot)}
                        />
                      )}
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => handleAction(participant._id, 'verify')}
                        className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg hover:bg-green-500/30"
                      >
                        <span className="flex items-center gap-1">
                          <BsCheckCircle /> Verify
                        </span>
                      </button>
                      <button
                        onClick={() => handleAction(participant._id, 'reject')}
                        className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30"
                      >
                        <span className="flex items-center gap-1">
                          <BsXCircle /> Reject
                        </span>
                      </button>
                      <button
                        onClick={() => handleAction(participant._id, 'sendEmail')}
                        className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30"
                      >
                        <span className="flex items-center gap-1">
                          <BsEnvelope /> Send Email
                        </span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Image Preview Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative bg-gray-900 p-4 rounded-lg max-w-4xl max-h-[90vh]">
              <button
                className="absolute top-2 right-2 text-white bg-red-500 px-3 py-1 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParticipantManager;