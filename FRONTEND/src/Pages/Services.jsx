
import React from "react"
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import ServiceBanner from "../Components/ServiceBanner"
import ServicesAll from "../Components/ServicesAll"
import ScrollToTop from "../Components/ScrollToTop"
<ScrollToTop/>

const Services=()=>{
    return(
        <>
            <body className="bg-[#ECECEC]">
                <ScrollToTop/>
                <Navbar/>
                <ServiceBanner/>
                <ServicesAll/>
                <Footer/>
            </body>
        </>
    )
}
export default Services