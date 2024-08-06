import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "../../common/Searchbar";
import ModalComponent from "../../common/AdminPanel/ModalComponent";


const AllBlogsAdmin = () => {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState("");
    const [popup, setPopup] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null);

    

    useEffect(() => {
        // Fetch the initial list of blogs
        refreshBlogs();
    }, []);

    const refreshBlogs = async () => {
        try {
            const result = await axios.get(
                "http://localhost:8000/api/user/blogs"
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

    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `http://localhost:8000/api/user/blogs/${id}/content`
            );
            setBlogs(blogs.filter((blog) => blog._id !== id));
            console.log(`Deleted blog with id: ${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mx-auto min-h-screen bg-gray-200">
            <Searchbar value={search} handleSearchChange={handleSearchChange} />
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
                                    className="bg-[#ff5b5e] text-xl px-16 hover:bg-yellow-700 text-white font-bold py-1 rounded"
                                    onClick={() => handleEdit(blog)}
                                >
                                    Add Content
                                </button>
                                <button
                                    className="bg-yellow-500 text-xl px-16 hover:bg-yellow-700 text-white font-bold py-1 rounded"
                                    onClick={() => handleEdit(blog)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-900 px-16 hover:bg-red-700 text-xl text-white font-bold py-1 rounded"
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
        </div>
    );
};

export default AllBlogsAdmin;
