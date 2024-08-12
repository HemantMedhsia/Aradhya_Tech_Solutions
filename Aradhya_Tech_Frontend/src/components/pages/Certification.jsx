import axios from "axios";
import React, { useState } from "react";
import { MdOutlineVerified } from "react-icons/md";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";

const Certification = () => {
    // State definitions
    const [name, setName] = useState("");
    const [certificate, setCertificate] = useState("");
    const [serial, setSerial] = useState("");
    const [forC, setForC] = useState("");
    const [type, setType] = useState("");
    const [program, setProgram] = useState("");
    const [duration, setDuration] = useState("");
    const [dateOfProgram, setDateOfProgram] = useState("");
    const [dateIssue, setDateIssue] = useState("");
    const [error, setError] = useState({});
    const [verificationError, setVerificationError] = useState("");
    const [viewData, setViewData] = useState(false);

    // Handle form input changes
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "certificate") {
            setCertificate(value);
        }
    };

    // Close modal
    const closeViewDatafied = () => {
        setViewData(false);
    };

    // Validate form inputs
    const validate = () => {
        const newErrors = {};
        if (!name) {
            newErrors.name = "Name is required";
        }
        if (!certificate) {
            newErrors.certificate = "Certificate number is required";
        }
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }
        setError({});
        setVerificationError("");

        try {
            const response = await axios.post(
                `http://localhost:8000/api/user/get-certification-detail/${certificate}/${name}`
            );

            if (response.data.certification) {
                console.log("Certificate verified:", response.data);
                const {
                    SERIAL,
                    FOR,
                    TYPE,
                    PROGRAM,
                    DURATION,
                    DateOfProgram,
                    DateOfIssue,
                } = response.data.certification;

                toast.success("Certificate Verified");
                setSerial(SERIAL || "");
                setForC(FOR || "");
                setType(TYPE || "");
                setProgram(PROGRAM || "");
                setDuration(DURATION || "");
                setDateOfProgram(DateOfProgram || "");
                setDateIssue(DateOfIssue || "");
                setViewData(true);
            } else {
                setVerificationError(
                    "Certificate verification failed. Please check the details and try again."
                );
            }
        } catch (err) {
            if (err.response) {
                setVerificationError(
                    `${
                        err.response.data.message ||
                        "An error occurred while verifying the certificate."
                    }`
                );
                toast.error("Certification not found");
            } else if (err.request) {
                setVerificationError(
                    "Network error: Unable to reach the server. Please check your internet connection and try again."
                );
            } else {
                setVerificationError(
                    "An unexpected error occurred. Please try again later."
                );
            }
        }
    };

    return (
        <div className="pt-[8%] h-[100vh] w-[100%] bg-[#fbf1ef]">
            <div className="flex justify-center text-5xl text-[#ff5b2e]">
                <div className="font-semibold mx-2">
                    Certificate Verification
                </div>
                <div className="text-teal-500 flex items-center justify-center mt-[3px]">
                    <MdOutlineVerified />
                </div>
            </div>
            <div className="bg-white border-teal-400 border-4 rounded-xl max-w-md mx-auto mt-20">
                <form
                    className="shadow-lg rounded px-8 py-6"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleOnchange}
                            placeholder="Enter Your Name"
                        />
                        {error.name && (
                            <p className="text-red-500 text-xs mt-1">
                                {error.name}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="certificate"
                        >
                            Certificate (CERN Number)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="certificate"
                            type="text"
                            name="certificate" // Add this line
                            value={certificate} // Add this line to bind the state
                            onChange={handleOnchange} // Make sure this function is triggered on change
                            placeholder="Enter Certificate Number"
                        />

                        {error.certificate && (
                            <p className="text-red-500 text-xs mt-1">
                                {error.certificate}
                            </p>
                        )}
                    </div>
                    {verificationError && (
                        <p className="text-red-500 text-xs mb-4">
                            {verificationError}
                        </p>
                    )}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Verify
                        </button>
                    </div>
                </form>
            </div>

            {viewData && (
                <Modal
                    open={viewData}
                    onClose={closeViewDatafied}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 500,
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 2,
                            outline: "none",
                            border: "1px solid #ddd",
                        }}
                    >
                        <Typography
                            id="modal-title"
                            variant="h6"
                            component="h2"
                            sx={{ mb: 2, color: "#333" }}
                        >
                            Certificate Details
                        </Typography>
                        <Typography
                            id="modal-description"
                            sx={{ mb: 1, fontWeight: "bold" }}
                        >
                            Name: <span className="font-normal">{name}</span>
                        </Typography>
                        <Typography
                            id="modal-description"
                            sx={{ mb: 1, fontWeight: "bold" }}
                        >
                            Certificate No:{" "}
                            <span className="font-normal">{certificate}</span>
                        </Typography>
                        <Typography
                            id="modal-description"
                            sx={{ mb: 1, fontWeight: "bold" }}
                        >
                            Serial No:{" "}
                            <span className="font-normal">{serial}</span>
                        </Typography>
                        <Typography
                            id="modal-description"
                            sx={{ mb: 1, fontWeight: "bold" }}
                        >
                            For: <span className="font-normal">{forC}</span>
                        </Typography>
                        <Typography
                            id="modal-description"
                            sx={{ mb: 1, fontWeight: "bold" }}
                        >
                            Type: <span className="font-normal">{type}</span>
                        </Typography>
                        <Typography
                            id="modal-description"
                            sx={{ mb: 1, fontWeight: "bold" }}
                        >
                            Program:{" "}
                            <span className="font-normal">{program}</span>
                        </Typography>
                        <Typography
                            id="modal-description"
                            sx={{ mb: 1, fontWeight: "bold" }}
                        >
                            Duration:{" "}
                            <span className="font-normal">{duration}</span>
                        </Typography>
                        <Typography
                            id="modal-description"
                            sx={{ mb: 1, fontWeight: "bold" }}
                        >
                            Date of Program:{" "}
                            <span className="font-normal">{dateOfProgram}</span>
                        </Typography>
                        <Typography
                            id="modal-description"
                            sx={{ mb: 1, fontWeight: "bold" }}
                        >
                            Date of Issue:{" "}
                            <span className="font-normal">{dateIssue}</span>
                        </Typography>
                    </Box>
                </Modal>
            )}
            <ToastContainer />
        </div>
    );
};

export default Certification;
