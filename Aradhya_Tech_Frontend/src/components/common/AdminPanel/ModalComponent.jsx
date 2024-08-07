import React, { useState, useEffect } from "react";
import axios from "axios";

const ModalComponent = ({ setActive, currentBlog, refreshBlogs }) => {
    const [formData, setFormData] = useState({
        title: currentBlog.title || "",
        author: currentBlog.author || "",
        img: currentBlog.img || "",
        slug: currentBlog.slug || "",
    });

    useEffect(() => {
        setFormData({
            title: currentBlog.title || "",
            author: currentBlog.author || "",
            img: currentBlog.img || "",
            slug: currentBlog.slug || "",
        });
    }, [currentBlog]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `http://localhost:8000/api/user/blogs/${currentBlog._id}`,
                formData
            );
            setActive(false);
            refreshBlogs();
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div className="min-h-screen w-full flex flex-col justify-center">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-[#ff5b2e] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold pb-5">
                                    Update Blog
                                </h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="relative mb-6">
                                            <input
                                                autoComplete="off"
                                                id="title"
                                                name="title"
                                                type="text"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                placeholder="Title"
                                                value={formData.title}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label
                                                htmlFor="title"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                            >
                                                Title
                                            </label>
                                        </div>
                                        <div className="relative mb-6">
                                            <input
                                                autoComplete="off"
                                                id="author"
                                                name="author"
                                                type="text"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                placeholder="Author"
                                                value={formData.author}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label
                                                htmlFor="author"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                            >
                                                Author
                                            </label>
                                        </div>
                                        <div className="relative mb-6">
                                            <textarea
                                                autoComplete="off"
                                                id="img"
                                                name="img"
                                                className="peer placeholder-transparent h-15 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                placeholder="Img Url"
                                                value={formData.img}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label
                                                htmlFor="img"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                            >
                                                Img Url
                                            </label>
                                        </div>
                                        <div className="relative mb-6">
                                            <input
                                                autoComplete="off"
                                                id="slug"
                                                name="slug"
                                                type="text"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                placeholder="Slug"
                                                value={formData.slug}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label
                                                htmlFor="slug"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                            >
                                                Slug
                                            </label>
                                        </div>
                                        <div className="relative mb-6"></div>
                                        <div className="relative mt-6">
                                            <button
                                                type="submit"
                                                className="w-[40%] item-center px-4 py-2 font-bold bg-red-300 rounded-md shadow-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
                                            >
                                                Update Blog
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setActive(false)}
                                                className="w-[30%] ml-4 px-4 py-2 font-bold bg-red-300 rounded-md shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
