import React from "react";
import CountUp from "react-countup";

const ServicebtnCard = ({ value, title, img }) => {
    return (
        <div className="flex w-full lg:w-[31%] h-auto px-6 py-6 bg-white rounded-xl">
            <div className="mr-4 lg:w-[90px] p-2 rounded-[50%] flex justify-center bg-[#ff5b2e]">
                <img className="w-[65%]" src={img} />
            </div>
            <div className="w-[80%]">
                <h2 className="text-4xl font-bold pb-2">
                    <CountUp end={value} duration={3} />+
                </h2>
                <p className="text-xl text-[#52525d]">{title}</p>
            </div>
        </div>
    );
};

export default ServicebtnCard;
