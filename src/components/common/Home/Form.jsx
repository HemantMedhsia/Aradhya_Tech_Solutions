// Form.js
import React from "react";
import Button from "../Button"

const Form = () => {
    return (
        <div className="w-[100%] rounded-2xl bg-[#f7f7f7] h-auto px-8 py-6">
            <div className="w-full text-2xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
                <h2 className="text-[#ff5b2e]">
                    Please fill in the form below.
                </h2>
            </div>
            <div className="w-full flex flex-col">
                <div className="mb-4">
                    <input
                        placeholder=" Subject"
                        className="lg:w-[50%] h-12 rounded-lg w-full lg:px-2"
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-2 mb-4">
                    <input
                        placeholder="Full Name"
                        className="w-full lg:w-1/2 h-12 rounded-lg px-2 mb-2 lg:mb-0"
                    />
                    <input
                        placeholder="Email Address"
                        className="w-full lg:w-1/2 h-12 rounded-lg px-2"
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-2 mb-4">
                    <input
                        placeholder="Contact Number"
                        className="w-full lg:w-1/2 h-12 rounded-lg px-2"
                    />
                    <select className="w-full lg:w-1/2 h-12 rounded-lg px-2">
                        <option value="option1">Web Design</option>
                        <option value="option1">Graphic Design</option>
                        <option value="option1">App Development</option>
                        <option value="option1">Digital Marketing</option>
                        <option value="option1">Business Development</option>
                        <option value="option1">Others...</option>
                    </select>
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Message"
                        className="w-full h-24 rounded-lg px-2"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <input className="h-4 w-4 mr-2" type="checkbox" />
                    <p className="lg:text-lg sm:text-sm text-[#52525d]">
                        I agree to the Terms & Conditions of
                        Aradhyatechnologies.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Button name={"Send Your Enquiry"} width={"100%"} height={"60px"}/>
                <p className="mt-2 text-sm text-center text-[#52525D]">
                    We hate spam, and we respect your privacy.
                </p>
            </div>
        </div>
    );
};

export default Form;
