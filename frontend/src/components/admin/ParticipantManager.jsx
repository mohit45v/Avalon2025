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
import { emailTemplates } from '../../utils/emailTemplates';

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

          const participant = participants.find(p => p._id === participantId);
          const template = emailTemplates.registrationVerified(
            participant.teamMembers[0].name,
            participant.competition,
            participant
          );

          await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/verify/${participantId}`, {
            emailTemplate: template
          });
          
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
    <div className="min-h-screen bg-[#030014] text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
            Participant Management
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <select
              className="w-full sm:w-auto bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-sm"
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
              className="w-full sm:w-auto bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-sm"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="pending">Pending Review</option>
              <option value="verified">Verified</option>
            </select>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => navigate('/admin')}
                className="flex-1 sm:flex-none px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 text-sm"
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate('/admin/login');
                }}
                className="flex-1 sm:flex-none px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search participants..."
          className="w-full mb-6 px-4 py-2 bg-white/10 border border-purple-500/20 rounded-lg text-sm"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {loading ? (
          <div className="flex items-center justify-center py-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-purple-500/20 border-t-purple-500 rounded-full"
            />
          </div>
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
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 cursor-pointer"
                  onClick={() => setExpandedId(expandedId === participant._id ? null : participant._id)}
                >
                  <div className="w-full sm:w-auto">
                    <h3 className="font-semibold text-base">{participant.teamMembers[0].name}</h3>
                    <p className="text-sm text-gray-400">{participant.teamMembers[0].email}</p>
                    <p className="text-sm text-gray-400">
                      Event: {participant.competition.charAt(0).toUpperCase() + participant.competition.slice(1)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">College Details</h4>
                        <p className="text-sm text-gray-400">Name: {participant.collegeName}</p>
                        <p className="text-sm text-gray-400">Address: {participant.collegeAddress}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Event Details</h4>
                        <p className="text-sm text-gray-400">Competition: {participant.competition}</p>
                        {participant.workshop && (
                          <p className="text-sm text-gray-400">Workshop: {participant.workshop}</p>
                        )}
                      </div>
                    </div>

                    {/* Add Team Members Details */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Team Members</h4>
                      <div className="grid gap-3">
                        {participant.teamMembers.map((member, index) => (
                          <div key={index} className="bg-white/5 p-3 rounded-lg">
                            <p className="text-sm text-gray-400">
                              Member {index + 1}: {member.name}
                            </p>
                            <p className="text-sm text-gray-400">
                              Phone: {member.phone || 'N/A'}
                            </p>
                            <p className="text-sm text-gray-400">
                              WhatsApp: {member.whatsapp || 'N/A'}
                            </p>
                            <p className="text-sm text-gray-400">
                              Email: {member.email}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Payment Details</h4>
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

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleAction(participant._id, 'verify')}
                        className="flex-1 sm:flex-none bg-green-500/20 text-green-400 px-4 py-2 rounded-lg hover:bg-green-500/30 text-sm"
                      >
                        <span className="flex items-center justify-center gap-1">
                          <BsCheckCircle /> Verify
                        </span>
                      </button>
                      <button
                        onClick={() => handleAction(participant._id, 'reject')}
                        className="flex-1 sm:flex-none bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 text-sm"
                      >
                        <span className="flex items-center justify-center gap-1">
                          <BsXCircle /> Reject
                        </span>
                      </button>
                      <button
                        onClick={() => handleAction(participant._id, 'sendEmail')}
                        className="flex-1 sm:flex-none bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 text-sm"
                      >
                        <span className="flex items-center justify-center gap-1">
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

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative bg-gray-900 p-4 rounded-lg max-w-4xl max-h-[90vh] w-full">
              <button
                className="absolute top-2 right-2 text-white bg-red-500 px-3 py-1 rounded-full text-sm"
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