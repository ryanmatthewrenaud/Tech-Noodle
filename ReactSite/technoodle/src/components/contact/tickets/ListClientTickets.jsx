import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

import DeleteClientTicket from "./DeleteClientTicket";
import EditClientTicket from "./EditClientTicket";


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
                    <th>Archived</th>
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
                        <td>{ticket.archived.toString()}</td>
                        <td><EditClientTicket id={contactID} ticketID={ticket.id} device={ticket.device} description={ticket.description} contacted={ticket.contacted} lastContacted={ticket.lastContacted} disposition={ticket.disposition} /><DeleteClientTicket ticketSize={tickets.length} contactID={contactID} ticketID={ticket.id} archived={ticket.archived} /></td>
                    </tbody>
                ))}
            </Table>
        </div >
    )
}