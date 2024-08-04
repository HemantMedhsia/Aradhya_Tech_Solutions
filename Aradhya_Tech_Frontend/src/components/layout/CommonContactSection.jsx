import React from "react";
import Button from "../common/Button";
import contactSectionImg from '../../assets/images/team-supportContactPageSvg.svg'

const CommonContactSection = () => {
    return (
        <div className="flex flex-col bg-[#fbf1ef] md:flex-row justify-between lg:px-[8%]">
            <div className="w-full lg:w-1/2 mb-6 md:my-[10%] mr-4 ">
                <div className="w-[90%]">
                    <p className="mb-10 text-[#ff5b2e] font-bold">
                        <i
                            className="fa fa-building m-1"
                            aria-hidden="true"
                        ></i>{" "}
                        Contact Us
                    </p>
                    <h2 className="text-3xl md:text-4xl mb-10 font-bold">
                        Have a project in mind? Let's get to chat.
                    </h2>
                    <div className="flex w-full my-[5%]">
                        <div className="mr-[3%]">
                            <Button
                                name={"Contact"}
                                height={"60px"}
                                // shadow={"0 4px 8px 4ee464"}
                            />
                        </div>
                        <div className="mx-[3%]">
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
            <div className="w-full ml-4 md:w-1/2 flex justify-center">
                <img src={contactSectionImg} className="w-[80%] h-auto" alt="Agency Image" />
            </div>
        </div>
    );
};

export default CommonContactSection;
