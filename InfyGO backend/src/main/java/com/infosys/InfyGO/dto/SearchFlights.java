
package com.infosys.InfyGO.dto;

import lombok.Data;

@Data
public class SearchFlights {

    private String source;
    private String destination;
    private String journeyDate;
    private String fare;
    private String flightId;
    private String flightAvailableDate;
    private String seatCount;
    private String departureTime;
    private String arrivalTime;
    private String airlines;

}
