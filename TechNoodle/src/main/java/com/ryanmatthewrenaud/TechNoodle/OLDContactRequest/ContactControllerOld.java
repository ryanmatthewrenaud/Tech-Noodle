package com.ryanmatthewrenaud.TechNoodle.OLDContactRequest;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactControllerOld {
	private ContactService service;
	
	public ContactControllerOld() {
		service = new ContactService();
	}
	
	@GetMapping(path = "/api/contactList")
	public List<Contact> GetContactList() {
		return service.GetAllContacts();
	}
	
	@GetMapping(path = "/api/contactList/{id}")
	public Contact GetContactById(@PathVariable int id) {
		return service.GetContactById(id);
	}
	
	@PostMapping(path = "/api/contactList")
	public Contact AddContact(@RequestBody Contact contact) {
		service.AddContact(contact);
		return contact;
	}
	
	@DeleteMapping(path ="/api/contactList/{id}")
	public List<Contact> DeleteContactById(@PathVariable int id) {
		service.DeleteContactById(id);
		return service.GetAllContacts();
	}

}
