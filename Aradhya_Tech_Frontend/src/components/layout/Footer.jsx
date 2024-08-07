import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Example image imports (replace with your actual image paths)
import image1 from "../../assets/images/aradyatech.png";
import Button from "../common/Button";

const Footer = () => {
    return (
        <footer className="bg-[#30303c] text-white p-6 ">
            <div className="w-[100%]">

               <div className="flex flex-wrap justify-between p-4 mb-16 mt-8">
  <div className="w-full md:w-1/2 lg:w-[25%] bg-customGray text-[#adb7c5] p-4 mb-4 lg:mb-0">
    <h4 className="text-xl font-semibold mb-2">Contact Info</h4>
    <p className="flex items-center hover:text-[#ff5b2e] duration-500">
      <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91 7235888990
    </p>
    <p className="flex items-center hover:text-[#ff5b2e] duration-500">
      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
      <a
        href="mailto:technologiesaradhya@gmail.com"
        className="hover:text-[#ff5b2e] duration-500"
      >
        technologiesaradhya@gmail.com
      </a>
    </p>
  </div>
  <div className="w-full md:w-1/2 lg:w-[15%] text-[#adb7c5] p-4 mb-4 lg:mb-0">
    <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
    <a
      href="https://facebook.com"
      className="flex items-center mb-1 hover:text-[#ff5b2e] duration-500"
    >
      <FontAwesomeIcon icon={faFacebook} className="mr-2" /> Facebook
    </a>
    <a
      href="https://instagram.com"
      className="flex items-center hover:text-[#ff5b2e] duration-500"
    >
      <FontAwesomeIcon icon={faInstagram} className="mr-2" /> Instagram
    </a>
  </div>
  <div className="w-full md:w-1/2 lg:w-[25%] text-[#adb7c5] p-4 mb-4 lg:mb-0">
    <h4 className="text-xl font-semibold mb-2">Services</h4>
    <p className="hover:text-[#ff5b2e] cursor-pointer duration-500">
      E-commerce Website Development
    </p>
    <p className="hover:text-[#ff5b2e] cursor-pointer duration-500">
      NGO Website Development
    </p>
    <p className="hover:text-[#ff5b2e] cursor-pointer duration-500">
      App Development
    </p>
    <p className="hover:text-[#ff5b2e] cursor-pointer duration-500">
      Digital Marketing
    </p>
    <p className="hover:text-[#ff5b2e] cursor-pointer duration-500">
      Social Media
    </p>
    <p className="hover:text-[#ff5b2e] cursor-pointer duration-500">
      iOS App Development
    </p>
  </div>
  <div className="w-full md:w-1/2 lg:w-[25%] text-[#adb7c5] p-4">
    <h4 className="text-lg mb-2">&nbsp;</h4>
    <p className="hover:text-[#ff5b2e] cursor-pointer duration-500">
      Virtual Whatsapp Marketing
    </p>
    <p className="hover:text-[#ff5b2e] cursor-pointer duration-500">
      Virtual Text SMS
    </p>
    <p className="hover:text-[#ff5b2e] cursor-pointer duration-500">
      Virtual Voice Broadcast
    </p>
    <p className="hover:text-[#ff5b2e] cursor-pointer duration-500">Bulk SMS</p>
  </div>
</div>

                <div className="flex flex-col items-center mt-auto space-y-4 border-t border-gray-700 pt-4">
                    <div className="w-full p-14">
                        <div className="flex justify-evenly flex-wrap md:flex-nowrap items-center">
                            <div className="w-full flex justify-between  md:w-auto mb-14 md:mb-0">
                                <img
                                    src={image1}
                                    alt="Image 1"
                                    className="w-full h-auto  md:w-35 md:h-35 sm:w-50  sm:h-50"
                                />
                            </div>
                            <Button name={"Our Brochure ->"} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-auto space-y-4 border-t border-gray-700 pt-4">
                    <div className="bg-customGray text-[#adb7c5] p-4 flex flex-col md:flex-row md:justify-between items-center w-full space-y-4 md:space-y-0">
                        <p className="text-center md:text-left">
                            We are tracking any intention of piracy.
                        </p>
                        <p className="text-center md:text-right">
                            Copyright © 2024 Aradhyatechnologies. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
