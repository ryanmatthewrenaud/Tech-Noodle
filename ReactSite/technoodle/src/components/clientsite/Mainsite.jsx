import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Services from "./Services";
import Welcome from "./Welcome";
import clientsite from '../clientsite/assests/styling/clientsite.css'

export default function MainSite() {
    return (
        <div className="main-site">
            <NavBar />
            <div id="home">
                <Welcome />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}