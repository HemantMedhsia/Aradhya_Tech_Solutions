import React, { useState } from "react";
import logo from "../../assets/images/Aradhya_tech_logo.png";
import Button from "../common/Button";
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full bg-white bg-opacity-50 backdrop-blur-sm fixed top-0 left-0 z-50 flex flex-col md:flex-row justify-between items-center p-6">
            <div className="flex justify-between w-full md:w-auto">
                <img src={logo} alt="Logo" className="w-[212px] h-auto" />
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    &#9776;
                </button>
            </div>
            <div
                className={`w-full md:w-1/2 mt-3 md:mt-0 ${
                    isMenuOpen ? "block" : "hidden"
                } md:block`}
            >
                <ul
                    className={`flex ${
                        isMenuOpen ? "flex-col items-center" : "md:flex-row"
                    } justify-between font-semibold tracking-wider`}
                >
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        <Link to={"/"}>HOME</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        <Link to={"/about"}>ABOUT</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        <Link to={"/services"}>SERVICES</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        <Link to={"/blogs"}>BLOGS</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        <Link to={"/workshop"}>WORKSHOP & TRAININGS</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block">
                        <Link to={"/contact"}>CONTACT US</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                </ul>
            </div>
            <Link to={"/contact"}><Button name={"Request Quote"}  /></Link>
            
        </div>
    );
}

export default Header;
