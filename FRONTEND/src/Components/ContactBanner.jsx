import React ,{useEffect} from 'react'
import aos from 'aos'
import "aos/dist/aos.css"
import contact_us from "../assets/contact_us.png";
import email_us from "../assets/email_us.png";
import our_location from "../assets/our_location.png";


const ContactBanner = () => {
    useEffect(() => {
        aos.init({
            once: "true",
        })
    }, [])
    return (
        <>
            <h1 className='font-["otomanopee-one"] text-[32px] md:text-[44px] xl:text-[56px] text-center py-5 md:pt-2 md:pb-0'>GET IN TOUCH</h1>
            <div className='md:flex justify-between space-y-16 md:space-y-0 max-w-fit md:max-w-none xl:max-w-[1400px] mx-auto py-2 px-5' data-aos="fade-down" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <div className='max-w-[450px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[360px] space-y-4'>
                    <img src={contact_us} alt="contact_us" />
                    <div className='text-center space-y-3'>
                        <p className='font-["otomanopee-one"] text-[22px] md:text-xl lg:text-[22px]'>CONTACT US ON</p>
                        <p className='font-["Red_Hat_Display"] text-sm md:text-xs lg:text-[13px] leading-4'>With cutting-edge technology and highly trained professionals, we provide proactive security solutions tailored to your needs, ensuring you stay protected around the clock.</p>
                        <div className='flex justify-between xl:px-5 text-lg md:text-sm lg:text-lg font-medium'>
                            <p>+91 74395 37213</p>
                            <p>+91 94748 12394</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[450px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[360px] space-y-4 md:pt-16'>
                    <img src={email_us} alt="email_us" />
                    <div className='text-center space-y-3'>
                        <p className='font-["otomanopee-one"] text-[22px] md:text-xl lg:text-[22px]'>EMAIL US ON</p>
                        <p className='font-["Red_Hat_Display"] text-sm md:text-xs lg:text-[13px] leading-4'>From today’s challenges to tomorrow’s risks, our team delivers reliable security services designed to safeguard what matters most, giving you peace of mind for the long term.</p>
                        <p className='font-["Red_Hat_Display"] text-lg md:text-sm lg:text-lg font-semibold tracking-widest md:tracking-wider'>surakshasecuirty@gmail.com</p>
                    </div>
                </div>
                <div className='max-w-[450px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[360px] space-y-4'>
                    <img src={our_location} alt="our_location" />
                    <div className='text-center space-y-3'>
                        <p className='font-["otomanopee-one"] text-[22px] md:text-xl lg:text-[22px]'>OUR LOCATION</p>
                        <p className='font-["Red_Hat_Display"] text-sm md:text-xs lg:text-[13px] leading-4'>Backed by years of experience and a roster of satisfied clients, we offer affordable, top-tier security services you can trust, keeping threats at bay and your assets safe.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactBanner