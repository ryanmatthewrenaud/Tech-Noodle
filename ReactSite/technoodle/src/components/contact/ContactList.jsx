import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import contacts from './styling/Contacts.css'
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
    <div>
      <div className='management-dash'>
        <div className='contacts'>
          <Table bordered >
            <thead>
              <th>Name(First & Last)</th>
              <th>Email</th>
              <th>Phone #</th>
              <th>Initial Contacted</th>
              <th>Initial Contact Date</th>
              <th>Tickets</th>
              <th>Modify</th>
            </thead>
            {contacts.map(contact => (
              <tbody key={contact.id}>
                <td>{contact.firstName} {contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.initialContact.toString()}</td>
                <td>{contact.initialContactDate}</td>
                <td><ListClientTickets contactID={contact.id} /></td>
                <td>
                  <AddClientTicket contactID={contact.id} />
                  <EditContact id={contact.id} firstName={contact.firstName} lastName={contact.lastName} email={contact.email} phoneNumber={contact.phoneNumber} />
                  <DeleteContact id={contact.id} />
                </td>
              </tbody>
            ))}

          </Table>
        </div>
        <AddContact />
      </div>
    </div >
  )

};
