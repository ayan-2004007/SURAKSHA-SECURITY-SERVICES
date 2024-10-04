import react from "react";
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
const HomeCertificate = () => {
    return (
        <>
            <div className="flex flex-col w-screen px-5 items-center bg-gradient-to-b from-[#ECECEC] via-[#B099E4]/50 to-[#ECECEC]">
                <h1 className="text-[32px] text-[#131313] font-['otomanopee-one'] text-center md:text-[44px] xl:text-[56px]">OUR CERTIDICATES AND AWARDS</h1>
                <div className="flex flex-col">
                    <div className="w-full mx-auto flex flex-row items-center justify-evenly flex-wrap">
                        <img src={c1} alt="" className="h-[170px] w-[170px] object-cover rounded-md sm:w-[200px]" />
                        <img src={c2} alt="" className="h-[170px] w-[170px] object-cover rounded-md sm:w-[200px]" />

                    </div>

                    <div>
                        <ul>
                            <li>
                                <div>
                                    <h1>FIRST CERTIFICATE NAME</h1>
                                    <p>Provided By : Organization name</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque quae veniam facere natus! Tempora commodi adipisci aspernatur accusamus eius!</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h1>FIRST CERTIFICATE NAME</h1>
                                    <p>Provided By : Organization name</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque quae veniam facere natus! Tempora commodi adipisci aspernatur accusamus eius!</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h1>FIRST CERTIFICATE NAME</h1>
                                    <p>Provided By : Organization name</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque quae veniam facere natus! Tempora commodi adipisci aspernatur accusamus eius!</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mx-auto flex flex-row items-center gap-5">
                        <img src={c1} alt="" className="w-[140px] h-[140px] object-cover rounded-md" />
                        <img src={c3} alt="" className="w-[140px] h-[140px] object-cover rounded-md" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeCertificate
