package com.ryanmatthewrenaud.TechNoodle.Contacting;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import com.ryanmatthewrenaud.TechNoodle.Contacting.Tickets.Ticket;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Contact {
	// Instance Variables used
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNumber;
	private boolean initialContact;
	private LocalDate initialContactDate;

	@OneToMany(mappedBy = "contact", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Ticket> tickets;

	public Contact() {

	}

	// Constructor for contact, takes in 5 params
	public Contact(int id, String firstName, String lastName, String email, String phoneNumber, boolean initialContact,
			LocalDate initialContactDate) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.initialContact = initialContact;
		this.initialContactDate = initialContactDate;
	}

	// Getters
	public int getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public List<Ticket> getAllContactTickets() {
		return tickets;
	}

	public Ticket getTicketByID(int id) {
		for (int ctr = 0; ctr < tickets.size(); ctr++) {
			if (tickets.get(ctr).getId() == id) {
				return tickets.get(ctr);
			}
		}
		return null;
	}

	public void removeTicket(int id) {
		for (int ctr = 0; ctr < tickets.size(); ctr++) {
			if (tickets.get(ctr).getId() == id) {
				tickets.remove(ctr);
			}
		}
	}

	public void setInitialContact(boolean initialContact) {
		this.initialContact = initialContact;
	}

	public boolean getInitialContact() {
		return initialContact;
	}

	public void setInitialContactDate(LocalDate initialContactDate) {
		this.initialContactDate = initialContactDate;
	}

	public LocalDate getInitialContactDate() {
		return initialContactDate;
	}

	public String formatPhoneNumber() {
		String phoneNumber = this.phoneNumber;
		phoneNumber.replaceAll("[^\\d]", "");
		if (phoneNumber.charAt(0) == '1' && phoneNumber.length() > 10) {
			phoneNumber = phoneNumber.substring(1);
		}
		java.text.MessageFormat phoneNumberFormat = new java.text.MessageFormat("({0})-{1}-{2}");
		String[] phoneNumberArray = { phoneNumber.substring(0, 3), phoneNumber.substring(3, 6),
				phoneNumber.substring(6) };
		return phoneNumberFormat.format(phoneNumberArray);
	}

	// Generic toString()
	@Override
	public String toString() {
		return "Contact [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", phoneNumber="
				+ phoneNumber + "]";
	}
}