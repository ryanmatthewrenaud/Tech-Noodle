import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default function ListClientTickets({ contactID }) {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/contacts/${contactID}/tickets`)
            .then(response => {
                setTickets(response.data);
            }).catch(error => {
                console.log(error);
            });
    })

    const handleRemove = async (event, ticketID) => {
        try {
            console.log(ticketID)
            console.log(contactID)
            const response = axios.delete(`http://localhost:8080/api/contacts/${contactID}/tickets/${ticketID}`)
        } catch (error) {
            console.log(error);
        }

    }

    return (

        <div>
            <Table>
                <thead>
                    <th>Device ID</th>
                    <th>Device</th>
                    <th>Description</th>
                    <th>Contacted</th>
                    <th>Last Contacted</th>
                    <th>Disposition</th>
                    <th>Modify</th>
                </thead>
                {tickets.map(ticket => (
                    <tbody tbody key={ticket.id} >
                        <td>{ticket.id}</td>
                        <td>{ticket.device}</td>
                        <td>{ticket.description}</td>
                        <td>{ticket.contacted.toString()}</td>
                        <td>{ticket.lastContacted}</td>
                        <td>{ticket.disposition}</td>
                        <td><Button variant="danger" onClick={(e) => handleRemove(e, ticket.id)}>Remove Ticket</Button></td>
                    </tbody>
                ))}
            </Table>
        </div >
    )
}