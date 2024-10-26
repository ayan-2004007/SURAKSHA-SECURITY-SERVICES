import React,{useEffect} from 'react'
import aos from 'aos'
import "aos/dist/aos.css"
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";


const CareerBanner = () => {
    useEffect(() => {
        aos.init({
            once: "true",
        })
    }, [])
    return (
        <>
            <h1 className='mb-10 font-["otomanopee-one"] text-[26px] md:text-[38px] xl:text-[50px] text-center py-5 md:pt-2 md:pb-0'>WHERE PROTECTION MEETS PRECISION</h1>
            <div className='md:flex justify-between space-y-16 md:space-y-0 max-w-fit md:max-w-none xl:max-w-[1400px] mx-auto py-2 px-5 pb-20' data-aos="fade-down" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <div className='max-w-[450px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[360px] space-y-4'>
                    <img src={about1} alt="" />
                    <div className='text-center space-y-3'>
                        <div className='font-["otomanopee-one"] text-xl'>
                            <p>SECURING YOUR WORLD</p>
                            <p>ONE STEP AHEAD</p>
                        </div>
                        <p className='font-["Red_Hat_Display"] text-sm md:text-xs lg:text-[13px] leading-4'>With cutting-edge technology and highly trained professionals, we provide proactive security solutions tailored to your needs, ensuring you stay protected around the clock.</p>
                    </div>
                </div>
                <div className='max-w-[450px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[360px] space-y-4 md:pt-16'>
                    <img src={about2} alt="" />
                    <div className='text-center space-y-3'>
                        <div className='font-["otomanopee-one"] text-xl'>
                            <p>GUARDING THE FUTURE</p>
                            <p>PROTECTING THE PRESENT</p>
                        </div>
                        <p className='font-["Red_Hat_Display"] text-sm md:text-xs lg:text-[13px] leading-4'>From today’s challenges to tomorrow’s risks, our team delivers reliable security services designed to safeguard what matters most, giving you peace of mind for the long term.</p>
                    </div>
                </div>
                <div className='max-w-[450px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[360px] space-y-4'>
                    <img src={about3} alt="" />
                    <div className='text-center space-y-3'>
                        <div className='font-["otomanopee-one"] text-xl'>
                            <p>TRUSTED BY MANY</p>
                            <p>YOUR ULTIMATE SECURITY PARTNER</p>
                        </div>
                        <p className='font-["Red_Hat_Display"] text-sm md:text-xs lg:text-[13px] leading-4'>Backed by years of experience and a roster of satisfied clients, we offer affordable, top-tier security services you can trust, keeping threats at bay and your assets safe.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerBanner