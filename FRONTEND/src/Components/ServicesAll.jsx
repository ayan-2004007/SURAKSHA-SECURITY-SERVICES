import React, {useEffect} from 'react'
import aos from "aos"
import "aos/dist/aos.css"
import services1_5 from "../assets/services1_5.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import services4 from "../assets/services4.png";
import services6 from "../assets/services6.png";


const ServicesAll = () => {
    useEffect(() => {
        aos.init({
            once: "true",
        })
    }, [])
    return (
        <>
            <div className='md:max-w-[850px] lg:max-w-[1140px] xl:max-w-[1180px] 2xl:max-w-[1350px] mx-auto space-y-9 drop-shadow-[10px_10px_10px_rgba(0,0,0,0.25)]'>
                <div className='flex flex-col lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    <img src={services1_5} alt="" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
                    <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>SECURITY GUARDS</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-sm md:text-[15px] leading-4 md:leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>BOUNCERS/BODY GUARDS</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-sm md:text-[15px] leading-4 md:leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisconsectetur adipiscing elit  Lorem ipsum dolor sit amet, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                    <img src={services2} alt="" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    <img src={services3} alt="" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
                    <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>LADY SECURITY GUARDS</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-sm md:text-[15px] leading-4 md:leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>GUNMEN/REVOLVER MEN/PSO</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-sm md:text-[15px] leading-4 md:leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                    <img src={services4} alt="" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    <img src={services1_5} alt="" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
                    <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>SECURITY SUPERVISORS</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-sm md:text-[15px] leading-4 md:leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>SECURITY OFFICERS</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-sm md:text-[15px] leading-4 md:leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                    <img src={services6} alt="" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
                </div>
            </div>
        </>
    )
}

export default ServicesAll