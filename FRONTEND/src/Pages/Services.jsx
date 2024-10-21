
import React from "react"
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import ServiceBanner from "../Components/ServiceBanner"
import ServicesAll from "../Components/ServicesAll"

const Services=()=>{
    return(
        <>
            <body className="bg-[#ECECEC]">
                <Navbar/>
                <ServiceBanner/>
                <ServicesAll/>
                <Footer/>
            </body>
        </>
    )
}
export default Services