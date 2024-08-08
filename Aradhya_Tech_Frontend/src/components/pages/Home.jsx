import React, { useState } from "react";
import Button from "../common/Button";
import Slider from "react-slick";
import working_girl_svg from "../../assets/images/working_girl_svg.svg";
import serviceCardSvg1 from "../../assets/images/serviceCardSvg1.svg";
import serviceCardSvg2 from "../../assets/images/serviceCardSvg2.svg";
import serviceCardSvg3 from "../../assets/images/serviceCardSvg3.svg";
import serviceCardSvg4 from "../../assets/images/serviceCardSvg4.svg";
import serviceCardSvg5 from "../../assets/images/serviceCardSvg5.svg";
import serviceCardSvg6 from "../../assets/images/serviceCardSvg6.svg";
import serviceCardSvg7 from "../../assets/images/serviceCardSvg7.svg";
import NormalCard from "../common/Home/NormalCard";
import ServicesCard from "../common/Home/ServicesCard";
import WorkCard from "../common/Home/WorkCard";
import Ecommerce from "../../assets/images/OurRecentWork/E-commerce.png";
import Ngo1 from "../../assets/images/OurRecentWork/NGOWebsite.png";
import Ngo2 from "../../assets/images/OurRecentWork/NGOWeb2.png";
import Ngo3 from "../../assets/images/OurRecentWork/NGO3.png";
import Training from "../../assets/images/OurRecentWork/TrainingInstitute.png";
import Trust from "../../assets/images/OurRecentWork/TrustWebsiteAAS.png";
import android from "../../assets/images/Mobile/android.svg";
import ios from "../../assets/images/Mobile/ios.svg";
import java from "../../assets/images/Mobile/java.svg";
import pwa from "../../assets/images/Mobile/pwa.svg";
import ionic from "../../assets/images/Mobile/ionic.png";
import react from "../../assets/images/Mobile/react.svg";
import angular from "../../assets/images/Frontend/angular.svg";
import bootstrap from "../../assets/images/Frontend/bootstrap.svg";
import html5 from "../../assets/images/Frontend/html5.svg";
import npm from "../../assets/images/Frontend/Npm.svg";
import typescript from "../../assets/images/Frontend/typescript.svg";
import reactjs from "../../assets/images/Frontend/Reactjs.svg";
import mariadb from "../../assets/images/Database/MariaDB.svg";
import mongodb from "../../assets/images/Database/mongodb.svg";
import mysql from "../../assets/images/Database/mysql.svg";
import postgresql from "../../assets/images/Database/postgresql.svg";
import sqlite from "../../assets/images/Database/sqlite.svg";
import bigcom from "../../assets/images/CMS/bigcommerce.svg";
import shopify from "../../assets/images/CMS/shopify.svg";
import wordpress from "../../assets/images/CMS/wordpress.svg";
import wix from "../../assets/images/CMS/wix.svg";
import woo from "../../assets/images/CMS/woo.svg";
import Form from "./../common/Home/Form";
import { Link } from "react-router-dom";
import {
    CustomNextArrow,
    CustomPrevArrow,
} from "../../utility/customArrow/SliderArrow";
import Techlogo from "../common/Home/Techlogo";
import SquareButton from "../common/SquareButton";

const Home = () => {
    const [mobile, setMobile] = useState(true);
    const [frontend, setFrontend] = useState(false);
    const [database, setDatabase] = useState(false);
    const [cms, setcms] = useState(false);
    const [activeSection, setActiveSection] = useState("mission");

    const btndata = [
        { name: "contact", label: "+91 723588990", icon: "fa-solid fa-rocket" },
        // Add more sections as needed
    ];

    const handleclick = (val) => {
        if (val === "mobile") {
            setMobile(true);
            setFrontend(false);
            setDatabase(false);
            setcms(false);
        } else if (val === "frontend") {
            setMobile(false);
            setFrontend(true);
            setDatabase(false);
            setcms(false);
        } else if (val === "database") {
            setMobile(false);
            setFrontend(false);
            setDatabase(true);
            setcms(false);
        } else {
            setMobile(false);
            setFrontend(false);
            setDatabase(false);
            setcms(true);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="lg:mt-[8%]">
            {/* First Section */}
            <div className="flex flex-col lg:flex-row justify-between w-full px-6 lg:px-[120px] py-6 lg:py-[25px]">
                <div className="py-4 lg:py-[5%]">
                    <div className="w-full lg:w-[90%] h-full tracking-wide">
                        <h2 className="text-3xl lg:text-5xl text-[#30303c] font-bold mb-6 lg:mb-10">
                            Transforming Ideas into{" "}
                            <span className="underline decoration-[#e3b598]">
                                Digital Reality with Aradhya
                            </span>{" "}
                            Technologies
                        </h2>
                        <p className="text-lg lg:text-xl text-[#52525d]">
                            Aradhya Technologies: Empowering your digital
                            presence with dynamic web and app development, and
                            effective social media marketing solutions.
                        </p>
                        <div className="mt-6 lg:mt-10">
                            <Link
                                to={"/contact"}
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                <Button name={"Let's Talk"} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center lg:justify-end">
                    <img
                        src={working_girl_svg}
                        className="w-[300px] lg:w-[750px] h-auto"
                        alt="Working Girl"
                    />
                </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col lg:flex-row justify-between w-[100%] px-6 lg:px-[120px] py-6 lg:py-[25px] bg-[#fbf1ef]">
                <div className="py-4 lg:py-[5%] w-full lg:w-[50%]">
                    <div className="h-full tracking-wide">
                        <p className="text-lg lg:text-xl text-[#ff5b2e] mb-4 lg:mb-8">
                            ARADHYA TECHNOLOGIES
                        </p>
                        <h2 className="text-2xl lg:text-4xl text-[#30303c] font-bold mb-6 lg:mb-10">
                            Top-rated Social Media and Web & Mobile App
                            Development Company
                        </h2>
                        <p className="text-lg lg:text-xl text-[#52525d]">
                            Aradhya Technologies: Your trusted partner for
                            top-rated social media marketing and web & mobile
                            app development services providers. We combine
                            creativity, technical expertise, and strategic
                            insights to deliver innovative solutions that propel
                            your business forward. With a customer-centric
                            approach, we tailor our offerings to meet your
                            unique needs, ensuring remarkable results and client
                            satisfaction. Experience excellence in digital
                            transformation with Aradhya Technologies.
                        </p>
                        <div className="mt-6 lg:mt-10">
                            <Link  to={"/about"} onClick={()=>window.scrollTo(0,0)}>
                                <Button name={"About Us ->"} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[50%] mt-6 lg:mt-0">
                    <div className="flex flex-col lg:flex-row justify-between ml-6 lg:ml-14 mb-6 lg:mb-0">
                        <div className="flex flex-col mr-0 lg:mr-6 mt-0 lg:mt-20">
                            <NormalCard
                                title={"PROJECTS"}
                                value={"50+"}
                                desc={
                                    "Aradhya Technologies delivered fifty-plus successful projects around the world."
                                }
                            />
                            <NormalCard
                                title={"CLIENTS"}
                                value={"100+"}
                                desc={
                                    "Aradhya Technologies have 100+ satisfied happy clients of social media as well as web and applications."
                                }
                            />
                        </div>
                        <div className="mt-6 lg:mt-44 flex flex-col">
                            <NormalCard
                                title={"TEAM"}
                                value={"30+"}
                                desc={
                                    "Our team consists of highly qualified and knowledgeable professionals."
                                }
                            />
                            <NormalCard
                                title={"YEARS"}
                                value={"5+"}
                                desc={
                                    "We have been serving for over 5 years with our quality, processes, and work."
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div className="w-full flex flex-col justify-center items-center mt-5">
                <div className="w-full my-12 lg:w-1/2 flex flex-col justify-center items-center text-justify">
                    <h2 className="text-4xl px-3 text-gray-800 font-bold mb-4">
                        See what we can do for you
                    </h2>
                    <p className="text-lg px-4 text-gray-600 mb-5">
                        Unlock the potential of your business with our
                        comprehensive range of services. From website
                        development to mobile app creation, social media
                        marketing to digital strategies, our team at Aradhya
                        Technologies is ready to take your brand to new heights.
                        Discover how our expertise and dedication can empower
                        your online presence and drive meaningful results.
                        Explore the possibilities with us today.
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-11/12">
                        <div className="flex flex-wrap justify-evenly mb-6">
                            <ServicesCard
                                img={serviceCardSvg1}
                                title="Web Development"
                                desc="Elevate your online presence with expertly crafted websites by Aradhya Technologies."
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg2}
                                title="E-commerce Website Development"
                                desc="Unlock online success with our comprehensive E-commerce solutions at Aradhya Technologies."
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg3}
                                title="Website Re-Design"
                                desc="Revitalize your online presence with our expert website re-design services at Aradhya Technologies."
                                readmore={"Read More"}
                            />
                        </div>

                        <div className="flex flex-wrap justify-evenly mb-6">
                            <ServicesCard
                                img={serviceCardSvg4}
                                title="Android App Development"
                                desc="Powerful apps tailored to your needs, crafted by Aradhya Technologies."
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg4}
                                title="iOS App Development"
                                desc="Powerful apps tailored to your needs, crafted by Aradhya Technologies."
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg4}
                                title="Customizable"
                                desc="Powerful apps tailored to your needs, crafted by Aradhya Technologies."
                                readmore={"Read More"}
                            />
                        </div>

                        <div className="flex flex-wrap justify-evenly mb-6">
                            <ServicesCard
                                img={serviceCardSvg5}
                                title="Digital Marketing"
                                desc="Amplify your brand's reach and engage your audience with our impactful digital marketing strategies at Aradhya Technologies."
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg6}
                                title="Social Media"
                                desc="Revitalize your online presence with our expert website re-design services at Aradhya Technologies."
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg7}
                                title="Bulk SMS"
                                desc="Reach your target audience instantly and effectively with our efficient bulk SMS services at Aradhya Technologies."
                                readmore={"Read More"}
                            />
                        </div>
                    </div>
                </div>
                <div className="pb-8 lg:my-5 flex flex-col lg:flex-row items-center justify-center">
                    <div className="w-[100%] flex justify-center lg:w-auto text-center lg:text-left mb-4 lg:mb-0">
                        <h2 className="text-2xl lg:text-4xl font-bold text-[#30303c]">
                            Hire us for customized{" "}
                            <span className="underline decoration-[#e3b598]">
                                development
                            </span>
                        </h2>
                    </div>
                    <div className="mt-4 lg:ml-4 lg:mt-2">
                        <Link to={'/contact'} onClick={()=>window.scrollTo(0,0)}><Button name="Hire Now" /></Link>
                    </div>
                </div>
            </div>

            {/* Fourth Section */}
            <div className="bg-[#fbf1ef] w-full h-auto pb-6 pt-[2%] px-[6%]">
                <div className="flex flex-col items-center md:flex-row justify-between pt-6 px-8">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Our Recent Work
                    </h2>
                    <p className="text-lg font-semibold md:text-xl mt-4 cursor-pointer hover:text-[#ff5b2e] md:mt-0">
                        Hire Us
                    </p>
                </div>
                <div className="py-4 px-8">
                    <Slider {...settings}>
                        <WorkCard
                            img={Training}
                            desc={"Training Institute"}
                            title={"Tekriwal Education"}
                        />
                        <WorkCard
                            img={Ngo1}
                            desc={"NGO Website"}
                            title={"Indian Rural Environment Trust"}
                        />
                        <WorkCard
                            img={Ngo2}
                            desc={"NGO Website"}
                            title={"Narayan Seva Sthali"}
                        />
                        <WorkCard
                            img={Trust}
                            desc={"Trust Website"}
                            title={"AAS Foundation (Trust)"}
                        />
                        <WorkCard
                            img={Ngo3}
                            desc={"NGO Website"}
                            title={"Beti Raksha Dal"}
                        />
                        <WorkCard
                            img={Ecommerce}
                            desc={"E-Commerce Infographic Website"}
                            title={"Bajaj Techno World"}
                        />
                        <WorkCard
                            img={Trust}
                            desc={"Infographic Website Learning Management"}
                            title={"Software Solution Information Technology"}
                        />
                        <WorkCard
                            img={Ecommerce}
                            desc={"Technology E-Commerce"}
                            title={"Aditya Raj Technologies"}
                        />
                    </Slider>
                </div>
            </div>

            {/* Fifth section */}
            <div className="w-full flex flex-col items-center my-6 px-4 py-10">
                <div className="w-full lg:w-3/5 flex flex-col items-center text-justify">
                    <h2 className="text-3xl md:text-4xl px-3 text-gray-800 font-bold mb-4">
                        Technologies we work with
                    </h2>
                    <p className="text-base md:text-lg px-4 text-gray-600">
                        At Aradhya Technologies, we leverage cutting-edge
                        technologies to deliver exceptional digital solutions,
                        including web and app development. Our expertise spans
                        across a wide range of technologies, including but not
                        limited to: HTML5, CSS3, JavaScript, Python, PHP,
                        Laravel, Angular, Node JS, Express JS, iOS, Android, and
                        more. Stay at the forefront of innovation with our
                        tech-driven approach to empower your digital endeavors.
                    </p>
                </div>
                <div className="w-full flex flex-col items-center mt-6">
                    <div className="flex justify-center mb-4 w-full max-w-4xl">
                        <div className="w-full lg:w-3/4 border-b-2 border-black">
                            <ul className="flex flex-wrap justify-around lg:justify-between w-full text-base md:text-lg font-semibold">
                                <li
                                    className="cursor-pointer hover:text-[#ff5b2e]"
                                    onClick={() => handleclick("mobile")}
                                >
                                    Mobile
                                </li>
                                <li
                                    className="cursor-pointer hover:text-[#ff5b2e]"
                                    onClick={() => handleclick("frontend")}
                                >
                                    Front End
                                </li>
                                <li
                                    className="cursor-pointer hover:text-[#ff5b2e]"
                                    onClick={() => handleclick("database")}
                                >
                                    Database
                                </li>
                                <li
                                    className="cursor-pointer hover:text-[#ff5b2e]"
                                    onClick={() => handleclick("cms")}
                                >
                                    CMS
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        {mobile && (
                            <div className="flex flex-wrap justify-evenly lg:justify-between w-full max-w-4xl mb-4">
                                <Techlogo name={"iOS"} img={ios} />
                                <Techlogo name={"Android"} img={android} />
                                <Techlogo name={"Java"} img={java} />
                                <Techlogo name={"React Native"} img={react} />
                                <Techlogo name={"PWA"} img={pwa} />
                                <Techlogo name={"Ionic"} img={ionic} />
                            </div>
                        )}
                        {frontend && (
                            <div className="flex flex-wrap justify-evenly lg:justify-between w-full max-w-4xl mb-4">
                                <Techlogo name={"Angular JS"} img={angular} />
                                <Techlogo name={"ReactJs"} img={reactjs} />
                                <Techlogo name={"Npm"} img={npm} />
                                <Techlogo
                                    name={"Typescript"}
                                    img={typescript}
                                />
                                <Techlogo name={"HTML5"} img={html5} />
                                <Techlogo name={"Bootstrap"} img={bootstrap} />
                            </div>
                        )}
                        {database && (
                            <div className="flex flex-wrap justify-evenly lg:justify-between w-full max-w-4xl mb-4">
                                <Techlogo name={"MariaDB"} img={mariadb} />
                                <Techlogo name={"MongoDb"} img={mongodb} />
                                <Techlogo name={"MySQL"} img={mysql} />
                                <Techlogo
                                    name={"PostgreSQL"}
                                    img={postgresql}
                                />
                                <Techlogo name={"SQLite"} img={sqlite} />
                            </div>
                        )}
                        {cms && (
                            <div className="flex flex-wrap justify-evenly lg:justify-between w-full max-w-4xl mb-4">
                                <Techlogo name={"Shopify"} img={shopify} />
                                <Techlogo name={"Wordpress"} img={wordpress} />
                                <Techlogo name={"Wix"} img={wix} />
                                <Techlogo name={"Big Commerce"} img={bigcom} />
                                <Techlogo name={"Woo Commerce"} img={woo} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* sixth section  */}
            <div>
                {/* main div */}
                <div className="w-full h-auto py-10 flex flex-col lg:flex-row justify-evenly bg-[#ff5b2e]">
                    {/* inner main div */}
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="w-full lg:w-3/4 h-auto flex flex-col my-4 lg:my-8 items-center lg:items-start lg:pl-16">
                            <div className="text-center lg:text-left">
                                <p className="text-xl text-white my-4">
                                    INQUIRY
                                </p>
                                <h2 className="text-3xl lg:text-5xl text-gray-800 font-bold my-4">
                                    Let’s Get in Touch
                                </h2>
                            </div>
                            <div className="mt-8 lg:mt-[40%]">
                                <p className="text-lg text-white mb-2">
                                    Sales Department
                                </p>
                                <SquareButton
                                    sections={btndata}
                                    activeSection={activeSection}
                                />
                                <p className="text-lg text-gray-800 my-2">
                                    hr@aradhyatechnologies.in
                                </p>
                                <p className="text-lg text-gray-800">
                                    aradhya.onboarding@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center px-4">
                        <Form />
                    </div>
                </div>
            </div>

            {/* Seventh section */}
            <div>
                <div className="flex flex-col items-center py-[10%]">
                    <h2 className="text-4xl font-bold text-gray-800">India</h2>
                    <p className="text-xl font-semibold text-gray-800 my-2">
                        Varanasi, Uttar Pradesh 221010
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
