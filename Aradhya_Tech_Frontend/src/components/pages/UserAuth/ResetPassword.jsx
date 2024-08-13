import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Assuming you're using react-router
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const { id, token } = useParams(); // Get id and token from route params
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            setSuccess("");
            return;
        }

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/user/reset-password/${id}/${token}`,
                {
                    password: newPassword,
                    password_confirmation: confirmPassword,
                }
            );

            toast.success(response.data.message);
            toast.success("Redirecting to Login Page");
            console.log(response.data.message);

            setTimeout(() => {
                navigate("/login");
            }, 2000);

            if (response.data.success) {
                // setSuccess("Password updated successfully");
                setError("");
                setNewPassword("");
                setConfirmPassword("");
            } else {
                setError(response.data.message || "Failed to update password");
                toast.error(response.data.message || "Failed to update password");
                setSuccess("");
            }
        } catch (err) {
            console.error("Error during password reset", err); // Log the error for debugging
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Response data:", err.response.data);
                console.error("Response status:", err.response.status);
                console.error("Response headers:", err.response.headers);

                setError(
                    err.response.data.message ||
                        "An error occurred while updating the password"
                );

                toast.error(error);
            } else if (err.request) {
                // The request was made but no response was received
                console.error("Request data:", err.request);
                setError("No response received from the server");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error message:", err.message);
                setError("An error occurred while updating the password");
                toast.error("An error occurred while updating the password")
            }
            setSuccess("");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-16">
            <h2 className="text-2xl font-semibold text-center mb-4">
                Update Password
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="new-password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        New Password
                    </label>
                    <input
                        type="password"
                        id="new-password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="confirm-password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                {error && <div className="text-red-600">{error}</div>}
                {success && <div className="text-green-600">{success}</div>}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Update Password
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ResetPassword;
