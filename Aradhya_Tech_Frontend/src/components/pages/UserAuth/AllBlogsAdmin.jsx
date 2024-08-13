import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "../../common/Searchbar";
import ModalComponent from "../../common/AdminPanel/ModalComponent";
import Button from "../../common/Button";
import { CgCloseR } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllBlogsAdmin = () => {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState("");
    const [popup, setPopup] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null);
    const [activeAddContent, setActiveAddContent] = useState(false);
    const [contentTitle, setContentTitle] = useState("");
    const [contentDescription, setContentDescription] = useState("");
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [blogToDelete, setBlogToDelete] = useState(null);

    useEffect(() => {
        // Fetch the initial list of blogs
        refreshBlogs();
    }, []);

    const refreshBlogs = async () => {
        try {
            const result = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/user/blogs`
            );
            setBlogs(result.data);
            console.log("result data", result.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (blog) => {
        setCurrentBlog(blog);
        setPopup(true);
    };

    const handleDelete = (id) => {
        setDeleteConfirmation(true);
        setBlogToDelete(id);
    };

    const cancelDelete = () => {
        setDeleteConfirmation(false);
    };

    const handleDelete1 = async (id) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/api/user/blogs/${id}/content`
            );
            setBlogs(blogs.filter((blog) => blog._id !== id));
            console.log(`Deleted blog with id: ${id}`);
            toast.success("Blog deleted successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddContent = (blog) => {
        setCurrentBlog(blog);
        setActiveAddContent(true);
    };

    const submitContent = async () => {
        if (!contentTitle || !contentDescription) {
            toast.error("Please fill in all fields");
            return;
        }
        try {
            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/user/blogs/${currentBlog._id}/content`,
                {
                    title: contentTitle,
                    description: contentDescription,
                }
            );
            toast.success("Content Added Secessfully!");
            refreshBlogs();
            setActiveAddContent(false);
            setContentTitle("");
            setContentDescription("");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <div className="mx-auto min-h-screen bg-gray-200">
            <div className="px-20 py-10">
                <Searchbar
                    value={search}
                    handleSearchChange={handleSearchChange}
                    heading={"All Blogs"}
                />
            </div>
            <ul className="space-y-4 flex flex-col items-center">
                {filteredBlogs.map((blog) => (
                    <li
                        key={blog._id}
                        className="border bg-white hover:shadow-xl transform hover:scale-105 transition duration-500 p-4 rounded-xl shadow-md flex h-auto w-[80%]"
                    >
                        <div className="w-[40%] h-[300px] p-4">
                            <img
                                className="h-full w-[400px] rounded-xl"
                                src={blog.img}
                            />
                        </div>
                        <div className="w-[60%] relative pt-3">
                            <h2 className="text-2xl pb-4 font-semibold">
                                {blog.title}
                            </h2>
                            <h2 className="text-xl pb-4 font-semibold">
                                Slug: {blog.slug}
                            </h2>
                            <p className="text-gray-700">
                                Total Content: {blog.content.length}
                            </p>

                            <div className="mt-2 space-x-2 absolute bottom-0 right-0">
                                <button
                                    className="bg-[#ff5b5e] text-xl px-10 hover:bg-yellow-700 text-white font-bold py-1 rounded"
                                    onClick={() => handleAddContent(blog)}
                                >
                                    Add Content
                                </button>
                                <button
                                    className="bg-yellow-500 text-xl px-10 hover:bg-yellow-700 text-white font-bold py-1 rounded"
                                    onClick={() => handleEdit(blog)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-900 px-10 hover:bg-red-700 text-xl text-white font-bold py-1 rounded"
                                    onClick={() => handleDelete(blog._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {popup && (
                <ModalComponent
                    setActive={setPopup}
                    currentBlog={currentBlog}
                    refreshBlogs={refreshBlogs}
                />
            )}

            {deleteConfirmation && (
                <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative py-3 sm:max-w-md sm:mx-auto w-full">
                        <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-10">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">
                                        Confirm Delete
                                    </h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                                        Are you sure you want to delete this
                                        blog?
                                    </div>
                                    <div className="relative mt-6 flex justify-between">
                                        <Button
                                            name={"Yes, Delete"}
                                            onClick={() => {
                                                handleDelete1(blogToDelete);
                                                cancelDelete();
                                            }}
                                        />
                                        <Button
                                            name={"Cancel"}
                                            onClick={cancelDelete}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeAddContent && (
                <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full h-full">
                        <div className="min-h-screen w-full py-6 flex flex-col justify-center sm:py-12">
                            <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-[#ff5b2e] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                                <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                    <div
                                        onClick={() => {
                                            setActiveAddContent(false);
                                        }}
                                        className="absolute top-4 text-xl text-gray-400 cursor-pointer right-5 hover:text-gray-900"
                                    >
                                        <CgCloseR />
                                    </div>
                                    <div className="max-w-md mx-auto">
                                        <div>
                                            <h1 className="text-2xl font-semibold">
                                                Add Content to the Blog
                                            </h1>
                                        </div>
                                        <div className="divide-y divide-gray-200">
                                            <div className="text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                                                <div className="relative mb-6 mt-6">
                                                    <input
                                                        autoComplete="off"
                                                        id="content-title"
                                                        name="content-title"
                                                        type="text"
                                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                        placeholder="Content Title"
                                                        value={contentTitle}
                                                        onChange={(e) =>
                                                            setContentTitle(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="content-title"
                                                        className="absolute left-0 -top-3.5 text-gray-600 text-xl peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Title
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <textarea
                                                        autoComplete="off"
                                                        id="content-description"
                                                        name="content-description"
                                                        className="peer placeholder-transparent h-24 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                        placeholder="Content Description"
                                                        value={
                                                            contentDescription
                                                        }
                                                        onChange={(e) =>
                                                            setContentDescription(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="content-description"
                                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Description
                                                    </label>
                                                </div>
                                                <div className="relative mt-6">
                                                    <Button
                                                        name={"Add Content"}
                                                        onClick={submitContent}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default AllBlogsAdmin;
