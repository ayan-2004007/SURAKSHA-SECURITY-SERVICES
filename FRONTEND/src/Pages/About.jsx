import React from 'react'
import Navbar from '../Components/Navbar'
import AboutIntro from '../Components/AboutIntro'
import Footer from '../Components/Footer'

const About = () => {
    return (
        <>
            <body className='bg-[#ECECEC]'>
                <Navbar />
                <AboutIntro/>
                <Footer />
            </body>
        </>
    )
}

export default About