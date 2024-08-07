import React, { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import ServicesCard from "../common/Home/ServicesCard";
import WorkCard from "../common/Home/WorkCard";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const result = await axios.get("http://localhost:8000/api/user/blogs");
                setBlogs(result.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBlogs();
    }, []);

    const getId = (id) => {
        console.log("Here is the ID: ", id);
        navigate(`/show-blogs/${id}`);
    };

    return (
        <div>
            {/* section 1 */}
            <div className="pt-[8%] flex flex-col md:flex-row bg-[#fbf1ef]">
                <div className="w-full md:w-[45%] h-auto md:h-auto px-4 md:px-0">
                    <div className="mx-auto my-[10%] max-w-[500px]">
                        <p className="flex items-center text-xl font-semibold my-6 text-[#ff5b2e]">
                            <div className="mr-2">
                                <FaBook />
                            </div>
                            BLOGS & NEWS
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold">Our Blog</h2>
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
                            <div className="flex-1 w-[80%]">
                                <input
                                    type="text"
                                    className="w-full h-[45px] md:h-[65px] border-none text-black focus:border-none focus:outline-none rounded-l-lg px-4 text-xl font-semibold"
                                    placeholder="Your Email Please"
                                />
                            </div>
                            <div className="w-[20%]">
                                <button
                                    className="lg:w-full w-[100%] md:w-[80px] h-[45px] md:h-[65px] bg-[#ff5b2e] rounded-lg flex items-center justify-center text-white text-base md:text-xl"
                                    type="button"
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="h-[100%] w-[100%] px-[10%] py-[5%] bg-[#c6aaa0]">
                <div className="flex flex-wrap h-auto">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            onClick={() => getId(blog._id)}
                            className="w-[33.33%] h-auto my-3"
                        >
                            <WorkCard
                                img={blog.img}
                                desc={blog.date}
                                title={blog.title}
                                readmore={"Read more..."}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
