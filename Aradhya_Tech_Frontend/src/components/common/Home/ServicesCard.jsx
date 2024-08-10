import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServicesCard = ({ img, title, desc, readmore }) => {
    return (
        <div className="bg-[#f7f7f7] rounded-xl my-4 h-auto w-[350px] border-[1px] px-6 pt-4 pb-6">
            <div className=" flex justify-center items-center bg-white w-[30%] h-[28%] rounded-[8px]">
                <img width={"60%"} src={img} />
            </div>
            <h2 className="text-2xl font-bold mt-4 text-[#30303c]">{title}</h2>
            <p className="text-lg text-[#52525d] mt-4">{desc}</p>
            <div className="flex items-center space-x-2 space-y-5 hover:text-[#ff5b2e]">
            <p className="text-lg mt-4 cursor-pointer hover:text-[#ff5b2e]">{readmore}</p>
            <FaArrowRightLong className="text-lg " />
            </div>
           
        </div>
    );
};

export default ServicesCard;
