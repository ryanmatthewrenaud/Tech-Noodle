import pageicon from './assests/images/logo-main-nobg-about.png'
import clientsite from './assests/styling/clientsite.css'
export default function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h3><b>About Us</b></h3>
                <img className="about-icon" src={pageicon} />
                <p className="about-text"><b>Lorem</b> ipsum,
                </p>
                <p className="about-text">
                </p>
                <hr />
            </div>
        </div>
    )
}