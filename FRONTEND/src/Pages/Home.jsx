
import HomeBanner from '../Components/HomeBanner'
import Navbar from '../Components/Navbar'
import HomeServices from "../Components/HomeServices"
import HomeAbout from "../Components/HomeAbout"
import HomeCertificate from "../Components/HomeCertificate"
const Home=()=>{
    return(
        <>
            <body className="bg-[#ECECEC]">
                <Navbar/>
                <HomeBanner />
                <HomeAbout/>
                <HomeServices/>
                <HomeCertificate/>
            </body>
        </>
    )
}
export default Home