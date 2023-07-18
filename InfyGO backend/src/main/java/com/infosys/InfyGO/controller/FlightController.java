/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infosys.InfyGO.controller;

import java.text.ParseException;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.infosys.InfyGO.dto.SearchFlights;
import com.infosys.InfyGO.exception.FlightNotAvailableException;
import com.infosys.InfyGO.exception.InfyGoBootException;
import com.infosys.InfyGO.exception.InvalidJourneyDateException;
import com.infosys.InfyGO.exception.InvalidSourceDestinationException;
import com.infosys.InfyGO.service.FlightService;
import com.infosys.InfyGO.utility.CalendarUtility;

@Controller
@RequestMapping("/flightDetails")
public class FlightController {
	@Autowired
	private FlightService flightService;

	@GetMapping(value = "/searchFlights", headers = "Accept=application/json")
	public List<SearchFlights> searchFlights(@RequestParam(name = "source") String source,
			@RequestParam(name = "destination") String destination, @RequestParam(name = "date") String journeyDate)
			throws InfyGoBootException, ParseException {
		Calendar jDate = CalendarUtility.getCalendarFromString(journeyDate);

		return flightService.getFlights(source, destination, jDate);
	}

	@GetMapping(value = "/source", headers = "Accept=application/json")
	public ResponseEntity<List<String>> getSources() throws InfyGoBootException {

		List<String> sourceCity = flightService.getSources();
		return new ResponseEntity<List<String>>(sourceCity, HttpStatus.OK);

	}

	@GetMapping(value = "/destination", headers = "Accept=application/json")
	public ResponseEntity<List<String>> getDestinations() throws InfyGoBootException {
		List<String> s2 = flightService.getDestinations();
		return new ResponseEntity<List<String>>(s2, HttpStatus.OK);
	}

}
