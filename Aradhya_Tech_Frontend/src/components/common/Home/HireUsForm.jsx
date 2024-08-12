import React, { useState } from "react";

const HireUsForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [technologyTopic, setTechnologyTopic] = useState("");
    const [institute, setInstitute] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", {
            name,
            mobileNumber,
            email,
            technologyTopic,
            institute,
            address,
        });
        
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="relative p-2">
            <button
                onClick={toggleForm}
                className="mb-2 px-3 py-1 bg-blue-500 text-white rounded"
            >
                {showForm ? "Hide Form" : ""}
            </button>

            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
                    <div className="relative bg-white p-4 pt-6 pb-8 border border-gray-300 shadow-md rounded max-w-sm mx-auto w-full z-10 overflow-y-auto max-h-full my-4">
                        <button
                            onClick={toggleForm}
                            className="absolute top-2 right-2 text-red-500 text-xl"
                        >
                            ×
                        </button>
                        <h2 className="text-md font-bold mb-4">Hire Us</h2>
                        <form onSubmit={handleSubmit} className="space-y-3 ">
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="mobileNumber"
                                >
                                    Mobile Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="mobileNumber"
                                    type="tel"
                                    value={mobileNumber}
                                    onChange={(event) =>
                                        setMobileNumber(event.target.value)
                                    }
                                    placeholder="Enter your mobile number"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="example@gmail.com"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="technologyTopic"
                                >
                                    Technology / Topic
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="technologyTopic"
                                    type="text"
                                    value={technologyTopic}
                                    onChange={(event) =>
                                        setTechnologyTopic(event.target.value)
                                    }
                                    placeholder="Enter technology or topic"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="institute"
                                >
                                    Institute/College/University
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="institute"
                                    type="text"
                                    value={institute}
                                    onChange={(event) =>
                                        setInstitute(event.target.value)
                                    }
                                    placeholder="Enter institute/college/university"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="address"
                                >
                                    Address
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="address"
                                    value={address}
                                    onChange={(event) =>
                                        setAddress(event.target.value)
                                    }
                                    placeholder="Enter your address"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 px-3 py-1 bg-green-500 text-white rounded"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HireUsForm;
