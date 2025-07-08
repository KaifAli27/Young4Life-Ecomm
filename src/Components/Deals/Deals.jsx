import { Link } from "react-router";
import Slider from "../Slider/Slider";

const Deals = () => {
    return (
        <div className="w-full min-h-[782px] bg-white mt-[100px] py-10">
            <div className="lg:container mx-auto">
                <div className="flex justify-between gap-8">

                    
                    <div className="deals_wrapper">
                        <h3 className="text-5xl text-[#484848] font-normal capitalize mb-5">deals of the week</h3>
                        <p className="text-base tex-[#8a8a8a] font-poppins font-normal mb-10 max-w-[444px] w-full h-auto">Clearing out our spring inventory in this limited time only flash sale, flat 10% off all items with addition discounts on some. Limited sizes available.</p>
                        <Link to={'/shop'} className="text-base text-white font-poppins font-normal capitalize px-8 py-2.5 bg-black rounded-lg">buy now</Link>

                        <div className="mt-10">
                            <h5 className="text-[27px] text-[#484848] font-poppins font-medium capitalize mb-4">hurry, before it's too late!</h5>
                            <div className="flex items-center gap-8 cursor-pointer">
                                <div className="days flex flex-col gap-2.5 items-center justify-center">
                                    <h5 className="w-[76px] h-[76px] rounded-sm bg-white shadow text-[#484848] text-3xl font-normal flex items-center justify-center">01</h5>
                                    <p className="text-[22px] text-[#484848] font-poppins font-normal capitalize">days</p>
                                </div>

                                {/* hr box  */}
                                <div className="hr flex flex-col gap-2.5 items-center justify-center">
                                    <h5 className="w-[76px] h-[76px] rounded-sm bg-white shadow text-[#484848] text-3xl font-normal flex items-center justify-center">03</h5>
                                    <p className="text-[22px] text-[#484848] font-poppins font-normal capitalize">hr</p>
                                </div>

                                {/* mins box  */}
                                <div className="mins flex flex-col gap-2.5 items-center justify-center">
                                    <h5 className="w-[76px] h-[76px] rounded-sm bg-white shadow text-[#484848] text-3xl font-normal flex items-center justify-center">07</h5>
                                    <p className="text-[22px] text-[#484848] font-poppins font-normal capitalize">mins</p>
                                </div>

                                {/* secs box  */}
                                <div className="secs flex flex-col gap-2.5 items-center justify-center">
                                    <h5 className="w-[76px] h-[76px] rounded-sm bg-white shadow text-[#484848] text-3xl font-normal flex items-center justify-center">40</h5>
                                    <p className="text-[22px] text-[#484848] font-poppins font-normal capitalize">sec</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    

                    <Slider />

                </div>
            </div>
        </div>
    );
};

export default Deals;