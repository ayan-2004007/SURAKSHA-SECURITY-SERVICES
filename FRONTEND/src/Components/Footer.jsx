import React from 'react'
import logo from '../assets/logo-white.png'
import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import twitter from '../assets/twitter-icon.png'
import location from '../assets/location.png'
import phone_call from '../assets/phone_call.png'
import mail from '../assets/mail.png'


const Footer = () => {
    return (
        <>
            <div className='xl:flex flex-col mt-20 bg-gradient-to-t xl:bg-gradient-to-r from-[#3E187A] to-[#994ECC] text-white px-1 md:px-3 xl:px-0 pt-6 xl:pt-8 pb-5'>
                <div className='xl:flex justify-between mx-auto w-full max-w-[600px] xl:max-w-[1350px] px-4 pb-6 xl:pb-0'>
                    <div className='flex flex-col justify-between space-y-11 xl:space-y-16 h-full'>
                        <div className='flex items-center justify-center xl:justify-normal gap-3'>
                            <img src={logo} alt="logo" className='w-[58px] h-[68px] sm:w-[68px] sm:h-[78px]' />
                            <div className='space-y-1'>
                                <p className='font-["otomanopee-one"] sm:text-lg'>SURAKSHA SECURITY</p>
                                <div className='h-[1px] bg-white'></div>
                                <p className='font-["Red_Hat_Display"] text-xs sm:text-sm font-semibold'>Trusted Security Solutions</p>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <p className='font-["Philosopher"] text-lg'>FOLLOW US ON</p>
                            <div className='flex space-x-1'>
                                <img src={facebook} alt="facebook" className='w-[30px] h-[30px]' />
                                <img src={instagram} alt="instagram" className='w-[30px] h-[30px]' />
                                <img src={linkedin} alt="linkedin" className='w-[30px] h-[30px]' />
                                <img src={twitter} alt="twitter" className='w-[30px] h-[30px]' />
                            </div>
                            <p className='text-[#D8D8D8] lg:w-[400px] font-["Philosopher"] text-sm leading-4 xl:leading-[18px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elitquis nostrud exercitation ullamco laboris
                            </p>
                        </div>
                    </div>
                    <div className='pt-10 space-y-5 hidden xl:block'>
                        <h1 className='font-["Red_Hat_Display"] text-xl'>QUICK LINKS</h1>
                        <div className='font-["Philosopher"] space-y-2 text-[15px]'>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Services</p>
                            <p>Career</p>
                            <p>Contact Us</p>
                            <p>Career Form</p>
                            <p>Brochure</p>
                        </div>
                    </div>
                    <div className='pt-10 space-y-5 hidden xl:block'>
                        <h1 className='font-["Red_Hat_Display"] text-xl'>SERVICES</h1>
                        <div className='font-["Philosopher"] space-y-2 text-[15px]'>
                            <p>Security Guards</p>
                            <p>Lady Security Guards</p>
                            <p>Bouncers and Bodyguards</p>
                            <p>Gun Men</p>
                            <p>Revolver Men</p>
                            <p>Security Supervisors</p>
                            <p>Security Officers</p>
                        </div>
                    </div>
                    <div className='flex justify-between xl:hidden'>
                        <div className='pt-[70px] space-y-5'>
                            <h1 className='font-["Red_Hat_Display"] text-xl'>QUICK LINKS</h1>
                            <div className='font-["Philosopher"] space-y-2 text-sm md:text-[15px]'>
                                <p>Home</p>
                                <p>About Us</p>
                                <p>Services</p>
                                <p>Career</p>
                                <p>Contact Us</p>
                                <p>Career Form</p>
                                <p>Brochure</p>
                            </div>
                        </div>
                        <div className='pt-[70px] space-y-5'>
                            <h1 className='font-["Red_Hat_Display"] text-xl'>SERVICES</h1>
                            <div className='font-["Philosopher"] space-y-2 text-sm md:text-[15px]'>
                                <p>Security Guards</p>
                                <p>Lady Security Guards</p>
                                <p>Bouncers and Bodyguards</p>
                                <p>Gun Men</p>
                                <p>Revolver Men</p>
                                <p>Security Supervisors</p>
                                <p>Security Officers</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[70px] xl:pt-10 space-y-5 xl:w-[300px] mx-auto xl:mx-0'>
                        <h1 className='font-["Red_Hat_Display"] text-xl'>CONTACTS</h1>
                        <div className='font-["Philosopher"] space-y-4 xl:space-y-3 text-[15px]'>
                            <div className='flex space-x-3'>
                                <img src={location} alt="" className='h-6 w-6 rounded-full' />
                                <p className='leading-4 xl:leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className='flex space-x-3'>
                                <img src={phone_call} alt="" className='h-6 w-6 rounded-full' />
                                <p>7439537213 , 9474812394</p>
                            </div>
                            <div className='flex space-x-3'>
                                <img src={mail} alt="" className='h-6 w-6' />
                                <p>surakshasecurity@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-[#6C6C6C] h-[1px] w-full max-w-[600px] xl:max-w-[1350px] mx-auto my-5 max-[425px]:w-[95%]' />
                <p className='font-["Red_Hat_Display"] text-center text-[13px] xl:text-[15px]'>DESIGNED AND DEVELOPED BY : AYAN | SHIVANSHU</p>
            </div>
        </>
    )
}

export default Footer