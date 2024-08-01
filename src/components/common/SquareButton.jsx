import React, { useState } from "react";

const SquareButton = ({ sections, activeSection, onSectionChange }) => {

    const buttonClass = (section) =>
        `rounded-lg h-[70px] w-[250px] text-center hover:text-[#fff] hover:bg-[#ff5b2e] hover:border-white border-[2px] font-bold my-2 py-2 px-2 transition-colors duration-300  ${
            activeSection === section
                ? "bg-red-200 text-[#ff5b2e]" // Active button
                : "bg-white text-[#52525d] " // Inactive button
        } ${
            activeSection === section
                ? "" // No hover effect on active button
                : "hover: cursor-pointer" // Hover effects on inactive buttons
        }`;

    return (
        <div>
            {sections.map((section) => (
                <button
                    key={section.name}
                    className={`${buttonClass(section.name)} mx-2 lg:mx-0`}
                    onClick={() => onSectionChange(section.name)}
                >
                    <div className="flex items-center">
                        <i className={`${section.icon} m-2 p-2 bg-slate-200 text-opacity-40 rounded-full`}></i>
                        <span className="block ml-2">{section.label}</span>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default SquareButton
