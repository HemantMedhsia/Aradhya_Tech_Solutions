import React from "react";
import { FaBook } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
    return (
        <div>
            {/* section 1 */}
            <div className="pt-[8%] flex flex-col md:flex-row bg-[#fbf1ef]">
                <div className="w-full md:w-[45%] h-auto md:h-[50vh] px-4 md:px-0">
                    <div className="mx-auto my-[10%] max-w-[500px]">
                        <p className="flex items-center text-xl font-semibold my-6 text-[#ff5b2e]">
                            <div className="mr-2">
                                <FaBook />
                            </div>
                            BLOGS & NEWS
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Our Blog
                        </h2>
                        <p className="text-base md:text-lg my-6">
                            What would you love to learn how to do?
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-[50%] px-4 md:px-0">
                    <div className="w-full max-w-[500px] mx-auto my-[10%]">
                        <h2 className="text-xl md:text-2xl tracking-wide font-bold my-4">
                            Subscribe to get the latest insights in your inbox.
                        </h2>
                        <div className="flex bg-white rounded-lg overflow-hidden">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    className="w-full h-[45px] md:h-[65px] border-none focus:border-none focus:outline-none rounded-l-lg px-4 text-xl font-semibold"
                                    placeholder="Your Email Please"
                                />
                            </div>
                            <div>
                                <button
                                    className="w-full md:w-[80px] h-[45px] md:h-[65px] bg-[#ff5b2e] rounded-lg flex items-center justify-center text-white text-base md:text-xl"
                                    type="button"
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
