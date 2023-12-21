import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';


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
                </thead>
                {tickets.map(ticket => (
                    <tbody tbody key={ticket.id} >
                        <td>{ticket.id}</td>
                        <td>{ticket.device}</td>
                        <td>{ticket.description}</td>
                        <td>{ticket.contacted.toString()}</td>
                        <td>{ticket.lastContacted}</td>
                        <td>{ticket.disposition}</td>
                    </tbody>
                ))}
            </Table>
        </div >
    )
}