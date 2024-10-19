import React from 'react'
import Navbar from '../Components/Navbar'
import ContactBanner from '../Components/ContactBanner'
import Footer from '../Components/Footer'

const Contact = () => {
    return (
        <>
            <body className='bg-[#ECECEC]'>
                <Navbar />
                <ContactBanner />
                <Footer />
            </body>
        </>
    )
}

export default Contact