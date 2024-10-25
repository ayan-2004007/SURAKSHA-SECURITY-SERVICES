import React from "react"
import introImage from "../assets/aboutus_about.png"
const AboutIntro = () => {
    return (
        <>
            <div className="w-full bg-[#131313] mt-[142px]">
                <div className="mx-auto max-w-[1773px] flex flex-col pb-10 items-center md:pb-12 lg:flex-row-reverse lg:py-10">
                    <div className="relative bottom-20 md:bottom-24 lg:min-h-[338px] lg:bottom-28 object-cover">
                        <img src={introImage} alt="" className="lg:min-h-[338px] xl:h-[460px] xl:w-[813px] 2xl:h-[660px] 2xl:w-[1113px] relative z-10" />
                        <div className="absolute bottom-0 left-0 right-0 h-[50px] md:h-[100px] xl:h-[200px] bg-gradient-to-b from-transparent to-[#131313] z-20"></div>
                    </div>
                    <div className="flex flex-col gap-5 px-5 md:items-center lg:items-start xl:gap-7">
                        <h1 className="text-[32px] font-['otomanopee-one'] text-white xl:text-[44px] 2xl:text-[56px]">WHO WE ARE</h1>
                        <p className="text-[#939393] font-['Philosopher'] text-[15px] max-w-[660px] md:text-center lg:text-left xl:text-[16px] 2xl:text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        <button className="h-12 w-36 bg-gradient-to-r from-[#753A88] to-[#CC2B5E] text-white font-['Montserrat'] text-xs font-bold rounded-[5px] xl:w-[170px] xl:h-[55px] xl:text-base transition-transform transform hover:scale-110 duration-150 ease-in">CONTACT US</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default AboutIntro