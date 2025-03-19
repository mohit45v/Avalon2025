import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BsPlus, BsTrash, BsArrowLeft } from 'react-icons/bs';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import QR from "../../public/QR.jpg"

const Form = () => {
  const [step, setStep] = useState(1);
  const [teamMembers, setTeamMembers] = useState([
    { name: '', email: '', whatsapp: '' }
  ]);
  const [formData, setFormData] = useState({
    collegeName: '',
    collegeAddress: '',
    competition: '',
    transactionId: '',
    paymentScreenshot: null
  });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Update the competitions array
  const competitions = [
    { value: 'hackathon', label: 'Hackathon (REGISTRATIONS CLOSED)', maxTeam: 4, qrCode: 'https://res.cloudinary.com/dgf0khv5f/image/upload/v1741373364/800QR_f6jrs3.jpg', amount: 800, closed: true },
    { value: 'project', label: 'Robo Soccer', maxTeam: 5, qrCode: 'https://res.cloudinary.com/dgf0khv5f/image/upload/v1741373364/150QR_u1e9aj.jpg', amount: 150 },
    { value: 'robotics', label: 'Robo Race', maxTeam: 4, qrCode: 'https://res.cloudinary.com/dgf0khv5f/image/upload/v1741373527/300QR_pzro4z.jpg', amount: 300 }
  ];
  
  // Update the select element to disable hackathon option
  <select
    value={formData.competition}
    onChange={(e) => {
      const selected = competitions.find(c => c.value === e.target.value);
      if (selected?.closed) {
        Swal.fire({
          icon: 'info',
          title: 'Registrations Closed',
          text: 'Hackathon registrations are now closed.'
        });
        return;
      }
      setFormData({ ...formData, competition: e.target.value })
    }}
    className="bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2 text-white [&>option]:text-black"
  >
    <option value="" className="bg-[#030014]">Select Competition</option>
    {competitions.map(comp => (
      <option 
        key={comp.value} 
        value={comp.value} 
        className="bg-white"
        disabled={comp.closed}
      >
        {comp.label}
      </option>
    ))}
  </select>
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

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\d{0,10}$/;
    return phoneRegex.test(number);
  };

  const handleTeamMemberChange = (index, field, value) => {
    if (field === 'whatsapp') {
      if (validatePhoneNumber(value)) {
        const updatedMembers = teamMembers.map((member, i) => {
          if (i === index) {
            return { ...member, [field]: value };
          }
          return member;
        });
        setTeamMembers(updatedMembers);
      }
    } else {
      const updatedMembers = teamMembers.map((member, i) => {
        if (i === index) {
          return { ...member, [field]: value };
        }
        return member;
      });
      setTeamMembers(updatedMembers);
    }
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

  const validateStep = () => {
    if (step === 1) {
      const isTeamValid = teamMembers.every(member => 
        member.name && 
        member.email && 
        member.whatsapp && 
        member.whatsapp.length === 10
      );
      if (!isTeamValid) {
        Swal.fire({
          icon: 'error',
          title: 'Incomplete Details',
          text: 'Please fill all team member details. WhatsApp number must be 10 digits.'
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true);

      const formDataToSend = new FormData();
      formDataToSend.append('teamMembers', JSON.stringify(teamMembers));
      formDataToSend.append('collegeName', formData.collegeName);
      formDataToSend.append('collegeAddress', formData.collegeAddress);
      formDataToSend.append('competition', formData.competition);
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

  // Get the current competition's QR code
  const getCurrentQR = () => {
    const selectedComp = competitions.find(comp => comp.value === formData.competition);
    return selectedComp ? selectedComp.qrCode : null;
  };

  // Get the current competition's amount
  const getCurrentAmount = () => {
    const selectedComp = competitions.find(comp => comp.value === formData.competition);
    return selectedComp ? selectedComp.amount : null;
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 group"
        >
          <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
          Event Registration
        </h1>

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
                        placeholder="WhatsApp Number (10 digits)"
                        value={member.whatsapp}
                        onChange={(e) => handleTeamMemberChange(index, 'whatsapp', e.target.value)}
                        pattern="[0-9]{10}"
                        maxLength="10"
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
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
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                {formData.competition ? (
                  <>
                    <img
                      src={getCurrentQR()}
                      alt="Payment QR"
                      className="mx-auto w-64 h-64"
                    />
                    <p className="mt-4 text-gray-400">
                      Amount to pay: ₹{getCurrentAmount()}
                    </p>
                    <p className="mt-2 text-gray-400">
                      Scan QR code to pay or use UPI ID: sarthakpawar275@oksbi
                    </p>
                  </>
                ) : (
                  <p className="text-red-400">Please select a competition first</p>
                )}
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
