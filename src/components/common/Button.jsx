import React from "react";

const Button = ({
    name,
    width,
    height,
    colour,
    bgcolour,
    hoverbg,
    hovertext,
    shadow, // Add shadow prop
}) => {
    const defaultShadow = shadow || "0 4px 8px #ff5b2e";

    return (
        <div
            className=" rounded-full flex justify-center items-center font-bold tracking-wide duration-500 mt-3 md:mt-0"
            style={{
                width: width || "11rem", // fallback to 11rem if no width is provided
                height: height || "3rem", // fallback to 3rem if no height is provided
                color: colour || "#ff5b2e", // fallback to the original text color if no colour is provided
                backgroundColor: bgcolour ? `#${bgcolour}` : "transparent", // fallback to transparent if no bgcolour is provided
                borderColor: "#ff5b2e",
                boxShadow: shadow || defaultShadow, // default shadow effect
                transition: "all 0.3s ease", // Ensure smooth transition
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverbg || "#ff5b2e";
                e.currentTarget.style.color = hovertext || "white";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.8)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = bgcolour ? `#${bgcolour}` : "transparent";
                e.currentTarget.style.color = colour || "#ff5b2e"; // revert to default color
                e.currentTarget.style.boxShadow = shadow || defaultShadow; // revert to default shadow
            }}
        >
            {name}
        </div>
    );
};

export default Button;
