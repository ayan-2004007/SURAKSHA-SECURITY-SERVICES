
import HomeBanner from '../Components/HomeBanner'
import Navbar from '../Components/Navbar'
import HomeServices from "../Components/HomeServices"
import HomeAbout from "../Components/HomeAbout"
const Home=()=>{
    return(
        <>
            <body className="bg-[#ECECEC]">
                <Navbar/>
                <HomeBanner />
                <HomeAbout/>
                <HomeServices/>
            </body>
        </>
    )
}
export default Home