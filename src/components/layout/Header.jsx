import React, { useState } from "react";
import logo from "../../assets/images/Aradhya_tech_logo.png";
import Button from "../common/Button";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full bg-white flex flex-col md:flex-row justify-between items-center p-6">
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
                        HOME
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        ABOUT
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        SERVICES
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        BLOGS
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block mb-2 md:mb-0">
                        WORKSHOP & TRAININGS
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                    <li className="hover:text-[#ff5b2e] duration-500 block">
                        CONTACT US
                        {!isMenuOpen && (
                            <p className="inline-block text-2xl text-[#ff5b2e]">
                                &middot;
                            </p>
                        )}
                    </li>
                </ul>
            </div>
            {/* <div className="w-44 h-12 border-2 rounded-full border-[#ff5b2e] flex justify-center items-center font-bold tracking-wide hover:bg-[#ff5b2e] hover:text-white text-[#ff5b2e] duration-500 mt-3 md:mt-0">
                Request Quote
            </div> */}
            <Button name={"Request Quote"} />
        </div>
    );
}

export default Header;
