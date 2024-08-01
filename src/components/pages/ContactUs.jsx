import React from "react";
import smileimage from "../../assets/images/smiling-girl.png";
import { MdConnectWithoutContact } from "react-icons/md";

const ContactUs = () => {
    return (
        <div className="">
            <div className=" flex bg-[#ffdbca] pt-[10%]">
                <div className="w-[50%] p-10">
                    <div className="flex text-[#ff5b2e] text-xl ">
                        <div className="mr-2 ml-4 ">
                            <MdConnectWithoutContact />
                        </div>
                        <h1>Contact Us</h1>
                    </div>

                    <h1>We are a creative digital agency based in India</h1>
                    <p>
                        Please fill in the form below or mail us your
                        requirements.
                    </p>
                </div>
                <div className="w-[40%]">
                    <img src={smileimage} />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
