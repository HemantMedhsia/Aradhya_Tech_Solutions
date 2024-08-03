import React from "react";

const NewBoxComponent = ({ img, number, title }) => {
    return (
        <div className="relative h-[250px] w-[300px] bg-white rounded-t-2xl pt-6 group">
            <div className="flex justify-between mx-6">
                {/* Image container */}
                <div className="flex justify-center items-center bg-white w-[60%] rounded-full py-2">
                    <img width={"60%"} src={img} alt="icon" />
                </div>
                {/* Number container */}
                <h2 className="text-7xl text-[#ffdbca] font-extrabold group-hover:block hidden">{number}</h2>
            </div>
            {/* Title container */}
            <div className="mx-6 ">
                <h2 className="text-3xl text-gray-800 font-semibold my-4">{title}</h2>
            </div>
            {/* Bottom line */}
            <div className="bg-orange-700 absolute bottom-0 h-[4px] w-0 group-hover:w-full transition-all duration-1000"></div>
        </div>
    );
};

export default NewBoxComponent;
