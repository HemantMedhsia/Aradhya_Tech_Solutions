import React from "react";

const WorkCard = ({ img, title, desc }) => {
    return (
        <div className="bg-[#f7f7f7] ml-4 rounded-xl border p-2 max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
            <div className="flex justify-center items-center bg-white w-full h-auto rounded-lg overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full lg:w-[100%] h-auto object-cover"
                />
            </div>
            <p className="text-base sm:text-lg text-[#52525d] mt-4">{desc}</p>
            <h2 className="text-xl sm:text-2xl font-bold mt-4 text-[#30303c]">
                {title}
            </h2>
            {/* <p className="text-base sm:text-lg mt-4">Read More</p> */}
        </div>
    );
};

export default WorkCard;
