import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import axios from "axios"; // Import axios or any other HTTP client of your choice
import { useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file

const LoginPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tc, setTc] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(""); // Clear any previous errors
        setSuccess(""); // Clear any previous success messages

        try {
            const response = await axios.post(
                "http://localhost:8000/api/user/login",
                { email, password },
                { tc: true }
            );
            
            toast.success("Login Successfully");
            // Handle success, e.g., redirect or save token
            console.log(response.data.token); // Assuming the API returns a token

            // Delay navigation to allow the toast to be visible for a moment
            setTimeout(() => {
                navigate("/admin");
            }, 2000); // Adjust the delay as needed
        } catch (err) {     
            console.error("Error details:", err); // Log the error for debugging
                toast.error("An error occurred.");
            
        }
    };

    const handleForgetPasswordClick = () => {
        navigate('/forgetpassword');
    };

    return (
        <div
            className={`flex font-poppins items-center justify-center ${
                isDarkMode ? "bg-gray-900" : "bg-white"
            } min-w-screen min-h-screen`}
        >
            <div className="grid gap-8">
                <div
                    id="back-div"
                    className={`bg-gradient-to-r from-pink-300 to-[#ff5b2e] rounded-[26px] m-4`}
                >
                    <div
                        className={`border-[20px] border-transparent rounded-[20px] ${
                            isDarkMode
                                ? "bg-gray-900 border-gray-700"
                                : "bg-white border-gray-300"
                        } shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2`}
                    >
                        <h1
                            className={`pt-8 pb-6 font-bold text-5xl ${
                                isDarkMode ? "text-white" : "text-gray-800"
                            } text-center cursor-default`}
                        >
                            Log In
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className={`mb-2 ${
                                        isDarkMode
                                            ? "text-gray-400"
                                            : "text-gray-700"
                                    } text-lg`}
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className={`border ${
                                        isDarkMode
                                            ? "bg-pink-300 text-gray-300 "
                                            : "border-gray-300"
                                    } p-3 shadow-md placeholder:text-base rounded-lg w-full focus:scale-105 ease-in-out duration-300`}
                                    type="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className={`mb-2 ${
                                        isDarkMode
                                            ? "text-gray-400"
                                            : "text-gray-700"
                                    } text-lg`}
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    className={`border ${
                                        isDarkMode
                                            ? "bg-pink-300 text-gray-300 "
                                            : "border-gray-300"
                                    } p-3 mb-2 shadow-md placeholder:text-base rounded-lg w-full focus:scale-105 ease-in-out duration-300`}
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            {error && (
                                <div className="text-red-500 text-sm mb-2">
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="text-green-500 text-sm mb-2">
                                    {success}
                                </div>
                            )}
                            <button
                                className={`bg-gradient-to-r from-pink-300 to-[#ff5b2e] shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-pink-300 hover:to-[#ff5b2e] transition duration-300 ease-in-out`}
                                type="submit"
                            >
                                Log In
                            </button>
                        </form>
                        <div className="flex flex-col mt-4 items-center justify-center text-sm">
                            <h3>
                                <a
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    onClick={handleForgetPasswordClick}
                                >
                                    <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                        Forget Password
                                    </span>
                                </a>
                            </h3>
                        </div>

                        <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                            <p className="cursor-default">
                                By signing in, you agree to our
                                <a
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    href="#"
                                >
                                    <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                        Terms
                                    </span>
                                </a>
                                and
                                <a
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    href="#"
                                >
                                    <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                        Privacy Policy
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={toggleDarkMode}
                className="absolute top-4 left-4 p-2 text-6xl text-white rounded-full"
            >
                {isDarkMode ? (
                    <div className="text-white">
                        <MdLightMode />
                    </div>
                ) : (
                    <div className="text-gray-900">
                        <MdDarkMode />
                    </div>
                )}
            </button>
            <ToastContainer />
        </div>
    );
};

export default LoginPage;
