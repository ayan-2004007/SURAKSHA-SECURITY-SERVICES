import React, { useState, useEffect } from 'react';
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const HomeBanner = () => {
    const banners = [
        {
            img: banner1,
            title: "YOUR SAFETY",
            subtitle: "OUR SECURITY",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti necessitatibus, harum blanditiis illum itaque quo assumenda rerum quibusdam laborum, ipsa voluptas nihil repellendus beatae asperiores.",
            button1: { text: "CONTACT US", gradient: "from-[#753A88] to-[#CC2B5E]", textColor: "text-white" },
            button2: { text: "VISIT WEBSITE", border: "border-[#6100AB]", textColor: "text-black" },
        },
        {
            img: banner2,
            title: "ALWAYS READY",
            subtitle: "ALWAYS SAFE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti necessitatibus, harum blanditiis illum itaque quo assumenda rerum quibusdam laborum, ipsa voluptas nihil repellendus beatae asperiores.",
            button1: { text: "CONTACT US", gradient: "from-[#0093E9] to-[#80D0C7]", textColor: "text-white" },
            button2: { text: "VISIT WEBSITE", border: "border-[#0093E9]", textColor: "text-black" },
        },
        {
            img: banner3,
            title: "SAFE GUARDING",
            subtitle: "WHAT MATTERS",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti necessitatibus, harum blanditiis illum itaque quo assumenda rerum quibusdam laborum, ipsa voluptas nihil repellendus beatae asperiores.",
            button1: { text: "CONTACT US", gradient: "from-[#F76B1C] to-[#FAD961]", textColor: "text-white" },
            button2: { text: "VISIT WEBSITE", border: "border-[#F76B1C]", textColor: "text-black" },
        }
    ];

    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const [fade, setFade] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
                setFade(true);
            }, 500);
        }, 5000);
        return () => clearInterval(interval)
    }, [banners.length]);
    const { img, title, subtitle, description, button1, button2 } = banners[currentBannerIndex];

    return (
        <div className='w-screen h-auto flex flex-col px-5 py-1 items-center pb-0 mx-auto gap-5 sm:gap-10 md:gap-12 lg:flex-row-reverse lg:gap-10 lg:pt-16 lg:max-w-[1138px] xl:pl-8 xl:max-w-[1338px] 2xl:max-w-[1518px] 2xl:gap-6 2xl:pt-8 2xl:pl-10 2xl:pr-0'>
            <img
                src={img}
                alt=""
                className={`object-fill w-screen h-auto transition-opacity duration-500 sm:max-w-[640px] md:max-w-[750px] lg:min-w-[520px] xl:min-w-[700px]  2xl:max-w-[900px] ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className='flex flex-col justify-center w-full h-auto sm:px-8 md:items-center lg:items-start xl:px-0'>
                <h1 className={`font-["otomanopee-one"] text-[38px] text-[#131313] mb-3 transition-opacity duration-500 sm:text-[44px] sm:mb-4 md:text-[56px] md:tracking-wide md:mb-5 lg:text-[40px] xl:text-[56px] 2xl:text-[72px] ${fade ? 'opacity-100' : 'opacity-0'}`}>{title}</h1>
                <h1 className={`font-["otomanopee-one"] text-[38px] text-[#131313] mb-3 transition-opacity duration-500 sm:text-[44px] sm:mb-4 md:text-[56px] md:tracking-wide lg:text-[40px] xl:text-[56px] xl:mb-5 2xl:text-[72px] ${fade ? 'opacity-100' : 'opacity-0'}`}>{subtitle}</h1>
                <div className='flex items-center gap-2 mb-5 xl:gap-4'>
                    <div className='w-[47px] h-[2px] bg-black md:w-[56px] xl:w-[78px] '></div>
                    <p className={`font-["Red Hat Display"] text-[18px] transition-opacity duration-500 sm:text-[20px] md:text-[22px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] ${fade ? 'opacity-100' : 'opacity-0'}`}>Trusted Security Solutions</p>
                </div>
                <p className={`font-["Philosopher"] text-[#3F3F3F] text-sm font-medium mb-4 transition-opacity duration-500 sm:text-[18px] sm:leading-6 sm:mb-5 md:text-center md:max-w-[670px] md:mb-6 lg:text-base lg:text-start xl:text-[18px] xl:max-w-[570px] xl:mb-11 ${fade ? 'opacity-100' : 'opacity-0'}`}>{description}</p>
                <div className='flex flex-row gap-3 md:gap-6'>
                    <button className={`rounded-lg font-["Montserrat"] font-bold text-xs px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 xl:text-base xl:px-9 bg-gradient-to-r ${button1.gradient} ${button1.textColor} transition-transform transform hover:scale-110 duration-150 ease-in`}>{button1.text}</button>
                    <button className={`font-["Montserrat"] text-xs font-bold px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 border-2 xl:text-base xl:px-9 ${button2.border} ${button2.textColor} transition-all duration-150 ease-in hover:bg-[#131313] hover:text-white`}>{button2.text}</button>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
