import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BsPlus, BsTrash } from 'react-icons/bs';
import { useLocation, useSearchParams } from 'react-router-dom';

const Form = () => {
  const [step, setStep] = useState(1);
  const [teamMembers, setTeamMembers] = useState([
    { name: '', email: '', whatsapp: '' }
  ]);
  const [formData, setFormData] = useState({
    collegeName: '',
    collegeAddress: '',
    competition: '',
    workshop: '',
    transactionId: '',
    paymentScreenshot: null
  });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const location = useLocation();
  const [workshopData, setWorkshopData] = useState(null);
  const [searchParams] = useSearchParams();
  const workshopType = searchParams.get('workshop');
  const workshopFee = searchParams.get('fee');

  const competitions = [
    { value: 'hackathon', label: 'Hackathon', maxTeam: 4 },
    { value: 'project', label: 'Project Competition', maxTeam: 3 },
    { value: 'robotics', label: 'Robotics Competition', maxTeam: 4 }
  ];

  const workshops = [
    { value: 'ai_ml', label: 'AI/ML Workshop' },
    { value: 'web3', label: 'Web3 Development' },
    { value: 'robotics', label: 'Robotics Workshop' }
  ];

  const addTeamMember = () => {
    const selectedComp = competitions.find(c => c.value === formData.competition);
    if (!formData.competition) {
      Swal.fire({
        icon: 'warning',
        title: 'Select Competition',
        text: 'Please select a competition first'
      });
      return;
    }
    
    if (teamMembers.length < selectedComp.maxTeam) {
      setTeamMembers([...teamMembers, { name: '', email: '', whatsapp: '' }]);
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Team Size Limit',
        text: `Maximum ${selectedComp.maxTeam} members allowed for ${selectedComp.label}`
      });
    }
  };

  const removeTeamMember = (index) => {
    if (teamMembers.length > 1) {
      setTeamMembers(teamMembers.filter((_, i) => i !== index));
    }
  };

  const handleTeamMemberChange = (index, field, value) => {
    const updatedMembers = teamMembers.map((member, i) => {
      if (i === index) {
        return { ...member, [field]: value };
      }
      return member;
    });
    setTeamMembers(updatedMembers);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, paymentScreenshot: file });
      
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  // Cleanup preview URL when component unmounts
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  useEffect(() => {
    // Get workshop data from localStorage
    const savedWorkshop = localStorage.getItem('selectedWorkshop');
    if (savedWorkshop) {
      setWorkshopData(JSON.parse(savedWorkshop));
      // Update form data with workshop selection
      setFormData(prev => ({
        ...prev,
        workshop: JSON.parse(savedWorkshop).name.toLowerCase()
      }));
    }
  }, []);

  useEffect(() => {
    if (workshopType) {
      setFormData(prev => ({
        ...prev,
        workshop: workshopType
      }));
    }
  }, [workshopType]);

  const validateStep = () => {
    if (step === 1) {
      const isTeamValid = teamMembers.every(member => 
        member.name && member.email && member.whatsapp
      );
      if (!isTeamValid) {
        Swal.fire({
          icon: 'error',
          title: 'Incomplete Details',
          text: 'Please fill all team member details'
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true); // Start loading

      const formDataToSend = new FormData();
      formDataToSend.append('teamMembers', JSON.stringify(teamMembers));
      formDataToSend.append('collegeName', formData.collegeName);
      formDataToSend.append('collegeAddress', formData.collegeAddress);
      formDataToSend.append('competition', formData.competition);
      formDataToSend.append('workshop', formData.workshop);
      formDataToSend.append('transactionId', formData.transactionId);
      formDataToSend.append('paymentScreenshot', formData.paymentScreenshot);

      // Show loading state with Swal
      Swal.fire({
        title: 'Submitting Registration',
        html: 'Please wait...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/register`, formDataToSend);
      
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'You will receive a confirmation email shortly.'
      });

      // Reset form after successful submission
      setTeamMembers([{ name: '', email: '', whatsapp: '' }]);
      setFormData({
        collegeName: '',
        collegeAddress: '',
        competition: '',
        workshop: '',
        transactionId: '',
        paymentScreenshot: null
      });
      setImagePreview(null);
      setStep(1);

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.response?.data?.message || 'Please try again later.'
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
          {workshopData ? `${workshopData.name} Workshop Registration` : 'Event Registration'}
        </h1>

        {workshopData && (
          <div className="mb-8 p-4 bg-white/5 rounded-lg">
            <p className="text-xl font-bold text-purple-400">Entry Fee: {workshopData.fee}</p>
            <p className="text-gray-300">Difficulty: {workshopData.difficulty}</p>
            <div className="mt-2">
              <p className="font-semibold text-gray-300">Includes:</p>
              <ul className="list-disc list-inside text-gray-400">
                {workshopData.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6"
        >
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">
                        {index === 0 ? 'Team Leader' : `Member ${index + 1}`}
                      </h3>
                      {index !== 0 && (
                        <button
                          onClick={() => removeTeamMember(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <BsTrash size={20} />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="Name"
                        value={member.name}
                        onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                        className="bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={member.email}
                        onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                        className="bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2"
                      />
                      <input
                        type="tel"
                        placeholder="WhatsApp Number"
                        value={member.whatsapp}
                        onChange={(e) => handleTeamMemberChange(index, 'whatsapp', e.target.value)}
                        className="bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={addTeamMember}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
              >
                <BsPlus size={24} /> Add Team Member
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="College Name"
                  value={formData.collegeName}
                  onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                  className="bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="College Address"
                  value={formData.collegeAddress}
                  onChange={(e) => setFormData({ ...formData, collegeAddress: e.target.value })}
                  className="bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2"
                />
                <select
                  value={formData.competition}
                  onChange={(e) => setFormData({ ...formData, competition: e.target.value })}
                  className="bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2 text-white [&>option]:text-black"
                >
                  <option value="" className="bg-[#030014]">Select Competition</option>
                  {competitions.map(comp => (
                    <option key={comp.value} value={comp.value} className="bg-white">{comp.label}</option>
                  ))}
                </select>
                <select
                  value={formData.workshop}
                  onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                  className="bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2 text-white [&>option]:text-black"
                >
                  <option value="" className="bg-[#030014]">Select Workshop (Optional)</option>
                  {workshops.map(workshop => (
                    <option key={workshop.value} value={workshop.value} className="bg-white">{workshop.label}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <img
                  src="/path-to-your-qr-code.png"
                  alt="Payment QR"
                  className="mx-auto w-64 h-64"
                />
                <p className="mt-4 text-gray-400">
                  Scan QR code to pay or use UPI ID: your-upi@bank
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Transaction ID"
                  value={formData.transactionId}
                  onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                  className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2"
                />
                <div className="space-y-2">
                  <label className="block text-sm text-gray-400">Payment Screenshot</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2"
                  />
                  {imagePreview && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-400 mb-2">Preview:</p>
                      <img
                        src={imagePreview}
                        alt="Payment Screenshot Preview"
                        className="max-w-md mx-auto rounded-lg border border-purple-500/20"
                        style={{ maxHeight: '200px', objectFit: 'contain' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step === 2 && (
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
                disabled={loading}
              >
                Back
              </button>
            )}
            <button
              onClick={() => {
                if (step === 1 && validateStep()) {
                  setStep(2);
                } else if (step === 2) {
                  handleSubmit();
                }
              }}
              disabled={loading}
              className={`px-6 py-2 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg 
                ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
              {loading ? 'Submitting...' : step === 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Form;