package com.infosys.InfyGO.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.infosys.InfyGO.dto.Booking;
import com.infosys.InfyGO.exception.InfyGoBootException;
import com.infosys.InfyGO.service.BookingService;

@RestController
public class BookingController {

	@Autowired
	private BookingService bookingService;

	@GetMapping("/bookTicket")
	public ResponseEntity<String> bookTickets(@PathVariable(name = "userId") String userId,
			@RequestBody Booking booking) throws InfyGoBootException  {
		return bookingService.bookTickets(userId, booking);
	}

}
