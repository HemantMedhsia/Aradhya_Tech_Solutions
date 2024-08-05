// src/components/PasswordUpdateForm.jsx
import axios from "axios";
import React, { useState } from "react";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            setSuccess("");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8000/api/user/reset-password/:id/:token",
                { newPassword }
            );

            if (response.data.success) {
                setSuccess("Password update successfully");
                setError("");
                setNewPassword("");
                setConfirmPassword("");
            } else {
                setError(response.data.message || "Failed to update password");
                setSuccess("");
            }
        } catch (err) {
            setError("An error occurred while updating the password");
            setSuccess("");
            setNewPassword("");
            setConfirmPassword("");
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
        </div>
    );
};

export default ResetPassword;
