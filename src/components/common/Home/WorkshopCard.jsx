import React from "react";

const WorkshopCard = ({ imageUrl, title, description }) => {
    return (
        <div className="max-w-sm rounded-lg bg-white overflow-hidden shadow-sm">
            <div className="w-full h-64 p-1">
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={imageUrl}
                    alt="Card Image"
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-semibold text-[#52525d] text-lg text-center mb-2">
                    {title}
                </div>
                <p className="text-[#52525d] text-base">{description}</p>
            </div>
        </div>
    );
};

export default WorkshopCard;
