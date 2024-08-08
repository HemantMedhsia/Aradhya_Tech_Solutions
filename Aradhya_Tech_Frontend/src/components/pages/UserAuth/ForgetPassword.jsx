import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS file

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/user/send-reset-password-email",
                { email }
            );
            setMessage(response.data.message);

            toast.success("Reset Link send successfully");

            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            console.error("Error details:", error);
            if (error.response) {
                toast.error(
                    error.response.data.message ||
                        "Error sending password reset email"
                );
            } else if (error.request) {
                // The request was made but no response was received
                console.error("Error request:", error.request);
                toast.error("No response from server");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error message:", error.message);
                toast.error("Error sending password reset email");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-semibold mb-4">Forget Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Send Reset Link
                    </button>
                </form>
                {message && <p className="mt-4 text-center">{message}</p>}
            </div>
            <ToastContainer />
        </div>
    );
};

export default ForgetPassword;
