import NavigationBar from '../components/navigationBar'
import ContactForm from '../components/form'
import ImageSlider from '../components/imageSlider'
import '../style/homePage.css'
import About from '../components/aboutSection'
import VideoPlayer from '../components/videoPlayer'
// import Program from '../components/program'
import Testimonials from '../components/testimonials'
import PrincipalMessage from '../components/principalMsg'
import AddressMap from '../components/AddressMap'
import Counselling from '../components/counselling'
import HoverDevCards from '../components/subComponents/styledCard'
import { HoverImageLinks } from '../components/Activities'

const HomePage = () => {
    return (
        <div className='home-page'>


            <NavigationBar />
            <div className="content">


                <ImageSlider />
                <About />
                <VideoPlayer />
                {/* <Program /> */}
                <HoverImageLinks />
                <Testimonials />
                <PrincipalMessage />
                <ContactForm />
                {/* <Counselling /> */}
                <HoverDevCards />
                <AddressMap />



            </div>
        </div>

    )
}

export default HomePage