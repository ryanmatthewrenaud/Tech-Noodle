import { useState } from "react"
import clientsite from './assests/styling/clientsite.css'

export default function Services() {
    const [service, setService] = useState(
        {   
            servicename: "service",
            service: 1
        }
    )


    return (
        <div className="services-background">
            <div className="services-container">
                <h3><b>Our Services</b></h3>
                <ul className="services-ul">
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>
                    {/* added to make it look more change in future */}
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>
                    <li className="services-li">{service.servicename} - ${service.service.toFixed(2)}</li>

                </ul>
            </div >
        </div >
    )
}