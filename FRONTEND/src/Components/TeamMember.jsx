import React from "react"
import bg from "../assets/meet_team_bg.png"
import mem1 from "../assets/mem1.png"
import mem2 from "../assets/mem2.png"
import mem3 from "../assets/mem3.png"
import mem4 from "../assets/mem4.png"
import fb from "../assets/fb-grey.png"
import insta from "../assets/insta-grey.png"
import linkedin from "../assets/linkedin-grey.png"
const TeamMember = () => {
    return (
        <>
            <div className="flex flex-col gap-2 mt-[80px]">
                <h1 className="text-center text-[32px] font-['otomanopee-one'] text-[#131313] xl:text-[44px] 2xl:text-[56px]">MEET OUT TEAM MEMBERS</h1>
                <div className="flex flex-col w-full gap-12 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-0 xl:flex-row xl:flex">
                    {/* FISRT MEMBER */}
                    <div className="flex flex-col gap-4">
                        <div className="relative w-full">
                            <img src={bg} alt="" className="absolute bottom-0 h-[133px] w-full object-fill z-10" />
                            <img src={mem1} alt="" className="relative z-20 h-[300px] mx-auto md:h-[350px]" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-[22px] text-[#131313] font-['otomanopee-one']">TEAM MEMBER NAME</h1>
                            <p className="text-[18px] text-['Philosopher']">Position of the member</p>
                            <p className="text-sm font-['Philosopher'] text-center max-w-[350px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                            <div className="flex gap-4 flex-wrap">
                                <img src={fb} alt="" className="h-10 w-10"/>
                                <img src={insta} alt="" className="h-10 w-10"/>
                                <img src={linkedin} alt="" className="h-10 w-10"/>
                            </div>
                        </div>
                    </div>

                    {/* SECOND MEMBER */}
                    <div className="flex flex-col gap-4">
                        <div className="relative w-full">
                            <img src={bg} alt="" className="absolute bottom-0 h-[133px] w-full object-fill z-10" />
                            <img src={mem2} alt="" className="relative z-20 h-[300px] mx-auto md:h-[350px]" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-[22px] text-[#131313] font-['otomanopee-one']">TEAM MEMBER NAME</h1>
                            <p className="text-[18px] text-['Philosopher']">Position of the member</p>
                            <p className="text-sm font-['Philosopher'] text-center max-w-[350px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                            <div className="flex gap-4 flex-wrap">
                                <img src={fb} alt="" className="h-10 w-10"/>
                                <img src={insta} alt="" className="h-10 w-10"/>
                                <img src={linkedin} alt="" className="h-10 w-10"/>
                            </div>
                        </div>
                    </div>

                    {/* THIRD MEMBER */}
                    <div className="flex flex-col gap-4">
                        <div className="relative w-full">
                            <img src={bg} alt="" className="absolute bottom-0 h-[133px] w-full object-fill z-10" />
                            <img src={mem3} alt="" className="relative z-20 h-[300px] mx-auto md:h-[350px]" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-[22px] text-[#131313] font-['otomanopee-one']">TEAM MEMBER NAME</h1>
                            <p className="text-[18px] text-['Philosopher']">Position of the member</p>
                            <p className="text-sm font-['Philosopher'] text-center max-w-[350px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                            <div className="flex gap-4 flex-wrap">
                                <img src={fb} alt="" className="h-10 w-10"/>
                                <img src={insta} alt="" className="h-10 w-10"/>
                                <img src={linkedin} alt="" className="h-10 w-10"/>
                            </div>
                        </div>
                    </div>

                    {/* THIRD MEMBER */}
                    <div className="flex flex-col gap-4">
                        <div className="relative w-full">
                            <img src={bg} alt="" className="absolute bottom-0 h-[133px] w-full object-fill z-10" />
                            <img src={mem4} alt="" className="relative z-20 h-[300px] mx-auto md:h-[350px]" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-[22px] text-[#131313] font-['otomanopee-one']">TEAM MEMBER NAME</h1>
                            <p className="text-[18px] text-['Philosopher']">Position of the member</p>
                            <p className="text-sm font-['Philosopher'] text-center max-w-[350px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                            <div className="flex gap-4 flex-wrap">
                                <img src={fb} alt="" className="h-10 w-10"/>
                                <img src={insta} alt="" className="h-10 w-10"/>
                                <img src={linkedin} alt="" className="h-10 w-10"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeamMember