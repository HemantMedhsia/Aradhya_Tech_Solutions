import { React, useState } from "react";
import image1 from "../../assets/images/Illustration (1).png";
import CountUp from "react-countup";
import image2 from "../../assets/images/teamwork.png";
import Button from "../common/Button";
import Aboutcard from "../common/Home/ServicesCard";
import imgabout1 from "../../assets/images/aboutCardSvg1.svg";
import imgabout2 from "../../assets/images/aboutCardSvg2.svg";
import imgabout3 from "../../assets/images/aboutCardSvg3.svg";
import imgabout4 from "../../assets/images/aboutCardSvg4.svg";
import imgabout5 from "../../assets/images/aboutCardSvg5.svg";
import imgabout6 from "../../assets/images/aboutCardSvg6.svg";
import SquareButton from "../common/SquareButton";

export const About = () => {
    const [activeSection, setActiveSection] = useState("mission");

    const btndata = [
        { name: "mission", label: "Our Mission", icon: "fa-solid fa-rocket" },
        { name: "vision", label: "Our Vission", icon: "fa-solid fa-rocket" },
        {
            name: "commitment",
            label: "Our Commitment",
            icon: "fa-solid fa-rocket",
        },
        { name: "values", label: "Our Values", icon: "fa-solid fa-rocket" },
    ];

    // button styling
    const buttonClass = (section) =>
        `rounded-lg h-[70px] w-[250px] text-center font-bold py-2 px-2 transition-colors duration-300  ${
            activeSection === section
                ? "bg-red-200 text-[#ff5b2e]" // Active button
                : "bg-white text-[#52525d] " // Inactive button
        } ${
            activeSection === section
                ? "" // No hover effect on active button
                : "hover: cursor-pointer" // Hover effects on inactive buttons
        }`;

    return (
        <div>
            {/* section 1 */}
            <div className="flex flex-col md:flex-row justify-between py-4 px-4 md:px-12">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 mr-4">
                    <div>
                        <p className="mb-6 text-[#ff5b2e] font-bold">
                            <i
                                className="fa fa-building m-1"
                                aria-hidden="true"
                            ></i>{" "}
                            WHO WE ARE
                        </p>
                        <h2 className="text-2xl md:text-4xl font-bold">
                            We are a creative digital agency based in India.
                        </h2>
                        <p className="text-base md:text-lg my-6 text-justify">
                            As a top-rated social media, web, and mobile app
                            development company, we at Aradhya Technologies are
                            dedicated to delivering exceptional digital
                            solutions. With a proven track record of excellence,
                            we combine our expertise, innovation, and
                            customer-centric approach to help businesses thrive
                            in the digital landscape.
                        </p>
                        <p className="text-base md:text-lg my-6 text-justify">
                            Our team of skilled professionals specializes in
                            creating captivating social media strategies that
                            drive engagement, boost brand awareness, and
                            generate tangible results. We harness the power of
                            various social media platforms to connect businesses
                            with their target audience and foster meaningful
                            relationships.
                        </p>
                        <p className="text-base md:text-lg my-6 text-justify">
                            Our team of skilled professionals specializes in
                            creating captivating social media strategies that
                            drive engagement, boost brand awareness, and
                            generate tangible results. We harness the power of
                            various social media platforms to connect businesses
                            with their target audience and foster meaningful
                            relationships.
                        </p>
                    </div>
                </div>
                <div className="w-full ml-4 md:w-1/2 flex justify-center">
                    <img
                        src={image1}
                        className="w-full h-auto"
                        alt="Agency Image"
                    />
                </div>
            </div>

            {/* Section 2 */}
            <div>
                <div className="flex flex-col lg:flex-row bg-gray-100 ">
                    <div className="text-[#ff5b2e] font-bold lg:w-[30%] my-3 text-xl flex justify-center lg:mx-14 lg:mt-14 ">
                        <h1>WHAT WE DO</h1>
                    </div>
                    <div className=" lg:w-[70%] mx-4 lg:mx-14 lg:my-14">
                        <h1 className="text-2xl font-bold text-[#131316]">
                            Aradhya Technologies is a full-service web, app and
                            digital marketing company based in India.
                        </h1>
                        <p className="my-4 text-lg text-justify text-[#52525d] mt-6">
                            Aradhya Technologies is a leading digital solutions
                            provider that empowers businesses to thrive in the
                            digital age. With a focus on innovation, creativity,
                            and customer satisfaction, we offer a comprehensive
                            range of services including web development, mobile
                            app development, social media marketing, and more.
                            Our team of experts combines technical expertise
                            with strategic insights to deliver exceptional
                            digital experiences tailored to meet our clients'
                            specific needs. With a customer-centric approach, we
                            collaborate closely with our clients to understand
                            their goals and create customized solutions that
                            drive growth, enhance brand visibility, and maximize
                            online presence. Whether you are a startup, small
                            business, or enterprise, Aradhya Technologies is
                            committed to delivering outstanding results that
                            propel your business forward in the dynamic digital
                            landscape
                        </p>
                        <p className="my-4 text-lg text-justify mt-6 text-[#52525d]">
                            To learn more about our approach to business and
                            work, feel free to hop on over to our Open Contact
                            Page.
                        </p>
                        <div className="flex flex-col lg:justify-between lg:flex-row w-[100%] mr-8">
                            <div className="flex justify-between lg:w-[45%] mb-4 lg:mb-0">
                                <div className="w-full sm:w-1/2 lg:w-auto flex flex-col items-center">
                                    <p className="text-[#52525d] text-xl">
                                        Complete Projects
                                    </p>
                                    <p className="text-4xl text-[#ff5b2e] font-bold mt-2">
                                        <CountUp end={100} duration={3} />+
                                    </p>
                                </div>
                                <div className="w-full sm:w-1/2 lg:w-auto flex flex-col items-center">
                                    <p className="text-[#52525d] text-xl">
                                        Happy Clients
                                    </p>
                                    <p className=" text-4xl text-[#ff5b2e] font-bold mt-2">
                                        <CountUp end={150} duration={3} />+
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between mb-4 lg:w-[45%] lg:mb-0">
                                <div className="w-full sm:w-1/2 lg:w-auto flex flex-col items-center">
                                    <p className="text-[#52525d] text-xl">
                                        Expert Team
                                    </p>
                                    <p className="text-4xl font-bold text-[#ff5b2e] mt-2">
                                        <CountUp end={30} duration={3} />+
                                    </p>
                                </div>
                                <div className="w-full sm:w-1/2 lg:w-auto flex flex-col items-center">
                                    <p className="text-[#52525d] text-xl">
                                        Success Years
                                    </p>
                                    <p className="text-4xl font-bold text-[#ff5b2e] mt-2">
                                        <CountUp end={5} duration={3} />+
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ṣection-3 */}
            <div className="flex flex-col pt-14 pb-14 lg:flex-row bg-[#fbf1ef]">
                {/* Button Section */}
                <div className="w-full lg:w-1/3 flex lg:flex-col lg:justify-start overflow-x-auto p-4 lg:p-6">
                    {/* Container for horizontal scrolling on small screens */}
                    <div className="flex flex-nowrap lg:flex-col   lg:items-start lg:space-y-2">
                        <SquareButton
                            sections={btndata}
                            activeSection={activeSection}
                            onSectionChange={setActiveSection}
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/3 p-4 lg:p-4">
                    {activeSection === "mission" && (
                        <div>
                            <h1 className="text-3xl font-bold pt-1 pl-4">
                                Our Mission
                            </h1>
                            <p className="text-justify text-lg mt-4 pl-4 pr-4">
                                At Aradhya Technologies, our mission is to
                                empower businesses and individuals by harnessing
                                the power of digital technology. We are
                                committed to delivering exceptional solutions
                                that drive growth, enhance online presence, and
                                create memorable experiences. With a focus on
                                innovation, creativity, and customer
                                satisfaction, we strive to exceed expectations
                                and provide measurable results. Our mission is
                                to be a trusted partner, guiding our clients
                                through the ever-evolving digital landscape, and
                                helping them achieve their goals. Through
                                collaboration, expertise, and a customer-centric
                                approach, we are dedicated to transforming ideas
                                into reality and making a positive impact in the
                                digital world.
                            </p>
                        </div>
                    )}
                    {activeSection === "vision" && (
                        <div>
                            <h1 className="text-3xl font-bold pt-1 pl-4">
                                Our Vision
                            </h1>
                            <p className="text-justify text-lg mt-4 pl-4 pr-4">
                                At Aradhya Technologies, our vision is to be a
                                global leader in digital innovation and
                                technology solutions. We envision a future where
                                businesses and individuals harness the full
                                potential of digital technology to drive
                                success, connect with their audiences, and make
                                a positive impact on society. Our vision is to
                                be at the forefront of this transformation,
                                constantly pushing boundaries, and delivering
                                cutting-edge solutions that exceed expectations.
                                We aim to build long-term partnerships with our
                                clients, understanding their unique needs and
                                goals. Our vision is to be a trusted advisor,
                                providing strategic insights and innovative
                                solutions that empower our clients to stay ahead
                                in the digital landscape. We strive to be
                                recognized for our exceptional quality,
                                professionalism, and unwavering commitment to
                                customer satisfaction. With our vision as our
                                guiding force, we continuously invest in talent,
                                embrace emerging technologies, and foster a
                                culture of creativity and collaboration.
                            </p>
                        </div>
                    )}
                    {activeSection === "commitment" && (
                        <div>
                            <h1 className="text-3xl font-bold pt-1 pl-4">
                                Our Commitment
                            </h1>
                            <p className="text-justify text-lg mt-4 pl-4 pr-4">
                                At Aradhya Technologies, our commitment is to
                                deliver excellence in every aspect of our
                                services. We are dedicated to providing our
                                clients with the highest level of quality,
                                professionalism, and customer satisfaction. Our
                                commitment starts with understanding the unique
                                needs and goals of each client. We believe in
                                building strong and collaborative relationships,
                                working closely with our clients to ensure their
                                vision is realized. We take the time to listen,
                                strategize, and tailor our solutions to meet
                                their specific requirements. We are committed to
                                staying at the forefront of technology and
                                innovation. We continuously invest in our team's
                                skills and knowledge, staying up-to-date with
                                the latest trends and advancements in the
                                digital landscape. By leveraging cutting-edge
                                technologies, best practices, and industry
                                standards, we ensure that our solutions are of
                                the highest quality, efficient, and
                                future-proof.
                            </p>
                        </div>
                    )}
                    {activeSection === "values" && (
                        <div>
                            <h1 className="text-3xl font-bold pt-1 pl-4">
                                Core Values
                            </h1>
                            <p className="text-justify text-lg mt-4 pl-4 pr-4">
                                At Aradhya Technologies, our core values guide
                                our actions, decisions, and interactions. They
                                define who we are as a company and how we
                                operate:
                                <br />
                                <strong>Excellence:</strong> We strive for
                                excellence in everything we do. We are committed
                                to delivering high-quality solutions,
                                exceptional service, and outstanding results. We
                                continuously challenge ourselves to exceed
                                expectations and set new standards of
                                excellence.
                                <br />
                                <strong>Innovation:</strong> We embrace
                                innovation as the driving force behind our
                                success. We are constantly exploring new
                                technologies, trends, and approaches to stay at
                                the forefront of the digital landscape. We
                                encourage creativity and out-of-the-box thinking
                                to develop innovative solutions that make a real
                                difference.
                                <br />
                                <strong>Collaboration:</strong> Collaboration is
                                at the heart of our culture. We believe in the
                                power of teamwork and the strength that comes
                                from diverse perspectives. We work closely with
                                our clients, listen to their needs, and foster a
                                collaborative environment within our team to
                                achieve shared goals.
                                <br />
                                <strong>Integrity:</strong> We uphold the
                                highest ethical standards and operate with
                                integrity in all aspects of our business. We are
                                transparent, honest, and accountable for our
                                actions. We value trust and strive to build
                                long-term relationships based on mutual respect
                                and integrity.
                                <br />
                                <strong>Customer Focus:</strong> Our clients are
                                at the center of everything we do. We are
                                dedicated to understanding their unique needs,
                                providing personalized solutions, and delivering
                                exceptional customer service. We are committed
                                to their success and go above and beyond to
                                exceed their expectations.
                                <br />
                                <strong>Continuous Learning:</strong> We believe
                                in the power of knowledge and continuous
                                learning. We invest in the professional growth
                                and development of our team, ensuring that we
                                stay ahead of the curve. We embrace a culture of
                                learning, adaptability, and continuous
                                improvement to provide the best solutions to our
                                clients.
                                <br />
                                These core values are the foundation of our
                                company and guide us as we strive to make a
                                positive impact on our clients, employees, and
                                the digital world.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Section-4 */}

            <div className="h-full">
                <div className="text-center mt-16 ">
                    <h1 className="text-3xl text-[#30303c] mx-1 font-bold ">
                        Transparency and Ethics
                    </h1>
                    <p className="mt-4 text-[#52525d] mx-3 text-base">
                        Committed to transparent and ethical practices in all
                        our endeavors.
                    </p>
                </div>
            </div>

            {/* Section-5 */}
            <div className="w-full flex justify-center">
                <div className="w-11/12 ml-6 mb-2">
                    <div className="flex flex-wrap justify-between mb-6">
                        <div className="mt-5">
                            <Aboutcard
                                img={imgabout1}
                                title={"Client-Centric Approach"}
                                desc={
                                    "Putting clients at the heart of our approach, delivering tailored solutions with a client-centric focus."
                                }
                            />
                        </div>

                        <div className="mt-5">
                            <Aboutcard
                                img={imgabout2}
                                title={"Service Delivered in Time"}
                                desc={
                                    "Ensuring timely delivery of services, meeting deadlines with efficiency and reliability."
                                }
                            />
                        </div>

                        <div className="mt-5">
                            {" "}
                            <Aboutcard
                                img={imgabout3}
                                title={"Effective Collaboration"}
                                desc={
                                    "Fostering effective collaboration to drive success, working closely with clients to achieve shared goals."
                                }
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between mb-6 ">
                        <div className="mt-5">
                            <Aboutcard
                                img={imgabout4}
                                title={"Employee Benefits"}
                                desc={
                                    "At Aradhya Technologies, we value our employees and strive to provide comprehensive employee benefits."
                                }
                            />
                        </div>

                        <div className="mt-5">
                            {" "}
                            <Aboutcard
                                img={imgabout5}
                                title={"Team Work"}
                                desc={
                                    "Promoting a culture of teamwork, collaboration, and synergy, where our diverse talents come together to achieve remarkable results."
                                }
                            />
                        </div>

                        <div className="mt-5">
                            <Aboutcard
                                img={imgabout6}
                                title={"Quality of Service"}
                                desc={
                                    "Committed to delivering exceptional quality of service, ensuring our clients receive solutions that exceed their expectations."
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section -6 */}
            <div className="bg-[#fbf1ef] flex flex-col md:flex-row">
                <div className="flex flex-col items-center md:items-start md:ml-5 md:mt-10 md:w-1/2 p-5">
                    <h1 className="mt-10 text-[#ff5b2e] text-lg text-center md:text-left">
                        CAREER
                    </h1>
                    <h1 className="tracking-wider mt-5 text-2xl md:text-4xl font-semibold text-[#30303c] text-center md:text-left">
                        Teamwork is the ability to work together toward a common
                        vision.
                    </h1>
                    <div className="mt-10 flex justify-center md:justify-start w-full">
                        <Button name={"Join Our Team"} />
                    </div>
                </div>
                <div className="mt-10 md:mt-14 md:w-1/2 p-5">
                    <img src={image2} className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};
