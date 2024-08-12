import React, { useState } from "react";
import logo from "../../assets/images/Aradhya_tech_logo.png";
import Button from "../common/Button";
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full bg-transparent bg-opacity-50 backdrop-blur-sm lg:fixed lg:top-0 lg:left-0 lg:z-50 flex flex-col md:flex-row justify-between items-center p-6">
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
                className={`w-full md:w-3/5 mt-3 md:mt-0 ${
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
                        <Link to={"/about"} onClick={() => window.scrollTo(0, 0)}>ABOUT</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        <Link to={"/services"} onClick={() => window.scrollTo(0, 0)}>SERVICES</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        <Link to={"/blogs"} onClick={() => window.scrollTo(0, 0)}>BLOGS</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        <Link to={"/workshop"} onClick={() => window.scrollTo(0, 0)}>WORKSHOP & TRAININGS</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>CONTACT US</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block">
                        <Link to={"/certificate-verification"} onClick={() => window.scrollTo(0, 0)}>CERTIFICATION</Link>
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                </ul>
            </div>
            <Link to={"/contact"} onClick={() => window.scrollTo(0,500)}><Button name={"Request Demo"}  /></Link>
            
        </div>
    );
}

export default Header;
