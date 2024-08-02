import React from "react";
import smileimage from "../../assets/images/smiling-girl.png";
import { FaHeadset } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Form from "../common/Home/Form";
import { FaPhoneSquareAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import ServicesCard from "../common/Home/ServicesCard";
import contimg1 from "../../assets/images/contactCardsvg1.svg";
import contimg2 from "../../assets/images/contactCardsvg2.svg";
import contimg3 from "../../assets/images/contactCardsvg3.svg";
import ContactCard from "../common/Home/ContactCard";
import contiimg4 from "../../assets/images/contactCardsvg4.svg";
import contiimg5 from "../../assets/images/contactCardsvg5.svg";
import contiimg6 from "../../assets/images/contactCardsvg6.svg";
import contiimg7 from "../../assets/images/contactCardsvg7.svg";
import contiimg8 from "../../assets/images/contactCardsvg8.svg";



const ContactUs = () => {
    return (
        <div className="  ">
            {/* Section-1 */}

            <div className="flex flex-col md:flex-row bg-[#ffdbca] lg:pt-[10%] md:pt-0">
                <div className="w-full md:w-[60%] p-4 md:p-[50px] pt-[160px] md:pt-[90px] md:pl-[60px]">
                    <div className="flex text-[#ff5b2e] text-xl ">
                        <div className="mr-3 mt-1">
                            <FaHeadset />
                        </div>
                        <h1>CONTACT US</h1>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mt-5">
                        We are a creative digital agency based in India
                    </h1>
                    <p className="mt-7 text-[#0000ff]">
                        Please fill in the form below or mail us your
                        requirements.
                    </p>
                </div>
                <div className="w-full md:w-[40%] sm:mr-10 mt-8 md:mt-0">
                    <img
                        src={smileimage}
                        alt="Smile"
                        className="w-full h-auto px-6"
                    />
                </div>
            </div>

            {/* Section-2 */}
            <div className="bg-[#fbf1ef]">
                {" "}
                <div className=" flex flex-col md:flex-row pt-10">
                    <div className="flex justify-center md:w-1/2 lg:w-[60%] p-4 md:p-6 lg:px-8">
                        <div className="w-[100%]">
                            <Form />
                        </div>
                    </div>
                    <div className="w-full  text-[#30303c] lg:w-[40%] mr-16 md:w-1/2 p-4 md:p-6 lg:p-8">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold mb-4">
                                Get in touch
                            </h1>
                            <div className="flex items-center gap-2 underline decoration-2 decoration-[#ff5b2e] ">
                                <FaPhoneSquareAlt className="mr-2 text-2xl" />
                                <span className="text-xl">+91 7235888990</span>
                            </div>
                            <div className="flex items-center text-xl mt-3 gap-2 underline decoration-2 decoration-[#ff5b2e]">
                                <FaWhatsapp className="mr-2 text-2xl" />
                                <span>+91 7235888990</span>
                            </div>
                            <p className="mt-3">
                                <a
                                    href="mailto:technologiesaradhya@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <FaEnvelope className="mr-2 text-2xl" />
                                    <span className="text-xl">
                                        technologiesaradhya@gmail.com
                                    </span>
                                </a>
                            </p>
                        </div>

                        <div className="mt-16">
                            <h1 className="text-4xl font-bold mb-4">
                                Come meet us
                            </h1>

                            <div className="flex items-center mt-3 gap-2 underline decoration-2 decoration-[#ff5b2e]">
                                <MdLocationOn className="mr-2 text-2xl" />
                                <span className="text-xl">
                                    Chitaipur Crossing, Kandwa Road, Varanasi
                                </span>
                            </div>

                            <div className="flex items-center mt-3 gap-2 underline decoration-2 decoration-[#ff5b2e]">
                                <FaLocationArrow className="mr-2 text-xl" />
                                <span className="text-xl">Get Directions</span>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h1 className="text-4xl font-bold mb-6">
                                Follow us
                            </h1>
                            <ul className="flex justify-start gap-2">
                                <li className="mr-4">
                                    <a>
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li className="mr-4">
                                    <a>
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <FaLinkedin />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section-3 */}

            <div className="bg-[#f7f7f7]">
                <div className="">
                    <h1 className="lg:text-3xl text-2xl font-bold py-10 text-[#30303c] whitespace-nowrap text-center">
                        We’re Here to Help
                    </h1>
                </div>
                <div className=" flex justify-evenly flex-wrap ">
                    <div className=" mb-8">
                        <ServicesCard
                            img={contimg1}
                            title={"Communicate Your Requirements"}
                        />
                    </div>
                    <div className=" mb-8">
                        <ServicesCard
                            img={contimg2}
                            title={"Understanding the Requirement"}
                        />
                    </div>
                    <div className=" mb-8">
                        <ServicesCard
                            img={contimg3}
                            title={
                                "Aradhya Technologies Respect the Client Needs"
                            }
                        />
                    </div>
                </div>
            </div>

            {/* Section---4 */}
            <div className="flex justify-evenly bg-[#ffdbca] pt-10 flex-wrap pb-16">
                <div >
                    <ContactCard image={contiimg4} text={"Work at Your Time Zone"}/>
                </div>
                <div>
                    <ContactCard image={contiimg5} text={"Easy & Timely Communication"}/>
                </div>
                <div>
                    <ContactCard image={contiimg6} text={"Support Available at 24 Hours"}/>
                </div>
                <div>
                    <ContactCard image={contiimg7} text={"Ratings 4.9 out of 100+` Clients"}/>
                </div>
                <div>
                    <ContactCard image={contiimg8} text={"Award Wining Service and Support"}/>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
