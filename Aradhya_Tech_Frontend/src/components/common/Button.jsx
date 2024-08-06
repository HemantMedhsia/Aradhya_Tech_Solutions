import React from "react";

const Button = ({
  name,
  width,
  height,
  colour,
  bgcolour,
  hoverbg,
  hovertext,
  shadow,
  onClick,
  type = "button" // Ensure type is "button" by default
}) => {
  const defaultShadow = shadow || "0 4px 8px #ff5b2e";

  return (
    <button
      type={type} // Ensure type is passed correctly
      className="cursor-pointer rounded-full flex justify-center items-center font-bold tracking-wide duration-500 mt-3 md:mt-0"
      style={{
        width: width || "11rem",
        height: height || "3rem",
        color: colour || "#ff5b2e",
        backgroundColor: bgcolour ? `#${bgcolour}` : "transparent",
        borderColor: "#ff5b2e",
        boxShadow: shadow || defaultShadow,
        transition: "all 0.3s ease",
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverbg || "#ff5b2e";
        e.currentTarget.style.color = hovertext || "white";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgcolour ? `#${bgcolour}` : "transparent";
        e.currentTarget.style.color = colour || "#ff5b2e";
        e.currentTarget.style.boxShadow = shadow || defaultShadow;
      }}
    >
      {name}
    </button>
  );
};

export default Button;
