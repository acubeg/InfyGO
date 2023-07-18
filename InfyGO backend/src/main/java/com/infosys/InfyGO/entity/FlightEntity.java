
package com.infosys.InfyGO.entity;

import java.util.Calendar;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "FLIGHT_DETAILS")
@Data
public class FlightEntity {
    @Id
    @GeneratedValue(strategy=SEQUENCE)
    private Long id;
    @Column(name = "flight_id")
    private String flightId;

    private String airlines;

    private String source;

    private String destination;

    private Double fare;

    @DateTimeFormat(pattern = "dd-mm-yyyy")
    @Temporal(TemporalType.DATE)

    @Column(name = "flight_available_date")
    private Calendar flightAvailableDate;

    @Column(name = "departure_time")
    private String departureTime;

    @Column(name = "arrival_time")
    private String arrivalTime;

    @Column(name = "seat_count")
    private Integer seatCount;

}
