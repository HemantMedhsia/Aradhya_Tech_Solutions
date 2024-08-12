import React from "react";
import { MdOutlineVerified } from "react-icons/md";

const Certification = () => {
    return (
        <div className="pt-[8%] h-[100vh] w-[100%] bg-[#fbf1ef]">
            <div className=" flex justify-center text-5xl text-teal-500">
                <div className="font-semibold mx-2">
                    Certificate verification{" "}
                </div>
                <div className="flex items-center justify-center mt-[3px]">
                    <MdOutlineVerified />
                </div>
            </div>
            <div className=" bg-white border-teal-400 border-4 rounded-xl max-w-md mx-auto mt-20">
                <form className=" shadow-lg rounded px-8 py-6">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="otp"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="otp"
                            type="text"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="otp"
                        >
                            Certificate (CERN Number)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="otp"
                            type="text"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Verify
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Certification;
