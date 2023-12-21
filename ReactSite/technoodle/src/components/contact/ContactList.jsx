import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './styling/Contacts.css'
import EditContact from './EditContact';
import AddContact from './AddContact';
import DeleteContact from './DeleteContact';
import ListClientTickets from './tickets/ListClientTickets';
import AddClientTicket from './tickets/AddClientTicket';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/contacts')
      .then(response => {
        setContacts(response.data);
      }).catch(error => {
        console.log(error);
      });
  })

  return (
    <div className='contact'>
      <h2 className='contactHeader'>Contacts</h2>

      <Table className='contactTable' bordered >
        <thead>
          <th>Name(First & Last)</th>
          <th>Email</th>
          <th>Phone #</th>
          <th>Tickets</th>
          <th>Modify</th>
        </thead>
        {contacts.map(contact => (
          <tbody key={contact.id}>
            <td>{contact.firstName} {contact.lastName}</td>
            <td>{contact.email}</td>
            <td>{contact.phoneNumber}</td>
            <td><ListClientTickets contactID={contact.id} /></td>
            <td>
              <AddClientTicket contactID={contact.id} />
              <EditContact id={contact.id} firstName={contact.firstName} lastName={contact.lastName} email={contact.email} phoneNumber={contact.phoneNumber} />
              <DeleteContact id={contact.id} />
            </td>
          </tbody>
        ))}

      </Table>
      <AddContact />
    </div >
  )

};
