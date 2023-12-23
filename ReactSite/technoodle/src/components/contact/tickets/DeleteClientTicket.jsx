import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useState } from 'react';

export default function DeleteClientTicket({ticketSize, contactID, ticketID}){
    const [contactTickets, setContactTicket] = useState();


    const handleRemove = async () => {
        try {
            console.log(ticketID)
            console.log(contactID)
            const getTickets = await axios.get(`http://localhost:8080/api/contacts/${contactID}/tickets`);
            console.log(getTickets.data)
            // const response = await axios.delete(`http://localhost:8080/api/contacts/${contactID}/tickets/${ticketID}`)
            console.log("Ticket Array Size: " + ticketSize)
            console.log("Contact ID: " + contactID)
            console.log("Ticket ID: " + ticketID)
            console.log("Ticket Fix: " + (ticketID))
        } catch (error) {
            console.log(error);
            console.log(error.response.data);
        }
    }
    return(
        <div>
            <Button variant="danger" onClick={handleRemove}>Remove Ticket</Button>
        </div>
    )
}