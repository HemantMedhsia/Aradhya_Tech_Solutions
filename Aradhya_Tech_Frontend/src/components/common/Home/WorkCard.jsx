import React from "react";

const WorkCard = ({ img, title, desc }) => {
    return (
        <div className="bg-[#f7f7f7] ml-4 rounded-xl border max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl hover:shadow-xl cursor-pointer">
            <div className="flex justify-center items-center bg-white w-full h-auto rounded-lg overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full lg:w-[100%] h-[400px] max-h-[300px] object-cover"
                />
            </div>
            <div className="px-2 py-4">
                <p className="text-base sm:text-lg text-[#52525d] mt-2">
                    {desc}
                </p>
                <h2 className="text-xl sm:text-2xl font-bold  text-[#30303c]">
                    {title}
                </h2>
            </div>
            {/* <p className="text-base sm:text-lg mt-4">Read More</p> */}
        </div>
    );
};

export default WorkCard;
