import React, {useEffect} from 'react'
import aos from "aos"
import "aos/dist/aos.css"
import Surveillance from "../assets/24-hours.png";
import Reliable_Protection from "../assets/shield.png";
import Traine_Guards from "../assets/security-guard.png";
import Years_of_Experience from "../assets/expertise.png";
import Trusted_Clients from "../assets/trust.png";
import Various_Services from "../assets/customer-service.png";
import home_about from "../assets/home_about.png";


const HomeAbout = () => {
    useEffect(() => {
        aos.init({
            once: "true",
        })
    }, [])
    return (
        <>

            {/* Testimonials */}
            <div className=' w-full h-full lg:bg-gradient-to-t from-[rgba(168,139,235,0.5)] via-[#ECECEC] to-[#ECECEC]'>
                <div className='grid grid-cols-2 md:grid-cols-3 px-5 xl:px-1 lg:flex justify-center mx-auto gap-5 xl:gap-9 mt-24 lg:mt-32 text-white max-w-[400px] md:max-w-[600px] lg:max-w-[1150px] xl:max-w-[1270px] 2xl:max-w-[1365px]' data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="500">
                    <div className='lg:w-[190px] lg:h-[195px] xl:w-[210px] xl:h-[215px] bg-[#3E187A] rounded-md flex flex-col items-center justify-between py-2 lg:py-3 px-2 space-y-2 lg:space-y-0'>
                        <img src={Surveillance} alt="" className='xl:w-20 xl:h-20 lg:w-16 lg:h-16 w-12 h-12' />
                        <p className='font-["Montserrat"] xl:text-lg font-bold text-center'>24/7<br /><span className='text-[11px] lg:text-sm xl:text-base'>SURVEILLANCE</span></p>
                        <p className='text-center text-[11px] lg:text-[13px] font-["Philosopher"]'>Always there, anytime we need</p>
                    </div>
                    <div className='lg:w-[190px] lg:h-[195px] xl:w-[210px] xl:h-[215px] bg-[#3E187A] rounded-md flex flex-col items-center justify-between py-2 lg:py-3 px-2 space-y-2 lg:space-y-0'>
                        <img src={Reliable_Protection} alt="" className='xl:w-20 xl:h-20 lg:w-16 lg:h-16 w-12 h-12' />
                        <p className='font-["Montserrat"] xl:text-lg font-bold text-center'>RELIABLE<br /><span className='text-[11px] lg:text-sm xl:text-base'>PROTECTION</span></p>
                        <p className='text-center text-[11px] lg:text-[13px] font-["Philosopher"]'>Dependable protection, every single time</p>
                    </div>
                    <div className='lg:w-[190px] lg:h-[195px] xl:w-[210px] xl:h-[215px] bg-[#3E187A] rounded-md flex flex-col items-center justify-between py-2 lg:py-3 px-2 space-y-2 lg:space-y-0'>
                        <img src={Traine_Guards} alt="" className='xl:w-20 xl:h-20 lg:w-16 lg:h-16 w-12 h-12' />
                        <p className='font-["Montserrat"] xl:text-lg font-bold text-center'>TRAINED<br /><span className='text-[11px] lg:text-sm xl:text-base'>GUARDS</span></p>
                        <p className='text-center text-[11px] lg:text-[13px] font-["Philosopher"]'>Highskilled and professional staff</p>
                    </div>
                    <div className='lg:w-[190px] lg:h-[195px] xl:w-[210px] xl:h-[215px] bg-[#3E187A] rounded-md flex flex-col items-center justify-between py-2 lg:py-3 px-2 space-y-2 lg:space-y-0'>
                        <img src={Years_of_Experience} alt="" className='xl:w-20 xl:h-20 lg:w-16 lg:h-16 w-12 h-12' />
                        <p className='font-["Montserrat"] xl:text-lg font-bold text-center'>7 + YEARS<br /><span className='text-[11px] lg:text-sm xl:text-base'>OF EXPERIENCE</span></p>
                        <p className='text-center text-[11px] lg:text-[13px] font-["Philosopher"]'>Years of expertise, unmatched service quality</p>
                    </div>
                    <div className='lg:w-[190px] lg:h-[195px] xl:w-[210px] xl:h-[215px] bg-[#3E187A] rounded-md flex flex-col items-center justify-between py-2 lg:py-3 px-2 space-y-2 lg:space-y-0'>
                        <img src={Trusted_Clients} alt="" className='xl:w-20 xl:h-20 lg:w-16 lg:h-16 w-12 h-12' />
                        <p className='font-["Montserrat"] xl:text-lg font-bold text-center'>25 +<br /><span className='text-[11px] lg:text-sm xl:text-base'>TRUSTED CLIENTS</span></p>
                        <p className='text-center text-[11px] lg:text-[13px] font-["Philosopher"]'>Trusted by many, serving with pride</p>
                    </div>
                    <div className='lg:w-[190px] lg:h-[195px] xl:w-[210px] xl:h-[215px] bg-[#3E187A] rounded-md flex flex-col items-center justify-between py-2 lg:py-3 px-2 space-y-2 lg:space-y-0'>
                        <img src={Various_Services} alt="" className='xl:w-20 xl:h-20 lg:w-16 lg:h-16 w-12 h-12' />
                        <p className='font-["Montserrat"] xl:text-lg font-bold text-center'>VARIOUS<br /><span className='text-[11px] lg:text-sm xl:text-base'>SERVICES</span></p>
                        <p className='text-center text-[11px] lg:text-[13px] font-["Philosopher"]'>Comprehensive solutions for all needs</p>
                    </div>
                </div>
            </div>

            {/* About */}
            <div className=' w-full h-full bg-gradient-to-t from-[rgba(168,139,235,0.5)] via-[rgba(168,139,235,0.5)] to-[#ECECEC] lg:bg-gradient-to-t lg:from-[rgba(168,139,235,0.5)] lg:via-[rgba(168,139,235,0.5)] lg:to-[rgba(168,139,235,0.5)]'>
                <div className='lg:flex items-center space-y-6 lg:gap-14 2xl:gap-28 mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1150px] xl:max-w-[1330px] 2xl:max-w-[1365px] pt-16 lg:pt-2 pb-8 lg:pb-0 px-4 xl:px-1'>
                    <div className='lg:hidden'>
                        <h1 className='font-["otomanopee-one"] text-[28px] text-[#494949] pb-3'>WELCOME TO</h1>
                        <h1 className='font-["otomanopee-one"] text-[28px] text-[#131313]'>SURAKSHA SECURITY</h1>
                    </div>
                    <img src={home_about} alt="" className='lg:w-[520px] xl:w-[650px]' />
                    <div className='lg:space-y-14' data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="500">
                        <div className='hidden lg:block'>
                            <h1 className='font-["otomanopee-one"] lg:text-4xl xl:text-5xl text-[#494949] pb-6'>WELCOME TO</h1>
                            <h1 className='font-["otomanopee-one"] lg:text-4xl xl:text-5xl text-[#131313]'>SURAKSHA SECURITY</h1>
                        </div>
                        <p className='font-["Philosopher"] text-[#131313] leading-[15px] xl:leading-5 text-sm xl:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        <div className='flex flex-row gap-3 md:gap-5 pt-5 lg:pt-0'>
                            <button className='font-["Montserrat"] font-bold bg-[#CC2B5E] rounded-[5px] text-white xl:text-base lg:text-sm text-xs xl:px-6 xl:py-4 lg:px-5 py-3 px-3 transition-transform transform hover:scale-110 duration-150 ease-in'>CONTACT US TODAY </button>
                            <button className='font-["Montserrat"] font-bold border-2 border-[#6100AB] xl:text-base lg:text-sm text-xs xl:px-6 xl:py-4 lg:px-5 py-3 px-3 transition-all duration-150 ease-in hover:bg-[#131313] hover:text-white'>JOIN US NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAbout
