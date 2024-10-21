import React from 'react'
import Navbar from '../Components/Navbar'
import CareerBanner from '../Components/CareerBanner'
import CareerIntro from '../Components/CareerIntro'
import CareerJoin from '../Components/CareerJoin'
import Footer from '../Components/Footer'

const Contact = () => {
    return (
        <>
            <body className='bg-[#ECECEC]'>
                <Navbar />
                <CareerBanner/>
                <CareerIntro/>
                <CareerJoin/>
                <Footer />
            </body>
        </>
    )
}
export default Contact