import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Searchbar = ({value, handleSearchChange}) => {
    const navigate =useNavigate();

    const handleBackClick = () =>{
        navigate("/admin");
    }

  
    return (
        <div class=" py-10 w-[100%] px-20">
            <div class="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 justify-between">
            
                <div className="text-4xl flex items-center text-[#ff5b2e] font-bold">
                <div className="mr-4 text-gray-700 cursor-pointer" onClick={handleBackClick}><IoIosArrowBack /></div>
                <div>All Blogs</div>
                </div>
                <div className="flex space-x-6 ">
                    <div class="flex bg-gray-100 p-4 w-80 space-x-4 rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 opacity-30"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            class="bg-gray-100 outline-none"
                            type="text"
                            placeholder="Article name or keyword..."
                            value={value}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div class="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                        <span>All categorie</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                    <div class="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                        <span>Search</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
