import React from "react";

const WorkCard = ({ img, title, desc, readmore }) => {
    return (
        <div className="bg-gray-300 ml-4 rounded-xl max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl hover:shadow-2xl hover:-translate-y-6 duration-500 cursor-pointer">
            <div className="flex justify-center items-center bg-transparent w-full h-auto rounded-lg overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full lg:w-[100%] h-[400px] max-h-[300px] object-cover"
                />
            </div>
            <div className="px-6 py-4">
                <p className="text-base sm:text-lg text-[#52525d] mt-2">
                    {desc}
                </p>
                <h2 className=" text-xl sm:text-2xl font-bold  text-[#30303c]">
                    {title}
                </h2>
                <p className="text-base sm:text-lg mt-4">{readmore}</p>
            </div>
           
        </div>
    );
};

export default WorkCard;
