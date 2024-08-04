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
import img1 from "../../assets/images/Designservice/Img1.svg";
import branding from "../../assets/images/Designservice/branding.svg";
import mobileapp from "../../assets/images/Designservice/mobile-app.svg";
import ui from "../../assets/images/Designservice/ui.svg";
import appcode from "../../assets/images/Developmentservices/appcode.svg";
import buyonline from "../../assets/images/Developmentservices/buy-online.svg";
import coding from "../../assets/images/Developmentservices/coding.svg";
import servers from "../../assets/images/Developmentservices/servers.svg";
import ppc from "../../assets/images/Marketingservices/ppc.svg";
import ratings from "../../assets/images/Marketingservices/ratings.svg";
import searchEngine from "../../assets/images/Marketingservices/search-engine.svg";
import socialMedia from "../../assets/images/Marketingservices/social-media.svg";
import computer from "../../assets/images/Developmentprocess/computer.svg";
import creativity from "../../assets/images/Developmentprocess/creativity.svg";
import cs from "../../assets/images/Developmentprocess/customer-support.svg";
import pencil from "../../assets/images/Developmentprocess/pencil.svg";
import prototype from "../../assets/images/Developmentprocess/prototype.svg";
import qc from "../../assets/images/Developmentprocess/quality-check.svg";
import su from "../../assets/images/Developmentprocess/start-up.svg";
import one from "../../assets/images/Industryweserve/1.svg";
import two from "../../assets/images/Industryweserve/2.svg";
import three from "../../assets/images/Industryweserve/3.svg";
import four from "../../assets/images/Industryweserve/4.svg";
import five from "../../assets/images/Industryweserve/5.svg";
import six from "../../assets/images/Industryweserve/6.svg";
import seven from "../../assets/images/Industryweserve/7.svg";
import eight from "../../assets/images/Industryweserve/8.svg";
import nine from "../../assets/images/Industryweserve/9.svg";
import ten from "../../assets/images/Industryweserve/10.svg";
import eleven from "../../assets/images/Industryweserve/11.svg";
import twelve from "../../assets/images/Industryweserve/12.svg";

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
                <div className="lg:w-[90%] flex flex-col lg:flex-row lg:justify-evenly my-16">
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
                                img={img1}
                                title={"Website Design"}
                                desc={
                                    "Elevate your online presence with expertly crafted websites by Aradhya Technologies."
                                }
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={mobileapp}
                                title={"UI/UX Design"}
                                desc={
                                    "We create comprehensive and sophisticated yet simple to use interfaces for your web , app & social medias."
                                }
                                readmore={"Read More"}
                            />
                        </div>

                        <div className="flex justify-between my-6">
                            <ServicesCard
                                img={ui}
                                title={"Brandings"}
                                desc={
                                    "Amplify your brand's reach and engage your audience with our impactful digital marketing strategies at Aradhya Technologies."
                                }
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={branding}
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
                <div className="flex flex-col lg:flex-row px-4 py-8 lg:px-[9%] lg:py-[7%]">
                    <div className="w-full lg:w-[39%] mb-8 lg:mb-0">
                        <div className="w-full lg:w-[80%]">
                            <h2 className="text-2xl lg:text-4xl text-gray-800 font-bold tracking-wide leading-snug">
                                Our Professional Developers are ready to serve
                                you these services.
                            </h2>
                            <div className="my-6 lg:my-10">
                                <Button name={"Need a Developer"} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[61%]">
                        <h2 className="text-3xl lg:text-5xl font-bold pb-6 lg:pb-8">
                            Development Service
                        </h2>
                        <div className="flex flex-col lg:flex-row lg:justify-between">
                            <ServicesCard
                                img={appcode}
                                title={"NGO Web Development"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={coding}
                                title={"App Development"}
                                readmore={"Read More"}
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row lg:justify-between my-6">
                            <ServicesCard
                                img={buyonline}
                                title={"E-Commerce Development"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={servers}
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
                                img={searchEngine}
                                title={"Search Engine Optimization"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={socialMedia}
                                title={"Social Media Optimization"}
                                readmore={"Read More"}
                            />
                        </div>

                        <div className="flex justify-between my-6">
                            <ServicesCard
                                img={ppc}
                                title={"Lead Generation"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={ratings}
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
                            Marketing Bussiness
                        </h2>
                        <div className="flex justify-between">
                            <ServicesCard
                                img={searchEngine}
                                title={"Bulk SMS"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={socialMedia}
                                title={"Virtual Whatsapp Marketing"}
                                readmore={"Read More"}
                            />
                        </div>

                        <div className="flex justify-between my-6">
                            <ServicesCard
                                img={ppc}
                                title={"Virtual Text SMS"}
                                readmore={"Read More"}
                            />
                            <ServicesCard
                                img={ratings}
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
                                img={pencil}
                                title={"Requirment Gathering"}
                                number={"01"}
                            />
                        </div>
                        <div className="mx-4">
                            <NewBoxComponent
                                img={creativity}
                                title={"Design"}
                                number={"02"}
                            />
                        </div>
                        <div className="mx-4">
                            <NewBoxComponent
                                img={prototype}
                                title={"Portotype"}
                                number={"03"}
                            />
                        </div>
                        <div className="mx-4">
                            <NewBoxComponent
                                img={computer}
                                title={"Development"}
                                number={"04"}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="mx-4">
                            <NewBoxComponent
                                img={qc}
                                title={"Quality Assurance"}
                                number={"05"}
                            />
                        </div>
                        <div className="mx-4">
                            <NewBoxComponent
                                img={su}
                                title={"Deploymen"}
                                number={"06"}
                            />
                        </div>
                        <div className="mx-4">
                            <NewBoxComponent
                                img={cs}
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
                        <ToastCard img={one} title={"Real estate"} />
                        <ToastCard img={two} title={"Education"} />
                        <ToastCard img={three} title={"Event"} />
                        <ToastCard img={four} title={"NGO"} />
                    </div>
                    <div className="flex justify-evenly w-full mb-12">
                        <ToastCard img={five} title={"Finance"} />
                        <ToastCard img={six} title={"On-Demand"} />
                        <ToastCard img={seven} title={"Tour & Travels"} />
                        <ToastCard img={eight} title={"Transport"} />
                    </div>
                    <div className="flex justify-evenly w-full mb-12">
                        <ToastCard img={nine} title={"eCommerce"} />
                        <ToastCard img={ten} title={"Healthcare"} />
                        <ToastCard img={eleven} title={"Resturant"} />
                        <ToastCard img={twelve} title={"Grocery"} />
                    </div>
                </div>
            </div>

            {/* section 8 */}
            <CommonContactSection />
        </div>
    );
};

export default Services;
