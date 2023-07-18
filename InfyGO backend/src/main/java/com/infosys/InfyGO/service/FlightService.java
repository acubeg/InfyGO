package com.infosys.InfyGO.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;

import com.infosys.InfyGO.dto.SearchFlights;
import com.infosys.InfyGO.entity.FlightEntity;
import com.infosys.InfyGO.exception.FlightNotAvailableException;
import com.infosys.InfyGO.exception.InfyGoBootException;
import com.infosys.InfyGO.exception.InvalidJourneyDateException;
import com.infosys.InfyGO.exception.InvalidSourceDestinationException;
import com.infosys.InfyGO.repository.FlightRepository;
import com.infosys.InfyGO.utility.CalendarUtility;
import org.springframework.stereotype.Service;

@Service
public class FlightService {
	@Autowired
	private FlightRepository flightsRepository;

	@Autowired
	private MessageSource messageSource;

	public List<String> getSources() {

		return flightsRepository.findFlightSources();

	}

	public List<String> getDestinations() {

		return flightsRepository.findFlightDestinations();

	}

	public List<SearchFlights> getFlights(String source, String destination, Calendar journeyDate)
			throws InfyGoBootException {

		Calendar today = Calendar.getInstance();
		if (today.after(journeyDate))
			throw new InvalidJourneyDateException(
					messageSource.getMessage("FlightService.INVALID_JOURNEYDATE", null, null));
		if (source.equalsIgnoreCase(destination)) {

			throw new InvalidSourceDestinationException(
					messageSource.getMessage("FlightService.INVALID_SOURCE_DESTINATION", null, null));
		}
		List<FlightEntity> flights = flightsRepository.findFlightDetails(source, destination, journeyDate);

		if (flights == null || flights.isEmpty()) {
			throw new FlightNotAvailableException(
					messageSource.getMessage("FlightService.FLIGHT_NOT_AVAILABLE", null, null));
		}

		List<SearchFlights> availableFlights = new ArrayList<SearchFlights>();
		for (FlightEntity f : flights) {
			SearchFlights flight = new SearchFlights();
			flight.setFlightId(f.getFlightId());
			flight.setSource(f.getSource());
			flight.setDestination(f.getDestination());
			flight.setFlightAvailableDate(CalendarUtility.getStringFromCalendar(f.getFlightAvailableDate()));
			flight.setDepartureTime(f.getDepartureTime());
			flight.setArrivalTime(f.getArrivalTime());
			flight.setSeatCount(f.getSeatCount().toString());
			flight.setAirlines(f.getAirlines());
			flight.setFare(Double.toString(f.getFare()));
			availableFlights.add(flight);

		}
		return availableFlights;

	}
}
