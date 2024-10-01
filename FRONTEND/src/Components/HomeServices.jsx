
import React from 'react';
import image1 from "../assets/s1.jpeg"
import image2 from "../assets/s2.jpg"
import image3 from "../assets/s3.jpg"
import image4 from "../assets/s4.jpeg"


const HomeServices = () => {
    return (
        <>
            <div className='flex flex-col space-y-[156px] mt-[34px] items-center px-5 md:mt-[80px] xl:mt-[192px]'>
                <h1 className='text-[32px] text-[#131313] font-["otomanopee-one"] text-center md:text-[44px] xl:text-[56px]'>SERVICES WE PROVIDE</h1>
                <div className='flex flex-col gap-[100px] items-center md:grid md:grid-rows-3 md:grid-cols-2 md:gap-7 md:gap-y-[80px] xl:grid-cols-3 xl:grid-rows-2 xl:gapx-[80px]'>
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8'>
                        <img src={image1} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-xl font-["otomanopee-one"] font-extralight text-center'>SECURITY GUARDS</p>
                            <p className='text-sm font-["Montserrat"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p>
                            <button className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] px-5 py-4 relative overflow-hidden group">
                                <span className="absolute inset-0 bg-[#6E72FC] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">KNOW MORE</span>
                            </button>
                        </div>
                    </div>
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8'>
                        <img src={image2} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-xl font-["otomanopee-one"] font-extralight text-center'>BOUNCERS & BODYGUARDS</p>
                            <p className='text-sm font-["Montserrat"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p>
                            <button className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] px-5 py-4 relative overflow-hidden group">
                                <span className="absolute inset-0 bg-[#6E72FC] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">KNOW MORE</span>
                            </button>
                        </div>
                    </div>
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8'>
                        <img src={image3} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-xl font-["otomanopee-one"] font-extralight text-center'>LADY SECURITY GUARDS</p>
                            <p className='text-sm font-["Montserrat"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p>
                            <button className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] px-5 py-4 relative overflow-hidden group">
                                <span className="absolute inset-0 bg-[#6E72FC] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">KNOW MORE</span>
                            </button>
                        </div>
                    </div>
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5  rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8'>
                        <img src={image4} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-xl font-["otomanopee-one"] font-extralight text-center'>GUNMEN/REVOLVER MEN/PSO</p>
                            <p className='text-sm font-["Montserrat"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p>
                            <button className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] px-5 py-4 relative overflow-hidden group">
                                <span className="absolute inset-0 bg-[#6E72FC] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">KNOW MORE</span>
                            </button>
                        </div>
                    </div>
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8'>
                        <img src={image1} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-xl font-["otomanopee-one"] font-extralight text-center'>SECURITY SUPERVISOR</p>
                            <p className='text-sm font-["Montserrat"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p>
                            <button className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] px-5 py-4 relative overflow-hidden group">
                                <span className="absolute inset-0 bg-[#6E72FC] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">KNOW MORE</span>
                            </button>
                        </div>
                    </div>
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8'>
                        <img src={image2} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-xl font-["otomanopee-one"] font-extralight text-center'>SECURITY OFFICERS</p>
                            <p className='text-sm font-["Montserrat"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p>
                            <button className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] px-5 py-4 relative overflow-hidden group">
                                <span className="absolute inset-0 bg-[#6E72FC] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">KNOW MORE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeServices