import { FaFacebook, FaLinkedin } from "react-icons/fa";
import clientsite from './assests/styling/clientsite.css'

export default function Footer() {
    return (
        <div className="footer-bg">
            <footer className="footer-container">
                <a href="https://www.linkedin.com/in/ryan-matthew-renaud/" target="_blank"><p className="footer-text">Created by Ryan Renaud <FaLinkedin className="footer-text-icon" /></p></a>

            </footer >
        </div >
    )
}