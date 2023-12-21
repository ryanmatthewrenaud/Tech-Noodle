package com.ryanmatthewrenaud.TechNoodle.Contacting;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.util.List;
import java.util.Timer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.ryanmatthewrenaud.TechNoodle.Contacting.Tickets.Ticket;
import com.ryanmatthewrenaud.TechNoodle.Contacting.Tickets.TicketRepository;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class ContactController {
	private ContactRepository contactRepository;
	private TicketRepository ticketRepository;

	// Constructor
	public ContactController(ContactRepository repository, TicketRepository ticketRepository) {
		this.contactRepository = repository;
		this.ticketRepository = ticketRepository;
	}

	// Get Contacts

	// ALL CONTACTS
	@GetMapping(path = "/api/contacts")
	public List<Contact> getAllContacts(){
		return contactRepository.findAll();
	}

	// GET ONE CONTACT BY ID
	@GetMapping(path = "/api/contacts/{id}")
	public Contact getAllContacts(@PathVariable int id){
		return contactRepository.findById(id).orElseThrow(RuntimeException::new);
	}

	// CREATE CONTACT
	@PostMapping(path = "/api/contacts")
	@ResponseStatus(code = HttpStatus.CREATED)
	public ResponseEntity createContact(@RequestBody Contact contact) throws URISyntaxException{
		Contact currentContact = contact;
		contact.setPhoneNumber(contact.formatPhoneNumber());
		contactRepository.save(contact);
		return ResponseEntity.created(new URI("/contacts/" + currentContact.getId())).body(currentContact);
	}

	// DELETE BY ID
	@DeleteMapping(path = "/api/contacts/{id}")
	public ResponseEntity deleteContactById(@PathVariable int id){
		Contact currentContact = contactRepository.findById(id).orElseThrow(RuntimeException::new);
		List<Ticket> allTickets = currentContact.getAllContactTickets();
		while(allTickets.size() > 0) {
			int temp = allTickets.size()-1;
			Ticket tempTicket = allTickets.get(allTickets.size() -1 );
			currentContact.removeTicket(temp);
			ticketRepository.delete(tempTicket);
		}
		contactRepository.save(currentContact);
		contactRepository.delete(currentContact);
		return ResponseEntity.ok().build();
	}

	// UPDATE CONTACTED VALUE BY ID

	@PatchMapping(path ="/api/contacts/{id}/contact")
	public ResponseEntity editContactedValue(@PathVariable int id, @RequestBody Contact contact) {
		Contact currentContact = contactRepository.findById(id).orElseThrow(RuntimeException::new);
		contactRepository.save(currentContact);
		return ResponseEntity.ok(currentContact);
	}

	// UPDATE CONTACT BY ID

	@PutMapping(path ="/api/contacts/{id}/edit")
	public ResponseEntity editContactById(@PathVariable int id, @RequestBody Contact contact) {
		Contact currentContact = contactRepository.findById(id).orElseThrow(RuntimeException::new);
		currentContact.setPhoneNumber(contact.getPhoneNumber());
		currentContact.setEmail(contact.getEmail());
		contactRepository.save(currentContact);
		return ResponseEntity.ok(currentContact);
	}

	// RETRIEVE ALL CONTACT TICKETS

	@GetMapping(path="/api/contacts/tickets")
	public List<Ticket> getAllContactTickets(){
		return ticketRepository.findAll();
	}

	// RETRIEVE ALL CONTACT TICKETS BY CONTACT ID
	@GetMapping(path="/api/contacts/{contactID}/tickets")
	public List<Ticket> getAllContactTicketsByContactID(@PathVariable int contactID){
		Contact testContact = contactRepository.findById(contactID).orElseThrow(RuntimeException::new);
		return testContact.getAllContactTickets();
	}

	// RETRIEVE SINGLE CONTACT TICKETS BY CONTACT ID AND TICKET ID
	@GetMapping(path="/api/contacts/{contactID}/tickets/{ticketID}")
	public Ticket getAllContactTicketsByContactID(@PathVariable int contactID, @PathVariable int ticketID){
		Contact testContact = contactRepository.findById(contactID).orElseThrow(RuntimeException::new);
		return testContact.getTicketByID(ticketID);
	}

	@PostMapping(path="/api/contacts/{contactID}/tickets")
	public ResponseEntity createTicketByContactID(@PathVariable int contactID, @RequestBody Ticket newTicket ) throws URISyntaxException {
		Contact currentContact = contactRepository.findById(contactID).orElseThrow(RuntimeException::new);
		Ticket currentTicket = ticketRepository.save(newTicket);
		currentTicket.setContact(currentContact);
		currentTicket.setContacted(false);
		currentTicket.setLastContacted(LocalDate.now());
		currentTicket.setDisposition("Not Started");
		ticketRepository.save(currentTicket);
		return ResponseEntity.created(new URI("/contacts/" + currentContact.getId() + "/tickets/" + currentTicket.getId())).body(currentContact);
	}

	@DeleteMapping(path="/api/contacts/{contactID}/tickets/{ticketID}")
	public ResponseEntity deleteContactTicketByContactTicketID(@PathVariable int contactID, @PathVariable int ticketID ) throws URISyntaxException {
		Contact currentContact = contactRepository.findById(contactID).orElseThrow(RuntimeException::new);
		Ticket currentTicket = currentContact.getTicketByID(ticketID);
		currentContact.removeTicket(ticketID);
		ticketRepository.delete(currentTicket);
		contactRepository.save(currentContact);
		return ResponseEntity.ok().build();
	}
	
	@PutMapping(path ="/api/contacts/{contactID}/tickets/{ticketID}/contacted")
	public ResponseEntity ContactTicketContact(@PathVariable int contactID, @PathVariable int ticketID) {
		Ticket currentTicket = ticketRepository.findById(ticketID).orElseThrow(RuntimeException::new);
		currentTicket.setContacted(true);
		currentTicket.setLastContacted(LocalDate.now());
		ticketRepository.save(currentTicket);
		return ResponseEntity.ok(currentTicket);
	}
	
	@PutMapping(path ="/api/contacts/{contactID}/tickets/{ticketID}")
	public ResponseEntity dispositionChangeContactTicket(@PathVariable int contactID, @PathVariable int ticketID, @RequestBody Ticket tempTicket) {
		Ticket currentTicket = ticketRepository.findById(ticketID).orElseThrow(RuntimeException::new);
		currentTicket.setDisposition(tempTicket.getDisposition());
		ticketRepository.save(currentTicket);
		return ResponseEntity.ok(currentTicket);
	}
}
