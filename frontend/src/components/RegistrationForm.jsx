import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        paymentScreenshot: null,
        mobileNo: "",
    });

    const [showUPIQr, setShowUPIQr] = useState(false);
    const [showNEFTDetails, setShowNEFTDetails] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "paymentScreenshot" && files.length > 0) {
            setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handlePaymentMethodChange = (method) => {
        setFormData({ ...formData, paymentMethod: method });
        setShowUPIQr(method === "upi");
        setShowNEFTDetails(method === "neft");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.mobileNo || !formData.paymentScreenshot) {
            Swal.fire({
                icon: "error",
                title: "Missing Fields",
                text: "All fields are required!",
            });
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("mobileNo", formData.mobileNo);
        formDataToSend.append("paymentScreenshot", formData.paymentScreenshot);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/api/v1/user/register`,
                formDataToSend,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    withCredentials: true,
                }
            );

            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "You have been registered successfully! We will reach ",
            });

            setFormData({
                name: "",
                email: "",
                paymentScreenshot: null,
                mobileNo: "",
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: error.response ? error.response.data.message : "Something went wrong!",
            });
        }
    };

    return (
        <div className="flex items-center justify-center p-4">
            <div className="p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Registration Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300">Full Name:</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={formData.name}
                            required
                            className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300">Email ID:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300">Phone Number (10 digits):</label>
                        <input
                            type="tel"
                            name="mobileNo"
                            value={formData.mobileNo}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                            required
                            className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300">Choose Payment Method:</label>
                        <div className="flex gap-4 mt-2">
                            <button
                                type="button"
                                className={`px-4 py-2 rounded-lg transition-transform transform hover:scale-105 text-white ${
                                    formData.paymentMethod === "upi" ? "bg-indigo-500" : "bg-gray-600"
                                }`}
                                onClick={() => handlePaymentMethodChange("upi")}
                            >
                                UPI
                            </button>
                            <button
                                type="button"
                                className={`px-4 py-2 rounded-lg transition-transform transform hover:scale-105 text-white ${
                                    formData.paymentMethod === "neft" ? "bg-indigo-500" : "bg-gray-600"
                                }`}
                                onClick={() => handlePaymentMethodChange("neft")}
                            >
                                NEFT
                            </button>
                        </div>
                    </div>
                    {showUPIQr && (
                        <div className="text-center mt-4">
                            <img
                                src="https://static.wixstatic.com/media/a4d8d0_cf7de7ad7a704c419c07f8a21b9751b9~mv2.jpeg/v1/fill/w_560,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/RotiRam%20GPay%20QR.jpeg"
                                alt="UPI QR Code"
                                className="mx-auto w-32 h-32 rounded-lg shadow-lg"
                            />
                        </div>
                    )}
                    {showNEFTDetails && (
                        <div className="text-gray-300 mt-4">
                            <p>Account Name: John Doe</p>
                            <p>Account Number: 1234567890</p>
                            <p>IFSC Code: ABCD0123456</p>
                            <p>Bank Name: Example Bank</p>
                        </div>
                    )}
                    <div>
                        <label className="block text-gray-300">Upload Payment Screenshot:</label>
                        <input
                            type="file"
                            name="paymentScreenshot"
                            onChange={handleChange}
                            required
                            className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 focus:ring-2 focus:ring-indigo-400"
                    >
                        Register Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
