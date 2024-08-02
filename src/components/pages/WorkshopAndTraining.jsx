import image1 from "../../assets/images/workshopimg1.jpg";

const WorkshopAndTraining = () => {
    return (
        <div className="lg:mt-[8%]">
            {/*Section-1  */}
            <div className="relative w-full h-auto">
                <div className="w-full h-[80vh] overflow-hidden">
                    <img
                        className="z-0 w-full h-full object-cover object-top"
                        src={image1}
                        alt="Background"
                    />
                </div>

                <div className="absolute top-[80%] left-0 z-10 bg-orange-700 h-[100vh] w-full"></div>
                <div className="absolute top-0 left-0 z-20 bg-white h-full w-full opacity-70">
                    <div className="relative p-4">
                        <h1 className="text-xl font-bold">
                            Workshop and Trainings
                        </h1>
                        <p>
                            Aradhya Technologies offers impactful workshops and
                            training sessions to empower individuals and
                            businesses with cutting-edge skills and knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkshopAndTraining;
