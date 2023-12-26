package com.ryanmatthewrenaud.TechNoodle.Contacting.Tickets;

import java.time.LocalDate;

import com.ryanmatthewrenaud.TechNoodle.Contacting.Contact;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String device;
	private String description;
	private boolean contacted;
	private LocalDate lastContacted;
	private String disposition;
	private boolean archived;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "ticket_id")
	private Contact contact;

	public Ticket() {

	}

	public Ticket(int id, String device, String description, boolean contacted, LocalDate lastContacted,
			String disposition, boolean archived, Contact contact) {
		super();
		this.id = id;
		this.device = device;
		this.description = description;
		this.contacted = contacted;
		this.lastContacted = lastContacted;
		this.disposition = disposition;
		this.contact = contact;
		this.archived = archived;
	}

	public int getId() {
		return id;
	}

	public String getDevice() {
		return device;
	}

	public void setDevice(String device) {
		this.device = device;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean getContacted() {
		return contacted;
	}

	public void setContacted(boolean contacted) {
		this.contacted = contacted;
	}

	public LocalDate getLastContacted() {
		return lastContacted;
	}

	public void setLastContacted(LocalDate lastContacted) {
		this.lastContacted = lastContacted;
	}

	public String getDisposition() {
		return disposition;
	}

	public void setDisposition(String disposition) {
		this.disposition = disposition;
	}

	public void setContact(Contact contact) {
		this.contact = contact;
	}

	public void setArchived(boolean archived) {
		this.archived = archived;
	}

	public boolean getArchived() {
		return archived;
	}

	@Override
	public String toString() {
		return "Ticket [id=" + id + ", device=" + device + ", description=" + description + ", contacted=" + contacted
				+ ", lastContacted=" + lastContacted + ", disposition=" + disposition + ", contact=" + contact + "]";
	}

}
