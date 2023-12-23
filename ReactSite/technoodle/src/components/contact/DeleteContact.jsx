import { Button } from "react-bootstrap";
import axios from 'axios';

export default function DeleteContact({ id }) {

    const handleRemove = async (event) => {
        event.preventDefault();
        try {
            const response = axios.delete(`http://localhost:8080/api/contacts/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Button variant="danger" onClick={handleRemove}>Remove Contact</Button>
        </div>
    )

}