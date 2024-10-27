import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import bg from "../assets/about_bg.png"
import img1 from "../assets/about1.png"
import img2 from "../assets/about2.png"
import img3 from "../assets/about3.png"


const AboutBanner = () => {
    const navigate=useNavigate()
    const banners = [
        {
            title: "SECURING YOUR WORLD",
            subtitle: "ONE STEP AHEAD",
            description: "With cutting-edge technology and highly trained professionals, we provide proactive security solutions tailored to your needs, ensuring you stay protected around the clock",
        },
        {
            title: "GUARDING THE FUTURE",
            subtitle: "PROTECTING THE PRESENT",
            description: "From today’s challenges to tomorrow’s risks, our team delivers reliable security services designed to safeguard what matters most, giving you peace of mind for the long term",
        },
        {
            title: "TRUSTED BY MANY",
            subtitle: "YOUR ULTIMATE SECURITY PARTNER",
            description: "Backed by years of experience and a roster of satisfied clients, we offer affordable, top-tier security services you can trust, keeping threats at bay and your assets safe",
        }
    ];

    const [rotation, setRotation] = useState(0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [fade, setFade] = useState(false)
    const images = [img1, img2, img3]

    useEffect(() => {
        const rotateImage = () => {
            setRotation((prevRotation) => prevRotation - 120)
        };
        const rotationInterval = setInterval(rotateImage, 3000)
        const imageInterval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
                setFade(false);
            }, 500)
        }, 3000)
        return () => {
            clearInterval(rotationInterval)
            clearInterval(imageInterval)
        };
    }, []);

    const { title, subtitle, description } = banners[currentImageIndex];

    return (
        <div className="lg:flex lg:flex-row-reverse md:flex-col mb-44 md:mb-[280px] lg:-mb-[120px] 2xl:-mb-[320px]">

            <div className="2xl:h-[1000px] relative overflow-hidden ml-auto xl:h-[800px] lg:h-[700px] lg:w-full md:h-[600px] md:w-[750px] md:mx-auto h-[350px] w-[350px] mx-auto">
                <div className="absolute 2xl:bottom-[350px] 2xl:-right-72 xl:bottom-[180px] xl:-right-56 lg:bottom-[150px] lg:-right-44 md:bottom-[120px] md:right-0 right-0 bottom-[80px]">
                    <div className="relative">
                        <img
                            src={bg}
                            className="2xl:h-[1000px] 2xl:w-[1150px] object-cover xl:h-[800px] xl:w-[800px] lg:h-[700px] lg:w-[700px] md:h-[600px] md:w-[750px] [350px] w-[350px]"
                            alt=""
                            style={{
                                transform: `rotate(${rotation}deg)`,
                                transition: 'transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)',
                            }}
                        />
                        <img
                            src={images[currentImageIndex]}
                            alt=""
                            className={`2xl:h-[400px] 2xl:w-[400px] absolute 2xl:bottom-24 2xl:left-6 z-10 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'} xl:h-[300px] xl:w-[300px] xl:bottom-24 lg:h-[240px] lg:w-[240px] lg:bottom-16 lg:left-0 md:h-[240px] md:w-[240px] md:-bottom-14 md:left-36 h-[180px] w-[180px] -bottom-[70px] left-20`}
                        />
                    </div>
                </div>
            </div>

            <div className='2xl:px-20 flex flex-col w-full max-h-[750px] item-center justify-center gap-7 xl:px-0 xl:pl-10 lg:pl-7 lg:text-start md:text-center px-5'>
                <div className="flex flex-col gap-1">
                    <h1 className={`font-["otomanopee-one"] text-[#131313] 2xl:text-[50px] xl:text-[48px] lg:text-[38px] md:text-[34px] text-[28px] ${fade ? 'opacity-0' : 'opacity-100'}`}>{title}</h1>
                    <h1 className={`font-["otomanopee-one"] text-[#131313] 2xl:text-[50px] xl:text-[48px] lg:text-[38px] md:text-[34px] text-[28px] ${fade ? 'opacity-0' : 'opacity-100'}`}>{subtitle}</h1>
                </div>
                <p className={`font-["Philosopher"] text-[#3F3F3F] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] text-[14px] ${fade ? 'opacity-0' : 'opacity-100'}`}>{description}</p>
                <div className='flex flex-row gap-3 md:gap-6 lg:mx-0 md:mx-auto'>
                    <button onClick={()=>{navigate("/career#joinUs")}} className={`rounded-lg font-["Montserrat"] font-bold text-xs px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 xl:text-base xl:px-9 bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] text-white ${fade ? 'opacity-0' : 'opacity-100'} transition-transform transform hover:scale-110 duration-150 ease-in`}>JOIN US NOW</button>
                    <button onClick={()=>{navigate("/contact")}} className={`font-["Montserrat"] text-xs font-bold px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 xl:text-base xl:px-9 border-2 border-[#AD1DEB] ${fade ? 'opacity-0' : 'opacity-100'} transition-all duration-150 ease-in hover:bg-[#131313] hover:text-white`}>CONTACT US</button>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner