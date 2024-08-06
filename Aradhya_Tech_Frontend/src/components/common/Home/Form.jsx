import React, { useState } from "react";
import axios from "axios";
import Button from "../Button";

const Form = () => {
    const [formData, setFormData] = useState({
        subject: "",
        fullName: "",
        email: "",
        contactNumber: "",
        service: "Web Design",
        message: "",
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.fullName) newErrors.fullName = "Full Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.message) newErrors.message = "Message is required";
        if (!formData.agree)
            newErrors.agree = "You must agree to the terms and conditions";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});

        try {
            const response = await axios.post(
                "http://localhost:8000/api/user/contact",
                formData
            );
            if (response.status === 200) {
                setSubmitted(true);
                alert("Email sent successfully!");
                setFormData({
                    subject: "",
                    fullName: "",
                    email: "",
                    contactNumber: "",
                    service: "Web Design",
                    message: "",
                    agree: false,
                }); 
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email.");
        }
    };

    return (
        <div className="w-[100%] rounded-2xl bg-[#f7f7f7] h-auto px-8 py-6">
            <form onSubmit={handleSubmit}>
                <div className="w-full text-2xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
                    <h2 className="text-[#ff5b2e]">
                        Please fill in the form below.
                    </h2>
                </div>
                <div className="w-full flex flex-col">
                    <div className="mb-4">
                        <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="lg:w-[50%] h-12 rounded-lg w-full lg:px-2"
                            required
                        />
                        {errors.subject && (
                            <p className="text-red-500">{errors.subject}</p>
                        )}
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 mb-4">
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full lg:w-1/2 h-12 rounded-lg px-2 mb-2 lg:mb-0"
                            required
                        />
                        {errors.fullName && (
                            <p className="text-red-500">{errors.fullName}</p>
                        )}
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full lg:w-1/2 h-12 rounded-lg px-2"
                            type="email"
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email}</p>
                        )}
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 mb-4">
                        <input
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            placeholder="Contact Number"
                            className="w-full lg:w-1/2 h-12 rounded-lg px-2"
                        />
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full lg:w-1/2 h-12 rounded-lg px-2"
                        >
                            <option value="Web Design">Web Design</option>
                            <option value="Graphic Design">
                                Graphic Design
                            </option>
                            <option value="App Development">
                                App Development
                            </option>
                            <option value="Digital Marketing">
                                Digital Marketing
                            </option>
                            <option value="Business Development">
                                Business Development
                            </option>
                            <option value="Others">Others...</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="w-full h-24 rounded-lg px-2"
                            required
                        />
                        {errors.message && (
                            <p className="text-red-500">{errors.message}</p>
                        )}
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            name="agree"
                            className="h-4 w-4 mr-2"
                            type="checkbox"
                            checked={formData.agree}
                            onChange={handleChange}
                            required
                        />
                        <p className="lg:text-lg sm:text-sm text-[#52525d]">
                            I agree to the Terms & Conditions of
                            Aradhyatechnologies.
                        </p>
                    </div>
                    {errors.agree && (
                        <p className="text-red-500">{errors.agree}</p>
                    )}
                </div>
                <div className="flex flex-col items-center">
                    <Button
                        type="submit"
                        name={"Send Your Enquiry"}
                        width={"100%"}
                        height={"60px"}
                    />
                    <p className="mt-2 text-sm text-center text-[#52525D]">
                        We hate spam, and we respect your privacy.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Form;
