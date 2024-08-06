import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
    const now = new Date();

    // Get the current date and time
    const date = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-based, so we add 1
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the date and time as desired
    const formattedDate = `${date}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const [Cdate, setDate] = useState();
    const [Ctime, setCtime] = useState();

    useEffect(() => {
        setDate(formattedDate);
        setCtime(formattedTime);
    }, []);

    return (
        <div className="bg-orange-100 min-h-screen">
            <div className="flex w-full pt-24 px-10 pb-4">
                <nav className="w-2/12 mr-6">
                    <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
                        <a
                            href="#"
                            className="flex items-center text-gray-600 hover:text-black my-4 w-full"
                        >
                            <span className="material-icons-outlined mr-2">
                                dashboard
                            </span>
                            Users
                            <span className="material-icons-outlined ml-auto">
                                keyboard_arrow_right
                            </span>
                        </a>
                        <Link to={"/all-blogs-admin"}>
                            <a className="inline-block text-gray-600 hover:text-black my-4 w-full">
                                <span className="material-icons-outlined float-left pr-2">
                                    tune
                                </span>
                                All Blogs
                                <span className="material-icons-outlined float-right">
                                    keyboard_arrow_right
                                </span>
                            </a>
                        </Link>
                        <a
                            onClick={activepage}
                            className="flex items-center cursor-pointer text-gray-600 hover:text-black my-4 w-full"
                        >
                            <span className="material-icons-outlined  mr-2">
                                tune
                            </span>
                            Add Blog
                            <span className="material-icons-outlined ml-auto">
                                keyboard_arrow_right
                            </span>
                        </a>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
                        <a
                            href="#"
                            className="flex items-center text-gray-600 hover:text-black my-4 w-full"
                        >
                            <span className="material-icons-outlined mr-2">
                                settings
                            </span>
                            Settings
                            <span className="material-icons-outlined ml-auto">
                                keyboard_arrow_right
                            </span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center text-gray-600 hover:text-black my-4 w-full"
                        >
                            <span className="material-icons-outlined mr-2">
                                power_settings_new
                            </span>
                            Log out
                            <span className="material-icons-outlined ml-auto">
                                keyboard_arrow_right
                            </span>
                        </a>
                    </div>
                </nav>

                {active ? (
                    <main className="flex-grow">
                        {/* <div className="bg-red-200 border h-auto border-red-300 rounded-xl p-6 flex flex-col items-center">
                            <p className="text-5xl text-indigo-900 mb-6">
                                Welcome to <br />
                                <strong>Aradhya Technologies</strong>
                            </p>
                            <div className="flex space-x-4">
                                <span className="bg-red-300 text-xl text-white inline-block rounded-full px-8 py-2">
                                    <strong>{Cdate}</strong>
                                </span>
                                <span className="bg-red-300 text-xl text-white inline-block rounded-full px-8 py-2">
                                    <strong>{Ctime}</strong>
                                </span>
                            </div>
                        </div> */}

                        <div className="flex items-center justify-center  ">
                            <form
                                onSubmit={handleSubmit}
                                className="w-full max-w-2xl  p-16 shadow-2xl rounded-lg"
                            >
                                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                                    Add a New Blog
                                </h2>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none    sm:text-sm"
                                        placeholder="Enter blog title"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        id="author"
                                        name="author"
                                        value={formData.author}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                                        placeholder="Enter author's name"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        id="img"
                                        name="img"
                                        value={formData.img}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                                        placeholder="Enter image URL"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        id="slug"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                                        placeholder="Enter a unique slug"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-[25%] item-center px-4 py-2 bg-red-300 text-black font-semibold rounded-md shadow-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
                                >
                                    Add Blog
                                </button>
                            </form>
                        </div>
                    </main>
                ) : null}
            </div>
        </div>
    );
};

export default AdminPanel;
