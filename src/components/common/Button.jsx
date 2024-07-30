import React from "react";

const Button = ({
    name,
    width,
    height,
    colour,
    bgcolour,
    hoverbg,
    hovertext,
}) => {
    return (
        <div
            className="border-2 rounded-full flex justify-center items-center font-bold tracking-wide duration-500 mt-3 md:mt-0"
            style={{
                width: width || "11rem", // fallback to 44 (11rem) if no width is provided
                height: height || "3rem", // fallback to 12 (3rem) if no height is provided
                color: colour || "#ff5b2e", // fallback to the original text color if no colour is provided
                backgroundColor: bgcolour || "transparent", // fallback to transparent if no bgcolour is provided
                borderColor: "#ff5b2e",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverbg || "#ff5b2e";
                e.currentTarget.style.color = hovertext || "white";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                    bgcolour || "transparent";
                e.currentTarget.style.color = colour || "#ff5b2e";
            }}
        >
            {name}
        </div>
    );
};

export default Button;
