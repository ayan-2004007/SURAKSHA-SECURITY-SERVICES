import React from 'react'
import career1 from "../assets/career1.png";
import career2 from "../assets/career2.png";
import career3 from "../assets/career3.png";
import career4 from "../assets/career4.png";
import career5 from "../assets/career5.png";


const CareerIntro = () => {
    return (
        <>
            <div className='w-full h-full bg-[#131313] pt-12 pb-16 px-3 md:px-5'>
                <h1 className='font-["otomanopee-one"] text-center md:text-start max-w-[550px] lg:max-w-[800px] xl:max-w-[1100px] mx-auto text-[26px] md:text-[38px] xl:text-[50px] text-white pb-14'>WHY JOIN US</h1>
                <div className='grid grid-cols-2 gap-x-4 sm:gap-x-8 xl:gap-x-0 gap-y-10 place-items-center text-[13px] md:text-sm lg:text-base sm:flex flex-wrap items-center justify-center xl:justify-between max-w-[1350px] mx-auto text-[#B1B1B1] text-center font-["otomanopee-one"]'>
                    <div className='max-w-[240px] space-y-2'>
                        <img src={career1} alt="" />
                        <div>
                            <p>COMPETITIVE SALARY</p>
                            <p>PACKAGE</p>
                        </div>
                    </div>
                    <div className='max-w-[240px] space-y-2'>
                        <img src={career2} alt="" />
                        <div>
                            <p>COMPREHENSIVE</p>
                            <p>TRAINING PROGRAMS</p>
                        </div>
                    </div>
                    <div className='max-w-[240px] space-y-2'>
                        <img src={career3} alt="" />
                        <div>
                            <p>CAREER GROWTH</p>
                            <p>OPPORTUNITIES</p>
                        </div>
                    </div>
                    <div className='max-w-[240px] space-y-2'>
                        <img src={career4} alt="" />
                        <div>
                            <p>HEALTH & SAFETY</p>
                            <p>BENEFITS</p>
                        </div>
                    </div>
                    <div className='max-w-[240px] space-y-2 col-span-2 mx-[26%] sm:mx-0'>
                        <img src={career5} alt="" />
                        <div>
                            <p>WORK WITH PRESTIGIOUS</p>
                            <p>CLIENTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerIntro