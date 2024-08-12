import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCertification = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        NAME: "",
        CERN: "",
        SERIAL: "",
        FOR: "",
        TYPE: "",
        PROGRAM: "",
        DURATION: "",
        VERIFY: true,
        DateOfProgram: "",
        DateOfIssue: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:8000/api/user/add-certification",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            if (response.ok) {
                alert("Certificate added successfully");
                setFormData({
                    NAME: "",
                    CERN: "",
                    SERIAL: "",
                    FOR: "",
                    TYPE: "",
                    PROGRAM: "",
                    DURATION: "",
                    VERIFY: true,
                    DateOfProgram: "",
                    DateOfIssue: "",
                });
            } else {
                alert("Failed to add certificate");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex justify-center items-centern w-[100%] min-h-screen bg-[#fbf1ef]">
            <div className="w-[70%] flex justify-center items-center">
                <div className="w-full max-w-xl p-8 bg-white border-4 border-teal-400 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                        Add Certificate
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="NAME"
                                    value={formData.NAME}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    CERN
                                </label>
                                <input
                                    type="text"
                                    name="CERN"
                                    value={formData.CERN}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Serial
                                </label>
                                <input
                                    type="text"
                                    name="SERIAL"
                                    value={formData.SERIAL}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    For
                                </label>
                                <input
                                    type="text"
                                    name="FOR"
                                    value={formData.FOR}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Type
                                </label>
                                <input
                                    type="text"
                                    name="TYPE"
                                    value={formData.TYPE}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Program
                                </label>
                                <input
                                    type="text"
                                    name="PROGRAM"
                                    value={formData.PROGRAM}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Duration
                                </label>
                                <input
                                    type="text"
                                    name="DURATION"
                                    value={formData.DURATION}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Date of Program
                                </label>
                                <input
                                    type="text"
                                    name="DateOfProgram"
                                    value={formData.DateOfProgram}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Date of Issue
                                </label>
                                <input
                                    type="text"
                                    name="DateOfIssue"
                                    value={formData.DateOfIssue}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center mt-6 md:mt-0">
                                <input
                                    type="checkbox"
                                    name="VERIFY"
                                    checked={formData.VERIFY}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            VERIFY: e.target.checked,
                                        })
                                    }
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label className="ml-2 block text-sm font-medium text-gray-700">
                                    Verify
                                </label>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                type="submit"
                                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Add Certificate
                            </button>
                        </div>
                    </form>
                    <button
                        type="submit"
                        onClick={() => navigate("/admin")}
                        className="bg-teal-500 mt-2 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Back
                    </button>
                </div>
            </div>
            {/* <div className="w-[30%] flex items-center">
                <button
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Upload Excel
                </button>
            </div> */}
        </div>
    );
};

export default AddCertification;
