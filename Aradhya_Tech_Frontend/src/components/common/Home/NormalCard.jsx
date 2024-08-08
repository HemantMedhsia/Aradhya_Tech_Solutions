import React from "react";
import CountUp from "react-countup";

const NormalCard = ({title, value, desc}) => {
    return (
        <div className="h-[320px] w-[280px] px-[20px] py-[40px] rounded-[14px] border-[1px] bg-white mb-4">
            <p className="text-xl text-[#ff5b2e] mb-6">{title}</p>
            <h2 className="text-5xl text-[#30303c] font-extrabold mb-6 "><CountUp end={value} duration={3} />+</h2>
            <p className="text-xl text-[#52525d]">
                {desc}
            </p>
        </div>
    );
};

export default NormalCard;
