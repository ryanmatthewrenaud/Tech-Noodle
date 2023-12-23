import Button from 'react-bootstrap/Button';
import axios from "axios"

export default function DeleteClientTicket({ contactID, ticketID }) {
    const handleRemove = async (e) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/contacts/${contactID}/tickets/${ticketID}`)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            <Button variant="danger" onClick={handleRemove}>Remove Ticket</Button>
        </div>
    )
}