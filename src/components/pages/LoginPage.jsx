import React, { useState } from "react";

const LoginPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div
            className={`flex mt-[8%] font-poppins items-center justify-center ${
                isDarkMode ? "bg-gray-900" : "bg-white"
            } min-w-screen min-h-screen`}
        >
            <div className="grid gap-8">
                <div
                    id="back-div"
                    className={`bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4`}
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
                            Sign Up
                        </h1>
                        <form action="#" method="post" className="space-y-4">
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
                                            ? "bg-indigo-700 text-gray-300 border-gray-700"
                                            : "border-gray-300"
                                    } p-3 shadow-md placeholder:text-base rounded-lg w-full focus:scale-105 ease-in-out duration-300`}
                                    type="email"
                                    placeholder="Email"
                                    required
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
                                            ? "bg-indigo-700 text-gray-300 border-gray-700"
                                            : "border-gray-300"
                                    } p-3 mb-2 shadow-md placeholder:text-base rounded-lg w-full focus:scale-105 ease-in-out duration-300`}
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <button
                                className={`bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out`}
                                type="submit"
                            >
                                Log In
                            </button>
                        </form>
                        <div className="flex flex-col mt-4 items-center justify-center text-sm">
                            <h3>
                                {/* <span
                                    className={`cursor-default ${
                                        isDarkMode
                                            ? "text-gray-300"
                                            : "text-gray-800"
                                    }`}
                                >
                                    Have an account?
                                </span> */}
                                <a
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    href="#"
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
                className="absolute top-[20%] right-4 p-2 bg-blue-500 text-white rounded-full"
            >
                Toggle Dark Mode
            </button>
        </div>
    );
};

export default LoginPage;
