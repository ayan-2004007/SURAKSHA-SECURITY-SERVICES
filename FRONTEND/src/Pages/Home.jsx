
import HomeBanner from '../Components/HomeBanner'
import Navbar from '../Components/Navbar'
import HomeServices from "../Components/HomeServices"
import HomeAbout from "../Components/HomeAbout"
import HomeCertificate from "../Components/HomeCertificate"
import CustomerReview from "../Components/CustomerReview"
import TrustedClients from "../Components/TrustedClients"
import Footer from "../Components/Footer"
const Home=()=>{
    return(
        <>
            <body className="bg-[#ECECEC] overflow-hidden">
                <Navbar/>
                <HomeBanner />
                <HomeAbout/>
                <HomeServices/>
                <HomeCertificate/>
                <CustomerReview/>
                <TrustedClients/>
                <Footer/>
            </body>
        </>
    )
}
export default Home