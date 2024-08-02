import React from "react";

const Techlogo = ({ img, name }) => {
    return (
        <div className="w-[14%] h-auto rounded-lg bg-[#f7f7f7] flex justify-center flex-col items-center">
            <div className="w-[40%] mt-3">
                <img src={img} />
            </div>
            <p className="text-xl my-4">{name} </p>
        </div>
    );
};

export default Techlogo;
