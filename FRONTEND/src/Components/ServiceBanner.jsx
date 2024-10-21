import React from 'react'
import services_banner from "../assets/services_banner.png";


const ServicesBanner = () => {
    return (
        <>
            <div className="lg:flex lg:flex-row-reverse md:flex-col mb-[120px] lg:-mb-[120px] 2xl:-mb-[300px]">
                
                <div className="2xl:h-[1000px] relative overflow-hidden ml-auto xl:h-[800px] lg:h-[700px] lg:w-full md:h-[480px] md:w-[750px] md:mx-auto h-[250px] w-[350px] mx-auto">
                    <div className="absolute 2xl:bottom-[300px] 2xl:-right-96 xl:bottom-[180px] xl:-right-56 lg:bottom-[150px] lg:-right-44 md:bottom-0 md:right-0 right-0 bottom-[12px]">
                        <div className="relative">
                            <img src={services_banner} className="2xl:w-[1150px] object-cover xl:w-[800px] lg:w-[700px] md:w-[750px] [350px] w-[350px]" alt="" />
                        </div>
                    </div>
                </div>

                <div className='2xl:px-20 flex flex-col w-full max-h-[580px] xl:max-h-[700px] item-center justify-center gap-7 xl:px-0 xl:pl-10 lg:pl-7 lg:text-start md:text-center px-5'>
                    <div className="flex flex-col">
                        <h1 className='font-["otomanopee-one"] text-[#131313] 2xl:text-[54px] xl:text-[48px] lg:text-[38px] md:text-[34px] text-[28px]'>SERVICES WE PROVIDE</h1>
                    </div>
                    <p className='font-["Philosopher"] text-[#212121] leading-[16px] xl:leading-5 text-sm xl:text-base md:mx-16 lg:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    <div className='flex flex-row gap-3 md:gap-6 lg:mx-0 md:mx-auto '>
                        <button className='font-["Montserrat"] font-bold text-xs px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 xl:text-base xl:px-9 bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] text-white'>JOIN US NOW</button>
                        <button className='font-["Montserrat"] text-xs font-bold px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 xl:text-base xl:px-9 border-2 border-[#AD1DEB]'>CONTACT US</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesBanner