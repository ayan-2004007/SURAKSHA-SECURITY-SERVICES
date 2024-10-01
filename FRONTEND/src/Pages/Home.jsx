
import HomeBanner from '../Components/HomeBanner'
import Navbar from '../Components/Navbar'
import HomeServices from "../Components/HomeServices"
const Home=()=>{
    return(
        <>
            <body className="bg-[#ECECEC]">
                <Navbar/>
                <HomeBanner />
                <HomeServices/>
            </body>
        </>
    )
}
export default Home