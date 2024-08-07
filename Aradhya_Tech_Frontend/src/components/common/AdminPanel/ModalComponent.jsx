import React, { useState, useEffect } from "react";
import axios from "axios";

const ModalComponent = ({ setActive, currentBlog, refreshBlogs }) => {
    const [title, setTitle] = useState(currentBlog.title || "");
    const [author, setAuthor] = useState(currentBlog.author || "");
    const [imageUrl, setImageUrl] = useState(currentBlog.img || "");
    const [slug, setSlug] = useState(currentBlog.slug || "");

    useEffect(() => {
        setTitle(currentBlog.title || "");
        setAuthor(currentBlog.author || "");
        setImageUrl(currentBlog.img || "");
        setSlug(currentBlog.slug || "");
    }, [currentBlog]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `http://localhost:8000/api/user/blogs/${currentBlog._id}`,
                {
                    title,
                    author,
                    img: imageUrl,
                    slug,
                }
            );
            setActive(false);
            refreshBlogs();
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    };

    return (
        <div>
            {/* Main modal */}
            <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
                    {/* Modal content */}
                    
                        {/* Modal header */}
                        <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg sm:rounded-3xl sm:p-10">
                            <div className="flex items-center justify-between p-4 md:p-0 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Update Blog
                                </h3>
                                <button
                                    type="button"
                                    onClick={() => setActive(false)}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                </button>
                            </div>
                            {/* Modal body */}
                            <form
                                onSubmit={handleSubmit}
                                className="p-4 md:p-5"
                            >
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="title"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={title}
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                            className="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type blog title"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="author"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Author
                                        </label>
                                        <input
                                            type="text"
                                            name="author"
                                            id="author"
                                            value={author}
                                            onChange={(e) =>
                                                setAuthor(e.target.value)
                                            }
                                            className="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type author name"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="imageUrl"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Image URL
                                        </label>
                                        <input
                                            type="text"
                                            name="imageUrl"
                                            id="imageUrl"
                                            value={imageUrl}
                                            onChange={(e) =>
                                                setImageUrl(e.target.value)
                                            }
                                            className="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type image URL"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="slug"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Slug
                                        </label>
                                        <textarea
                                            id="slug"
                                            rows="3"
                                            value={slug}
                                            onChange={(e) =>
                                                setSlug(e.target.value)
                                            }
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-b border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Write slug here"
                                        ></textarea>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="flex justify-center text-white items-center w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Update
                                </button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
