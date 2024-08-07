import image1 from "../../assets/images/workshopimg2.jpeg";
import HireUsForm from "../common/Home/HireUsForm";
import image2 from "../..//assets/images/tech1.svg";
import image3 from "../..//assets/images/tech2.svg";
import image4 from "../..//assets/images/tech3.svg";
import image5 from "../..//assets/images/tech4.svg";
import image6 from "../..//assets/images/tech5.svg";
import WorkshopCard from "../common/Home/WorkshopCard";
import workimg1 from "../..//assets/images/workshopimg3.jpg";
import workimg2 from "../..//assets/images/workshopimg4.jpg";
import workimg3 from "../..//assets/images/workshopimg1.jpg";
import workimg4 from "../..//assets/images/workshopimg5.jpg";
import workimg5 from "../..//assets/images/workshopimg6.jpg";
import workimg6 from "../..//assets/images/workshopimg7.jpg";
import Button from "../common/Button";
import image7 from "../..//assets/images/workshopSvg.svg";
import { useState, useEffect } from "react";

const WorkshopAndTraining = () => {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [technologyTopic, setTechnologyTopic] = useState("");
    const [institute, setInstitute] = useState("");
    const [address, setAddress] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData({
            name,
            mobileNumber,
            email,
            technologyTopic,
            institute,
            address,
        });
        // Optionally clear the form fields
        setName("");
        setMobileNumber("");
        setEmail("");
        setTechnologyTopic("");
        setInstitute("");
        setAddress("");
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    // Use useEffect to handle body class for disabling scrolling
    useEffect(() => {
        if (showForm) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        // Cleanup function to remove class when component is unmounted or showForm changes
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [showForm]);

    return (
        <div className="">
            {/*Section-1  */}
            <div className="relative h-[450px]">
                {/* Background Image */}
                <img
                    src={image1}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Overlay Color */}
                <div className="absolute inset-0 bg-[#ffff] opacity-70"></div>{" "}
                {/* Adjust opacity for better visibility */}
                {/* Subtle Blur Effect */}
                <div className="absolute inset-0 backdrop-blur-sm"></div>
                {/* Centered Text */}
                <div className="relative flex flex-col items-center justify-center h-full text-center space-y-4 px-4">
                    <h1 className="text-[#30303c] text-5xl font-bold">
                        Workshop and Trainings
                    </h1>
                    <p className="text-[#52525d] text-justify text-lg  max-w-2xl">
                        Aradhya Technologies offers impactful workshops and
                        training sessions to empower individuals and businesses
                        with cutting-edge skills and knowledge.
                    </p>
                </div>
            </div>

            {/* Section --2 */}
            <div className="h-auto bg-[#fbf1ef] py-16 px-4 md:px-10">
                {/* Section 2 first part */}
                <div className="md:flex pb-6">
                    <div className="w-full md:w-[40%] mb-10 md:mb-0">
                        <h1 className="text-[#30303c] text-3xl md:text-4xl font-bold">
                            Quality is more important than quantity
                        </h1>
                        <p className="text-[#52525d] text-lg mt-2">
                            Take a look at our latest workshops & Trainings.
                        </p>
                    </div>
                    <div className="w-full md:w-[60%]">
                        <h1 className="text-2xl text-[#30303c] font-bold">
                            Check our technologies.
                        </h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 mt-10">
                            <div className="flex flex-col ">
                                <a>
                                    <img
                                        className="h-[45px] w-[45px]"
                                        src={image2}
                                    />
                                    <span>React JS</span>
                                </a>
                            </div>
                            <div className="flex flex-col ">
                                <a>
                                    <img
                                        className="h-[45px] w-[45px]"
                                        src={image3}
                                    />
                                    <span>JAVA</span>
                                </a>
                            </div>
                            <div className="flex flex-col ">
                                <a>
                                    <img
                                        className="h-[45px] w-[45px]"
                                        src={image4}
                                    />
                                    <span>Node Js</span>
                                </a>
                            </div>
                            <div className="flex flex-col ">
                                <a>
                                    <img
                                        className="h-[45px] w-[45px]"
                                        src={image5}
                                    />
                                    <span>Angular</span>
                                </a>
                            </div>
                            <div className="flex flex-col ">
                                <a>
                                    <img
                                        className="h-[45px] w-[45px]"
                                        src={image6}
                                    />
                                    <span>Wordpress</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 second part  */}
                <div className="flex flex-wrap justify-center pt-16">
                    <div className="p-3">
                        <WorkshopCard
                            imageUrl={workimg1}
                            title={"Data analysist Workshop"}
                        />
                    </div>
                    <div className="p-3">
                        <WorkshopCard
                            imageUrl={workimg2}
                            title={"Logical ER Diagram"}
                        />
                    </div>
                    <div className="p-3">
                        <WorkshopCard
                            imageUrl={workimg3}
                            title={"Full Stack Development : MERN"}
                        />
                    </div>
                    <div className="p-3">
                        <WorkshopCard
                            imageUrl={workimg4}
                            title={"MS Office Automation"}
                        />
                    </div>
                    <div className="p-3">
                        <WorkshopCard
                            imageUrl={workimg5}
                            title={"Seven Days Workshop On SAP"}
                        />
                    </div>
                    <div className="p-3">
                        <WorkshopCard
                            imageUrl={workimg6}
                            title={"Workshop on JAVA"}
                        />
                    </div>
                </div>
            </div>

            {/* Section-3  */}

            <div className="flex flex-col lg:flex-row my-16">
                <div className="w-full lg:w-[50%] px-4 lg:px-10 text-left lg:text-left">
                    <h1 className="text-3xl lg:text-4xl font-bold text-[#30303c] leading-tight">
                        Hire us for Workshop & Training
                    </h1>
                    <p className="text-[#52525d] mt-3 sm:pl-3 lg:pl-0 text-justify text-lg tracking-tight">
                        Get in touch with Aradhya Technologies to hire us for
                        impactful Workshop & Training sessions that will equip
                        individuals and businesses with valuable skills and
                        knowledge to thrive in the digital era.
                    </p>
                    <div className="mt-10 flex justify-center lg:justify-start lg:text-lg sm:text-sm">
                        <Button
                            name="Hire us for Workshop"
                            width="50%"
                            height="60px"
                            onClick={toggleForm}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-[45%] px-4 mt-10 lg:mt-0">
                    <img src={image7} className="w-full h-auto" />
                </div>
            </div>

            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-5 ">
                    <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
                    <div className="relative bg-[#fbf1ef] p-4 pt-6 pb-8 border border-gray-300 shadow-md rounded-xl sm:max-w-sm lg:max-w-lg  mx-auto w-full z-10 overflow-y-auto max-h-full my-4">
                        <button
                            onClick={toggleForm}
                            className="absolute top-2 right-2 text-red-500 text-3xl"
                        >
                            ×
                        </button>
                        <h2 className="text-md font-bold mb-4">Hire Us</h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="mb-2">
                                <label
                                    className="block  text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className=" border-none  appearance-none  rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="mobileNumber"
                                >
                                    Mobile Number
                                </label>
                                <input
                                    className=" appearance-none  border-none rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="mobileNumber"
                                    type="tel"
                                    value={mobileNumber}
                                    onChange={(event) =>
                                        setMobileNumber(event.target.value)
                                    }
                                    placeholder="Enter your mobile number"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className=" appearance-none border-none rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="example@gmail.com"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="technologyTopic"
                                >
                                    Technology / Topic
                                </label>
                                <input
                                    className=" appearance-none border-none rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="technologyTopic"
                                    type="text"
                                    value={technologyTopic}
                                    onChange={(event) =>
                                        setTechnologyTopic(event.target.value)
                                    }
                                    placeholder="Enter technology or topic"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="institute"
                                >
                                    Institute/College/University
                                </label>
                                <input
                                    className=" appearance-none border-none rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="institute"
                                    type="text"
                                    value={institute}
                                    onChange={(event) =>
                                        setInstitute(event.target.value)
                                    }
                                    placeholder="Enter institute/college/university"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                    htmlFor="address"
                                >
                                    Address
                                </label>
                                <textarea
                                    className=" appearance-none border-none rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="address"
                                    value={address}
                                    onChange={(event) =>
                                        setAddress(event.target.value)
                                    }
                                    placeholder="Enter your address"
                                />
                            </div>
                            <div className="text-sm text-center flex justify-center ">
                                {" "}
                                <Button
                                    name={"Submit Your Query Request"}
                                    width={"65%"}
                                    height={"45px"}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkshopAndTraining;
