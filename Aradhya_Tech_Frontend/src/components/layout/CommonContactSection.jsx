import React from "react";
import Button from "../common/Button";
import contactSectionImg from "../../assets/images/team-supportContactPageSvg.svg";

const CommonContactSection = () => {
    return (
        <div className="flex flex-col bg-[#fbf1ef] md:flex-row justify-between lg:px-[8%] px-4 py-8">
            <div className="w-full lg:w-1/2 mb-6 md:my-[10%] mr-4 flex justify-center lg:justify-start">
                <div className="w-[90%] max-w-lg">
                    <p className="mb-4 text-[#ff5b2e] font-bold text-center lg:text-left">
                        <i
                            className="fa fa-building m-1"
                            aria-hidden="true"
                        ></i>
                        Contact Us
                    </p>
                    <h2 className="text-2xl md:text-4xl mb-4 font-bold text-center lg:text-left">
                        Have a project in mind? Let's get to chat.
                    </h2>
                    <div className="flex flex-col items-center sm:flex-row w-full my-4 sm:my-6 justify-center lg:justify-start">
                        <div className="mb-4 sm:mb-0 sm:mr-4">
                            <Button name={"Contact"} height={"60px"} />
                        </div>
                        <div>
                            <Button
                                bgcolour="4ee464" // Correctly formatted color value
                                colour="white"
                                hoverbg="white"
                                hovertext={"#4ee464"}
                                shadow="0 4px 8px 4ee464"
                                name="Whatsapp"
                                height="60px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={contactSectionImg}
                    className="w-[80%] h-auto"
                    alt="Agency Image"
                />
            </div>
        </div>
    );
};

export default CommonContactSection;
