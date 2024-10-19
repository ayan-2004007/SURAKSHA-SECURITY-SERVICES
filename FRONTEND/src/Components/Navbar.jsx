import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-removebg-preview.png';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const navigate = useNavigate();

    return (
        <>
            {/* Pre_Navbar */}
            <div className='lg:flex justify-between items-center lg:px-[85px] py-3 lg:py-4 space-y-4 lg:space-y-0 text-center w-full bg-gradient-to-r from-[#3E187A] to-[#994ECC] text-white'>
                <div>
                    <p className='font-["Red_Hat_Display"] lg:tracking-widest text-xs lg:text-sm xl:text-base'><span className='font-["otomanopee-one"]'>CONTACT US ON : </span> +91 74395 37213 &nbsp;+91 94748 12394</p>
                </div>
                <div>
                    <p className='font-["Red_Hat_Display"] tracking-widest text-xs lg:text-sm xl:text-base'><span className='font-["otomanopee-one"]'>MAIL US ON : </span> &nbsp;surakshasecurity@gmail.com</p>
                </div>
            </div>

            {/* Navbar */}
            <div className='sticky top-0 flex justify-between items-center px-5 py-1 lg:hidden z-50 bg-[#ECECEC]/35 backdrop-blur-lg'>
                <div className='logo flex items-center space-x-2'>
                    <img src={logo} alt="logo" className='w-[47px] h-[55px]' />
                    <div className='space-y-0.5'>
                        <p className='font-["otomanopee-one"] text-[13px]'>SURAKSHA SECURITY</p>
                        <div className='h-0.5 bg-black'></div>
                        <p className='font-["Red_Hat_Display"] text-[11px] font-semibold'>Trusted Security Solutions</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-1 cursor-pointer' onClick={toggleMenu}>
                    <div className='h-[3px] w-6 bg-black'></div>
                    <div className='h-[3px] w-6 bg-black'></div>
                    <div className='h-[3px] w-6 bg-black'></div>
                </div>
            </div>

            <div className={`fixed z-50 top-0 left-0 w-screen h-screen bg-[#ECECEC] transition-transform flex-col duration-300 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-[110%]'} lg:hidden`}>
                <button className='absolute top-2 right-6 text-black text-4xl' onClick={toggleMenu}>&times;</button>
                <div className='flex flex-col items-center justify-center h-full space-y-10 font-["Philosopher"] list-none text-xl'>
                    <li onClick={() => navigate('/')}>HOME</li>
                    <li onClick={() => navigate('/about')}>ABOUT</li>
                    <li>SERVICS</li>
                    <li onClick={() => navigate('/career')}>CAREERS</li>
                    <li onClick={() => navigate('/contact')}>CONTACT</li>
                    <button className='text-white bg-gradient-to-r from-[#3E187A] to-[#994ECC] p-2 rounded-md'>BROCHURE</button>
                </div>
            </div>

            <div className='sticky top-0 px-6 xl:px-20 z-50 bg-[#ECECEC]/35 backdrop-blur-lg'>
                <div className='hidden lg:flex justify-between items-center w-full px-14 py-1 rounded-[10px]'>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="logo" className='lg:w-[48px] lg:h-[56px] xl:w-[58px] xl:h-[66px]' />
                        <div>
                            <p className='font-["otomanopee-one"] text-lg'>SURAKSHA SECURITY</p>
                            <div className='h-0.5 bg-black'></div>
                            <p className='font-["Red_Hat_Display"] text-sm font-semibold'>Trusted Security Solutions</p>
                        </div>
                    </div>
                    <div className='items flex items-center gap-72'>
                        <div className='flex'>
                            <ul className='flex font-["Philosopher"] text-[15px] font-extrabold space-x-5 xl:space-x-10 items-center cursor-pointer'>
                                <li onClick={() => navigate('/')}>HOME</li>
                                <li onClick={() => navigate('/about')}>ABOUT</li>
                                <li>SERVICS</li>
                                <li onClick={() => navigate('/career')}>CAREERS</li>
                                <li onClick={() => navigate('/contact')}>CONTACT</li>
                                <button className='text-white bg-gradient-to-r from-[#3E187A] to-[#994ECC] p-2 rounded-md'>BROCHURE</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar