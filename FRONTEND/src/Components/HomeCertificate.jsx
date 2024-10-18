import react from "react";
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
const HomeCertificate = () => {
    return (
        <>
            <div className="flex flex-col mt-[125px] gap-12 xl:gap-20 w-screen px-5 items-center bg-gradient-to-b from-[#ECECEC] via-[#B099E4]/50 to-[#ECECEC]">
                <h1 className="text-[32px] text-[#131313] font-['otomanopee-one'] text-center md:text-[44px] xl:text-[56px]">OUR CERTIDICATES AND AWARDS</h1>
                <div className="flex flex-col gap-10 lg:flex-row lg:gap-8 xl:gap-14">
                    <div className="w-full mx-auto flex flex-row items-center justify-center gap-4 flex-wrap md:gap-8">
                        <div className="w-[150px] h-[150px] bg-cover bg-center rounded-[5px] sm:w-[250px] md:w-[280px] md:h-[220px] xl:h-[278px] xl:w-[400px] xl:rounded-[15px] xl:shadow-2xl 2xl:h-[378px] 2xl:w-[600px]" style={{ backgroundImage: `url(${c1})` }}></div>
                        <div className="w-[150px] h-[150px] bg-cover bg-center rounded-[5px] sm:w-[250px] md:w-[280px] md:h-[220px] xl:h-[278px] xl:w-[400px] xl:rounded-[15px] xl:shadow-2xl 2xl:h-[378px] 2xl:w-[600px]" style={{ backgroundImage: `url(${c2})` }}></div>
                    </div>

                    <div className="px-5 flex flex-col items-center justify-center">
                        <ul className="list-disc list-outside space-y-6">
                            <li>
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-[22px] font-['Red_Hat_Display'] md:text-[24px]">FIRST CERTIFICATE NAME</h1>
                                    <p className="text-[18px] font-['Philosopher'] md:text-[20px]">Provided By : Organization name</p>
                                    <p className="text-sm font-['Philosopher'] md:text-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque quae veniam facere natus! Tempora commodi adipisci aspernatur accusamus eius!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum atque facilis eos consectetur iure repellat, facere enim illum </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-[22px] font-['Red_Hat_Display'] md:text-[24px]">FIRST CERTIFICATE NAME</h1>
                                    <p className="text-[18px] font-['Philosopher'] md:text-[20px]">Provided By : Organization name</p>
                                    <p className="text-sm font-['Philosopher'] md:text-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque quae veniam facere natus! Tempora commodi adipisci aspernatur accusamus eius!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum atque facilis eos consectetur iure repellat, facere enim </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-[22px] font-['Red_Hat_Display'] md:text-[24px]">FIRST CERTIFICATE NAME</h1>
                                    <p className="text-[18px] font-['Philosopher'] md:text-[20px]">Provided By : Organization name</p>
                                    <p className="text-sm font-['Philosopher'] md:text-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque quae veniam facere natus! Tempora commodi adipisci aspernatur accusamus eius!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum atque facilis eos consectetur iure repellat, facere enim?</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full mx-auto flex flex-row items-center justify-center gap-4 flex-wrap md:gap-8">
                        <div className="w-[150px] h-[150px] bg-cover bg-center rounded-[5px] sm:w-[250px] md:w-[280px] md:h-[220px] xl:h-[278px] xl:w-[400px] xl:rounded-[15px] xl:shadow-2xl 2xl:h-[378px] 2xl:w-[600px]" style={{ backgroundImage: `url(${c2})` }}></div>
                        <div className="w-[150px] h-[150px] bg-cover bg-center rounded-[5px] sm:w-[250px] md:w-[280px] md:h-[220px] xl:h-[278px] xl:w-[400px] xl:rounded-[15px] xl:shadow-2xl 2xl:h-[378px] 2xl:w-[600px]" style={{ backgroundImage: `url(${c3})` }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeCertificate
