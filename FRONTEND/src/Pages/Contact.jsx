import React from 'react'
import Navbar from '../Components/Navbar'
import ContactBanner from '../Components/ContactBanner'
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'

const Contact = () => {
    return (
        <>
            <body className='bg-[#ECECEC]'>
            <ScrollToTop/>
                <Navbar />
                <ContactBanner />
                <Footer />
            </body>
        </>
    )
}

export default Contact