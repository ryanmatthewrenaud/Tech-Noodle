import { useState } from "react"
import clientsite from './assests/styling/clientsite.css'

export default function Services() {
    const [prices, setPrices] = useState(
        {
            datatransfer: 10,
            setup: 10,
            hardwareinstall: 10,
            restorenodata: 10,
            restorewithdata: 10,
            softwareinstall: 10,
        }
    )


    return (
        <div className="services-background">
            <div className="services-container">
                <h3><b>Our Services</b></h3>
                <ul className="services-ul">
                    <li className="services-li">Data Transfer - ${prices.datatransfer.toFixed(2)}</li>
                    <li className="services-li">Setup - ${prices.setup.toFixed(2)}</li>
                    <li className="services-li">Hardware Install - ${prices.hardwareinstall.toFixed(2)}</li>
                    <li className="services-li">Restore without data - ${prices.restorenodata.toFixed(2)}</li>
                    <li className="services-li">Restore with data - ${prices.restorewithdata.toFixed(2)}</li>
                    <li className="services-li">Software Install - ${prices.softwareinstall.toFixed(2)}</li>
                    {/* added to make it look more change in future */}
                    <li className="services-li">Data Transfer - ${prices.datatransfer.toFixed(2)}</li>
                    <li className="services-li">Setup - ${prices.setup.toFixed(2)}</li>
                    <li className="services-li">Hardware Install - ${prices.hardwareinstall.toFixed(2)}</li>
                    <li className="services-li">Restore without data - ${prices.restorenodata.toFixed(2)}</li>
                    <li className="services-li">Restore with data - ${prices.restorewithdata.toFixed(2)}</li>
                    <li className="services-li">Software Install - ${prices.softwareinstall.toFixed(2)}</li>

                </ul>
            </div >
        </div >
    )
}