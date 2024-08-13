import axios from "axios";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../AuthContext";
import { BiImageAdd } from "react-icons/bi";
import ContactData from "../../common/Home/ContactData";

const AdminPanel = () => {
    const [active, setActive] = useState(false);
    const [contact, setContact] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        img: "",
        slug: "",
    });
    const { logout } = useAuth();
    const [selectionDetail, setSelectionDetail] = useState("No file Choosen");

    // Create a ref for the file input
    const fileInputRef = useRef(null);

    function activePage() {
        setActive(!active);
        setContact(false); // Ensure ContactData is hidden when switching to the Add Blog section
    }

    function contactPage() {
        setContact(!contact);
        setActive(false); // Ensure Add Blog section is hidden when switching to ContactData
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "img" && files) {
            setSelectionDetail(files[0].name); // Update the file name in the selection detail
            setFormData((prevState) => ({
                ...prevState,
                [name]: files[0], // Save the file object (not the input value)
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Create a new FormData object for sending the request
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("author", formData.author);
        formDataToSend.append("slug", formData.slug);
        if (formData.img) {
            formDataToSend.append("img", formData.img); // Ensure 'img' is the correct key
        }

        try {
            const response = await axios.post(
                "http://localhost:8000/api/user/blogs",
                formDataToSend,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            toast.success("Blog Added Successfully");
            // console.log(response.data);
            setFormData({
                title: "",
                author: "",
                img: null,
                slug: "",
            });
            setSelectionDetail("No file Choosen");
        } catch (err) {
            // console.error(err);
            // console.error('Error:', err.response ? err.response.data : err.message);
            toast.error("Error adding blog");
        }
    };

    return (
        <div className="bg-orange-100 min-h-screen pb-8 overflow-x-hidden">
            <div className="flex w-full pt-24 px-10 pb-4">
                <nav className=" mr-6 w-[15%]">
                    <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
                        <Link to={"/add-certificate"}>
                            <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-black my-2 w-full"
                            >
                                <span className="material-icons-outlined mr-2">
                                    dashboard
                                </span>
                                Certificate
                                <span className="material-icons-outlined ml-auto">
                                    keyboard_arrow_right
                                </span>
                            </a>
                        </Link>
                        <Link to={"/all-blogs-admin"}>
                            <a className="inline-block text-gray-600 hover:text-black my-2 w-full">
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
                            onClick={activePage}
                            className="flex items-center cursor-pointer text-gray-600 hover:text-black my-2 w-full"
                        >
                            <span className="material-icons-outlined mr-2">
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
                            onClick={contactPage}
                            className="flex items-center cursor-pointer text-gray-600 hover:text-black my-4 w-full"
                        >
                            <span className="material-icons-outlined mr-2">
                                tune
                            </span>
                            Query
                            <span className="material-icons-outlined ml-auto">
                                keyboard_arrow_right
                            </span>
                        </a>
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
                        <Link to={"/"} onClick={() => logout()}>
                            {" "}
                            <a className="flex items-center text-gray-600 hover:text-black my-4 w-full">
                                <span className="material-icons-outlined mr-2">
                                    power_settings_new
                                </span>
                                Log out
                                <span className="material-icons-outlined ml-auto">
                                    keyboard_arrow_right
                                </span>
                            </a>
                        </Link>
                    </div>
                </nav>

                {active ? (
                    <main className="flex-grow">
                        <div className="min-h-screen w-full flex flex-col justify-center">
                            <div className="relative py-3 sm:max-w-xl sm:mx-auto  w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-[#ff5b2e] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                                <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                    <div className="max-w-md mx-auto">
                                        <div>
                                            <h1 className="text-2xl font-semibold pb-5">
                                                Add a New Blog
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
                                                            value={
                                                                formData.title
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
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
                                                            value={
                                                                formData.author
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
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
                                                        <div className="w-[33%] flex justify-center py-1 text-sm font-normal item-center bg-red-300 rounded-md shadow-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out">
                                                            <input
                                                                ref={
                                                                    fileInputRef
                                                                } // Attach the ref to the file input
                                                                autoComplete="off"
                                                                id="img"
                                                                name="img"
                                                                type="file"
                                                                className="absolute w-full left-0 cursor-pointer opacity-0"
                                                                placeholder="Img"
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                // onClick={handleImageSelect}
                                                                accept="image/*"
                                                                required
                                                            />
                                                            <div className="flex justify-center items-center mr-1 text-2xl">
                                                                {" "}
                                                                <BiImageAdd />
                                                            </div>
                                                            <p>Upload Image</p>
                                                        </div>
                                                        <div className="text-green-900 ml-2 font-semibold">
                                                            {selectionDetail}
                                                        </div>
                                                    </div>
                                                    <div className="relative mb-6">
                                                        <input
                                                            autoComplete="off"
                                                            id="slug"
                                                            name="slug"
                                                            type="text"
                                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                            placeholder="Slug"
                                                            value={
                                                                formData.slug
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            required
                                                        />
                                                        <label
                                                            htmlFor="slug"
                                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                        >
                                                            Slug
                                                        </label>
                                                    </div>
                                                    <div className="relative mt-6">
                                                        <button
                                                            type="submit"
                                                            className="w-[30%] item-center px-4 py-2 font-bold bg-red-300  rounded-md shadow-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
                                                        >
                                                            Add Blog
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                ) : null}

                {contact ? (
                    <main className="w-[80%]">
                        <div className="">
                            <ContactData />
                        </div>
                    </main>
                ) : null}
            </div>
            <ToastContainer />
        </div>
    );
};

export default AdminPanel;
