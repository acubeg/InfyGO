package com.infosys.InfyGO.service;

import java.util.Calendar;
import java.util.Date;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.support.SessionStatus;

import com.infosys.InfyGO.dto.Booking;
import com.infosys.InfyGO.dto.SearchFlights;
import com.infosys.InfyGO.dto.User;
import com.infosys.InfyGO.repository.FlightRepository;
import com.infosys.InfyGO.repository.UserRepository;
import com.infosys.InfyGO.entity.FlightEntity;
import com.infosys.InfyGO.entity.PassengerEntity;
import com.infosys.InfyGO.entity.TicketEntity;
import com.infosys.InfyGO.entity.UserEntity;
import com.infosys.InfyGO.exception.InfyGoBootException;
import com.infosys.InfyGO.exception.UserNotFoundException;

public class BookingService {

	@Autowired
	private FlightRepository flightRepository;

	@Autowired
	private UserRepository userRepository;

	private MessageSource messageSource;

	private Calendar calender;

	@Transactional
	public ResponseEntity<String> bookTickets(String userId, Booking booking) throws InfyGoBootException {

		UserEntity user = userRepository.findByUserId(userId);

		if (!(user != null)) {
			throw new UserNotFoundException(messageSource.getMessage("FlightService.USER_NOT_FOUND", null, null));
		}

		FlightEntity flightDetails = flightRepository.findFlight(booking.getFlightId());

		if (!(flightDetails != null)) {
			throw new UserNotFoundException(messageSource.getMessage("FlightService.INVALID_FLIGHT_ID", null, null));
		}

		// implement ticket booking business logic
		
		flightDetails.setSeatCount(flightDetails.getSeatCount()-booking.getNoOfTickets());

		ResponseEntity<String> response = null;
		
		PassengerEntity passengerDetails = new PassengerEntity();
		
		passengerDetails.setPassengerAge(booking.);

		return response.status(HttpStatus.OK).body("Success");
	}

}
