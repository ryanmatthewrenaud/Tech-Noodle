package com.ryanmatthewrenaud.TechNoodle.OLDContactRequest;

import java.time.LocalDate;

public class Contact {
	// Instance Variables used 
	
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNumber;
	private String description;
	private boolean contacted;
	private LocalDate lastContacted;
	
	
	
	// Constructor for contact, takes in 5 params
	public Contact(int id, String firstName, String lastName, String email, String phoneNumber, String description, boolean contacted, LocalDate lastContacted) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.description = description;
		this.contacted = contacted;
		this.lastContacted = lastContacted;
	}
	
	//Getters
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
	
	public String getDescription() {
		return description;
	}
	
	public boolean getContacted() {
		return contacted;
	}
	
	public LocalDate getLastContacted() {
		return lastContacted;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public void setContacted(boolean contacted) {
		this.contacted = contacted;
	}
	
	public void setLastContacted(LocalDate lastContacted) {
		this.lastContacted = lastContacted;
	}
	
	// Generic toString()
	@Override
	public String toString() {
		return "Contact [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", phoneNumber="
				+ phoneNumber + ", contacted=" + contacted + ", lastContacted=" + lastContacted + "]";
	}
	
	
	
	
}
