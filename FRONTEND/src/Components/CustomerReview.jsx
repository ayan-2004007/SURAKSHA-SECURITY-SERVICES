import React from 'react'
import image1 from "../assets/s1.jpeg"
import image2 from "../assets/s2.jpg"
import image3 from "../assets/s3.jpg"
import image4 from "../assets/s4.jpeg"


const CustomerReview = () => {
    return (
        <>
            <h1 className='mt-[120px] md:mt-[80px] xl:mt-[192px] mb-14 lg:mb-16 text-[#131313] font-["otomanopee-one"] text-center text-[32px] md:text-[44px] xl:text-[56px]'>WHAT PEOPLE SAY ABOUT US</h1>
            <div className='md:max-w-[500px] lg:max-w-[700px] px-3 lg:px-0 mx-auto space-y-10 lg:space-y-12'>
                <div className='flex items-center justify-center space-x-2 lg:space-x-4'>
                    <img src={image1} alt="" className='h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] rounded-full object-cover' />
                    <img src={image2} alt="" className='h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] rounded-full object-cover' />
                    <img src={image3} alt="" className='h-[70px] w-[70px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px] rounded-full object-cover border-2 border-x-amber-400 border-y-cyan-400' />
                    <img src={image4} alt="" className='h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] rounded-full object-cover' />
                    <img src={image2} alt="" className='h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] rounded-full object-cover' />
                </div>
                <div className='space-y-4 lg:space-y-6'>
                    <p className='text-base lg:text-2xl text-[#131313] text-center font-["Red_Hat_Display"]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p className='text-sm leading-4 lg:text-lg lg:leading-5 text-[#131313] text-center font-["Philosopher"]'>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq ”</p>
                </div>
                <div className='flex items-start justify-center mx-auto gap-1 md:gap-2 max-w-[400px] px-5 md:px-0'>
                    <img src={image3} alt="" className='h-[80px] w-[80px] md:h-[90px] md:w-[90px] lg:h-[110px] lg:w-[110px] rounded-full object-cover' />
                    <div className='text-[#131313] space-y-0.5'>
                        <h1 className='font-["Red_Hat_Display"] md:text-lg lg:text-2xl'>Ayan Chakraborty</h1>
                        <p className='font-["Philosopher"] text-sm lg:text-base leading-4 lg:leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e</p>
                        <p className='md:text-lg lg:text-2xl text-[#DAAE00]'>&#9733;&#9733;&#9733;&#9733;<span className='text-[#D9D9D9]'>&#9733;</span></p>
                        <p className='font-["Philosopher"] lg:text-lg'>3/10/2024</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerReview