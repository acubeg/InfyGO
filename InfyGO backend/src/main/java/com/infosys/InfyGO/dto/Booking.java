/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infosys.InfyGO.dto;

import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

import lombok.Data;

@Data
public class Booking implements Serializable 
{

	private static final long serialVersionUID = 1L;
	
	private String name;
	private int noOfTickets;
	private String flightId;
	private Date departureDate;
	private Date departureTime;
	private Double fare;
	private String destination;
	private String source;
	private String airlines;

}
