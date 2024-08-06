import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlog() {
            try {
                const response = await axios.post(`http://localhost:8000/api/user/single-blog/${id}`);
                setBlog(response.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchBlog();
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-100 ">
            <div className="bg-[#fbf1ef] py-16 text-center h-[350px] relative ">
                <div className="absolute inset-0 flex flex-col items-center justify-center ">
                    <nav className="text-gray-600 mb-4 ">
                        <a href="/" className="hover:underline">
                            All Blog Posts
                        </a>{" "}
                        &gt;{" "}
                        <span className="ml-2 font-semibold text-[#ff5b2e]">
                            seo
                        </span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800">
                        {loading ? "Loading..." : blog?.title}
                    </h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                {blog && (
                    <>
                        {blog.img && (
                            <div className="mb-8">
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                                />
                                <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-gray-800 text-center">
                                    {blog.slug}
                                </h2>
                            </div>
                        )}
                        <div className="prose lg:prose-xl mx-auto">
                            {blog.content && blog.content.length > 0 && (
                                <div>
                                    {blog.content.map((item, index) => (
                                        <div key={index} className="mb-6">
                                            <h3 className="text-2xl font-semibold text-gray-900">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg text-gray-700">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShowBlog;
