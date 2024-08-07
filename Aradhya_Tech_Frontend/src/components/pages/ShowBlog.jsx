import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// List of predefined colors and their corresponding text colors
const colorPairs = [
    { bgColor: '#ef4566', textColor: '#ffffff' },
    { bgColor: '#f69a9a', textColor: '#000000' },
    { bgColor: '#f9cdae', textColor: '#000000' },
    { bgColor: '#c8c8c8', textColor: '#000000' },
    { bgColor: '#83ae9b', textColor: '#ffffff' },
];

// Function to get random color pair
const getRandomColorPair = () => {
    const index = Math.floor(Math.random() * colorPairs.length);
    return colorPairs[index];
};

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
        <div className="min-h-screen bg-[#fbf1ef]">
            <div className="bg-[#fbf1ef] py-16 text-center h-[350px] relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <nav className="text-gray-600 mb-4">
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
                                <h2 className="text-3xl font-thin md:text-4xl my-16 text-gray-800 text-center">
                                    {blog.slug}
                                </h2>
                            </div>
                        )}
                        <div className="prose lg:prose-xl mx-auto">
                            {(blog.content && blog.content.length > 0) && (
                                <div>
                                    {blog.content.map((item, index) => {
                                        const { bgColor, textColor } = getRandomColorPair();
                                        return (
                                            <div
                                                key={index}
                                                className="mb-6 rounded-2xl border-2 p-4"
                                                style={{ backgroundColor: bgColor, color: textColor }}
                                            >
                                                <h3 className="text-2xl my-4 text-justify font-mono" style={{ color: textColor }}>
                                                    {item.title}
                                                </h3>
                                                <p className="text-lg font-thin text-justify" style={{ color: textColor }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        );
                                    })}
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
