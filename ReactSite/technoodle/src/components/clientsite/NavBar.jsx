// Logo Import
import mainLogo from './assests/images/logo-main.jpg';
import pageLogo from "./assests/images/logo-page-nobg.png";
import clientsite from './assests/styling/clientsite.css'
import { FaFacebook, FaLinkedin } from "react-icons/fa";


export default function NavBar() {

    function displayMenuItems() {
        var checkBox = document.getElementById("dropdown");
        // Get the output text
        const collection = document.getElementsByClassName('navitem-nav');

        const view = document.getElementById("view-mobile");

        // If the checkbox is checked, display the output text
        if (checkBox.checked === true) {
            for (let ctr = 0; ctr < collection.length; ctr++) {
                view.style.transition = "height 0.2s";
                view.style.height = "204px";
                collection[ctr].style.display = "block";
                collection[ctr].style.height = "30px";

            }
        } else {
            for (let ctr = 0; ctr < collection.length; ctr++) {
                collection[ctr].style.display = "none";
                view.style.height = "50px";
            }
        }

    }

    return (

        <div className='navbar-container'>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <ul id="view-mobile" className='navbar-ul'>
                <li className='navbar-item1'><img className="nav-logo" src={pageLogo} alt="main-logo" /></li>
                <li className='navitem navbar-item2'><a id="navitem" className='navitem-nav' href="#home">Home</a></li>
                <li className='navitem navbar-item3'><a id="navitem"
                    className='navitem-nav' href="#about">About</a></li>
                <li className='navitem navbar-item4'><a id="navitem" className='navitem-nav' href="#services">Services</a></li>
                <li className='navitem navbar-item5'><a id="navitem"
                    className='navitem-nav' href="#contact">Contact</a></li>
                <li className='navbar-item6'>
                    <label className='nav-dropdown-label'>
                        Menu
                        <input type='checkbox' className='nav-dropdown-checkbox' id="dropdown" onClick={displayMenuItems} />
                    </label>

                </li>
                <li className='navbar-item7'>
                    <a id="navitem"
                        className='navitem-nav' href="https://www.facebook.com/profile.php?id=100069457451895" target="_blank" ><FaFacebook className='icon-size' />acebook</a>
                </li>
            </ul>
        </div>
    )
}