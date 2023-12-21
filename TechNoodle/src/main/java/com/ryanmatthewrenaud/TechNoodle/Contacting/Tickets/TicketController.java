//package com.ryanmatthewrenaud.TechNoodle.Contacting.Tickets;
//
//import java.net.URI;
//import java.net.URISyntaxException;
//import java.time.LocalDate;
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
////import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
////import org.springframework.web.bind.annotation.PatchMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.PostMapping;
////import org.springframework.web.bind.annotation.PutMapping;
////import org.springframework.web.bind.annotation.RequestBody;
////import org.springframework.web.bind.annotation.ResponseStatus;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.ryanmatthewrenaud.TechNoodle.Contacting.Contact;
//
//@CrossOrigin(origins ="http://localhost:3000")
//@RestController
//public class TicketController {
//	private TicketRepository repository;
//	
//	public TicketController(TicketRepository repository) {
//		this.repository = repository;
//	}
//	
//	@GetMapping(path="/api/contacts/tickets")
//	public List<Ticket> getAllTickets(){
//		return repository.findAll();
//	}
//	
//	@GetMapping(path="/api/contacts/tickets/{id}")
//	public Ticket getTicketById(@PathVariable int id){
//		return repository.findById(id).orElseThrow(RuntimeException::new);
//	}
//	
//	@PostMapping(path="/api/contacts/tickets")
//	public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) throws URISyntaxException{
//		Ticket currentTicket = repository.save(ticket);
//		return ResponseEntity.created(new URI("/clients/" + currentTicket.getId())).body(currentTicket);
//		
//	}
//	
//}
