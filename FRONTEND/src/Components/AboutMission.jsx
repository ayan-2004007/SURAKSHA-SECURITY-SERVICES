import React from "react"
import m1 from "../assets/our_mission.png"
import p1 from "../assets/our_philosophy.png"

const AboutMission=()=>{
    return(
        <>
            <div className="w-full mt-[88px] custom-gradient flex flex-col px-5 py-8 gap-14 md:gap-[50px] lg:gap-[35px] xl:gap-[45px]">
                <div className="max-w-[1350px] mx-auto flex flex-col items-center gap-7 lg:flex-row xl:gap-[125px] 2xl:gap-[175px]">
                    <img src={m1} alt="" className="h-[360px] w-[360px] xl:h-[400px] xl:w-[400px] 2xl:h-[450px] 2xl:w-[450px]"/>
                    <div className="flex flex-col items-start gap-[10px] md:items-center lg:items-start">
                        <h1 className="text-[32px] font-['otomanopee-one'] text-[#131313] xl:text-[44px] 2xl:text-[56px]">OUR MISSION</h1>
                        <p className="text-[15px] font-['Philosopher'] text-[#212121] text-justify max-w-[660px] md:text-center lg:text-left xl:text-[16px] 2xl:text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                </div>
                
                <div className="max-w-[1350px] mx-auto flex flex-col items-center gap-7 lg:flex-row-reverse xl:gap-[125px] 2xl:gap-[175px]">
                <img src={p1} alt="" className="h-[360px] w-[360px] xl:h-[400px] xl:w-[400px] 2xl:h-[450px] 2xl:w-[450px]"/>
                    <div className="flex flex-col items-end gap-[10px] md:items-center lg:items-start">
                        <h1 className="text-[32px] font-['otomanopee-one'] text-[#131313] xl:text-[44px] 2xl:text-[56px]">OUR PHILOSOPHY</h1>
                        <p className="text-[15px] font-['Philosopher'] text-[#212121] text-justify max-w-[660px] md:text-center lg:text-left xl:text-[16px] 2xl:text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutMission
