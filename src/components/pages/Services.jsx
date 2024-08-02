import React from "react";

import cellphone from "../../assets/images/cellphoneSVG.svg";
import cartClick from "../../assets/images/cart-clickSVG.svg";
import worldWide from "../../assets/images/world-wide-webSVG.svg";
import serviceCardSvg1 from "../../assets/images/serviceCardSvg1.svg";
import serviceCardSvg2 from "../../assets/images/serviceCardSvg2.svg";
import serviceCardSvg3 from "../../assets/images/serviceCardSvg3.svg";
import ServicebtnCard from "../common/services/ServicebtnCard";
import Button from "../common/Button";
import NormalCard from "../common/Home/NormalCard";
import ServicesCard from "../common/Home/ServicesCard";
import NewBoxComponent from "../common/services/NewBoxComponent";
import ToastCard from "../common/services/ToastCard";
import CommonContactSection from "../layout/CommonContactSection";

const Services = () => {
    return (
        <div>
            {/* section 1 */}
            <div className="pt-[8%] pb-[4%] bg-[#fbf1ef] flex flex-col items-center">
                <div className="flex flex-col items-center w-[60%]">
                    <p className="text-xl my-8 text-[#ff5b2e] font-semibold ">
                        OUR SERVICES
                    </p>
                    <h2 className="text-5xl font-bold text-center tracking-wide text-gray-800 leading-[60px]">
                        Aradhya Technologies , Top-rated Social Media and Web &
                        Mobile App Development Company.
                    </h2>
                    <p className="text-lg text-[#52525d] font-semibold text-justify mt-12 mb-4">
                        Your trusted partner for top-rated social media
                        marketing and web & mobile app development services
                        providers. We combine creativity, technical expertise,
                        and strategic insights to deliver innovative solutions
                        that propel your business forward. With a
                        customer-centric approach, we tailor our offerings to
                        meet your unique needs, ensuring remarkable results and
                        client satisfaction. Experience excellence in digital
                        transformation with Aradhya Technologies.
                    </p>
                </div>
                <div className="w-[90%] flex justify-evenly my-16">
                    <ServicebtnCard
                        value={"150"}
                        title={"Mobile Apps Developed"}
                        img={cellphone}
                    />
                    <ServicebtnCard
                        value={"325"}
                        title={"Web site Developed"}
                        img={cartClick}
                    />
                    <ServicebtnCard
                        value={"50"}
                        title={"E-commerce Store Developed"}
                        img={worldWide}
                    />
                </div>
            </div>

            {/* section 2 */}
            <div className="h-auto bg-white">
                <div className="flex px-[9%] py-[7%]">
                    <div className="w-[39%]">
                        <div className="w-[80%]">
                            <h2 className="text-4xl text-gray-800 font-bold tracking-wide leading-snug">
                                We make the collaboration of people and
                                interface more intensive and exciting.
                            </h2>

                            <div className="my-10">
                                <Button name={"Need a Designer"} />
                            </div>
                        </div>
                    </div>
                    <div className="w-[61%]">
                        <h2 className="text-5xl font-bold pb-8">
                            Design Service
                        </h2>
                        <div className="flex justify-between">
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Website Design"}
                                desc={
                                    "Elevate your online presence with expertly crafted websites by Aradhya Technologies."
                                }
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"UI/UX Design"}
                                desc={
                                    "We create comprehensive and sophisticated yet simple to use interfaces for your web , app & social medias."
                                }
                                readmore={"Read More"}
                            />
                        </div>

                        <div className="flex justify-between my-6">
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Brandings"}
                                desc={
                                    "Amplify your brand's reach and engage your audience with our impactful digital marketing strategies at Aradhya Technologies."
                                }
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Mobile Apps Design"}
                                desc={
                                    "Powerful apps tailored to your needs, crafted by Aradhya Technologies."
                                }
                                readmore={"Read More"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <div className="h-auto bg-[#fbf1ef]">
                <div className="flex px-[9%] py-[7%]">
                    <div className="w-[39%]">
                        <div className="w-[80%]">
                            <h2 className="text-4xl text-gray-800 font-bold tracking-wide leading-snug">
                                Our Professional Developers are ready to serve
                                you these services.
                            </h2>

                            <div className="my-10">
                                <Button name={"Need a Developer"} />
                            </div>
                        </div>
                    </div>
                    <div className="w-[61%]">
                        <h2 className="text-5xl font-bold pb-8">
                            Development Service
                        </h2>
                        <div className="flex justify-between">
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"NGO Web Development"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"App Development"}
                                readmore={"Read More"}
                            />
                        </div>

                        <div className="flex justify-between my-6">
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"E-Commerce Development"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Cloud Based App Development"}
                                readmore={"Read More"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* section 4 */}
            <div className="h-auto bg-white">
                <div className="flex px-[9%] py-[7%]">
                    <div className="w-[39%]">
                        <div className="w-[80%]">
                            <h2 className="text-4xl text-gray-800 font-bold tracking-wide leading-snug">
                                Our Digital Marketing team is ready to help you
                                on these services.
                            </h2>

                            <div className="my-10">
                                <Button
                                    name={"Need a Marketing Expert"}
                                    width={"80%"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[61%]">
                        <h2 className="text-5xl font-bold pb-8">
                            Marketing Service
                        </h2>
                        <div className="flex justify-between">
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Search Engine Optimization"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Social Media Optimization"}
                                readmore={"Read More"}
                            />
                        </div>

                        <div className="flex justify-between my-6">
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Lead Generation"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Online Reputation Management"}
                                desc={
                                    "Elevate your online presence with expertly crafted websites by Aradhya Technologies."
                                }
                                readmore={"Read More"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* section 5 */}
            <div className="h-auto bg-white">
                <div className="flex px-[9%] ">
                    <div className="w-[39%]">
                        <div className="w-[80%]">
                            <h2 className="text-4xl text-gray-800 font-bold tracking-wide leading-snug">
                                Unleash the Power of Bulk SMS, Virtual Whatsapp,
                                Text SMS, and Voice Broadcast for Enhanced
                                Engagement
                            </h2>

                            <div className="my-10">
                                <Button
                                    name={"Promote Your Bussiness"}
                                    width={"70%"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[61%]">
                        <h2 className="text-5xl font-bold pb-8">
                            Marketing Service
                        </h2>
                        <div className="flex justify-between">
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Bulk SMS"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Virtual Whatsapp Marketing"}
                                readmore={"Read More"}
                            />
                        </div>

                        <div className="flex justify-between my-6">
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Virtual Text SMS"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={serviceCardSvg1}
                                title={"Virtual Voice Broadcast"}
                                readmore={"Read More"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* section 6 */}
            <div className="flex flex-col items-center bg-[#ffdbca]">
                <div className="flex flex-col w-[60%] items-center mt-20 mb-10">
                    <h2 className="text-4xl text-gray-800 font-bold">
                        Development Process We Follow
                    </h2>
                    <p className="text-xl text-[#52525d] font-semibold my-6">
                        Our design process follows a proven approach. We begin
                        with a deep understanding of your needs and create a
                        planning
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center mb-16">
                    <div className="flex justify-between mb-6">
                        <div className="mx-4">
                            <NewBoxComponent
                                img={serviceCardSvg2}
                                title={"Requirment Gathering"}
                                number={"01"}
                            />
                        </div>
                        <div className="mx-4">
                            <NewBoxComponent
                                img={serviceCardSvg2}
                                title={"Design"}
                                number={"02"}
                            />
                        </div>
                        <div className="mx-4">
                            <NewBoxComponent
                                img={serviceCardSvg2}
                                title={"Portotype"}
                                number={"03"}
                            />
                        </div>
                        <div className="mx-4">
                            <NewBoxComponent
                                img={serviceCardSvg2}
                                title={"Development"}
                                number={"04"}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="mx-4">
                            <NewBoxComponent
                                img={serviceCardSvg2}
                                title={"Quality Assurance"}
                                number={"05"}
                            />
                        </div>
                        <div className="mx-4">
                            <NewBoxComponent
                                img={serviceCardSvg2}
                                title={"Deploymen"}
                                number={"06"}
                            />
                        </div>
                        <div className="mx-4">
                            <NewBoxComponent
                                img={serviceCardSvg2}
                                title={"Support & Maintenance"}
                                number={"07"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* section 7 */}
            <div className="flex flex-col items-center w-full bg-[#fff]">
                <div className="flex flex-col w-[60%] items-center mt-20 mb-10">
                    <h2 className="text-4xl text-gray-800 font-bold">
                        Industries We Serve
                    </h2>
                    <p className="text-xl text-[#52525d] font-semibold my-4">
                        we work on the following Industries.
                    </p>
                </div>
                <div className="w-full">
                    <div className="flex justify-evenly w-full mb-12">
                        <ToastCard
                            img={serviceCardSvg1}
                            title={"Real estate"}
                        />
                        <ToastCard img={serviceCardSvg1} title={"Education"} />
                        <ToastCard img={serviceCardSvg1} title={"Event"} />
                        <ToastCard img={serviceCardSvg1} title={"NGO"} />
                    </div>
                    <div className="flex justify-evenly w-full mb-12">
                        <ToastCard img={serviceCardSvg1} title={"Finance"} />
                        <ToastCard img={serviceCardSvg1} title={"On-Demand"} />
                        <ToastCard
                            img={serviceCardSvg1}
                            title={"Tour & Travels"}
                        />
                        <ToastCard img={serviceCardSvg1} title={"Transport"} />
                    </div>
                    <div className="flex justify-evenly w-full mb-12">
                        <ToastCard img={serviceCardSvg1} title={"eCommerce"} />
                        <ToastCard img={serviceCardSvg1} title={"Healthcare"} />
                        <ToastCard img={serviceCardSvg1} title={"Resturant"} />
                        <ToastCard img={serviceCardSvg1} title={"Grocery"} />
                    </div>
                </div>
            </div>

            {/* section 8 */}
            <CommonContactSection/>
            
        </div>
    );
};

export default Services;
