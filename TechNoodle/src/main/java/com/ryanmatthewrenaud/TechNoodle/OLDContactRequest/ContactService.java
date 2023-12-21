package com.ryanmatthewrenaud.TechNoodle.OLDContactRequest;

import java.util.ArrayList;
import java.time.LocalDate;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

@Service
public class ContactService {
	
	private static List<Contact> contactList = new ArrayList<>();

	static {
		contactList.add(new Contact(1, "Ryan", "Renaud", "ryanmatthewrenaud@gmail.com", "401-787-7617", "I want a data backup performed to ensure I do not lose any data.", false, LocalDate.now()));
		contactList.add(new Contact(2, "Sierra", "Vecchitto", "sierrafawnvecchitto@gmail.com", "401-536-1467", "I want to speed up my computer, and make sure my hardware is functioning as intended.",false, LocalDate.now()));
	}
	
	public List<Contact> GetAllContacts() {
		return contactList;
	}
	
	public Contact GetContactById(int id) {
		Predicate<? super Contact> predicate = contact -> contact.getId() == id; 
		return contactList.stream().filter(predicate).findFirst().orElse(null);
	}

	public void AddContact(Contact contact) {
		contact.setId(contactList.size()+1);
		contactList.add(contact);
	}
	
	public void DeleteContactById(int id) {
		Predicate<? super Contact> predicate = contact -> contact.getId() == id; 
		Contact contact = contactList.stream().filter(predicate).findFirst().orElse(null);
		contactList.remove(contact.getId()-1); // removing one here fixes the issue of it removing the wrong item.
		// resolved issues with it
	}
}


