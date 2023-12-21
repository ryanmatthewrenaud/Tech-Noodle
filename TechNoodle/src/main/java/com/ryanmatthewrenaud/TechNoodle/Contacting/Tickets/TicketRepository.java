package com.ryanmatthewrenaud.TechNoodle.Contacting.Tickets;

import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer>{

}
