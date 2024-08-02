import React from "react";

const NewBoxComponent = ({ img, number, title }) => {
    return (
        <div className="h-[250px] w-[300px] relative bg-white rounded-t-2xl pt-6">
            <div className="flex justify-between mx-6">
                <div className="flex justify-center items-center bg-white w-[60%] rounded-full py-2">
                    <img width={"60%"} src={img} alt="icon" />
                </div>
                <h2 className=" text-7xl text-[#ffdbca] font-extrabold">{number}</h2>
            </div>
            <div className="mx-6">
                <h2 className="text-3xl text-gray-800 font-semibold my-4">{title}</h2>
            </div>
            <div className="bg-orange-700 absolute bottom-0  h-[4px] w-[100%] p-0 m-0 transition-all duration-300 flex"></div>

        </div>
    );
};

export default NewBoxComponent;
