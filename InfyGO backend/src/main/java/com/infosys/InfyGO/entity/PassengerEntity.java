/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infosys.InfyGO.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

@Entity
@Data
@Table(name = "PASSENGER_DETAILS")
public class PassengerEntity {

	@Id
	@GenericGenerator(name = "gen", strategy = "increment")
	@GeneratedValue(generator = "gen")
	@Column(name = "passenger_id")
	private int passengerId;

	@Column(name = "passenger_name")
	private String passengerName;

	@Column(name = "passenger_age")
	private Integer passengerAge;

	@Column(name = "passenger_gender")
	private String passengerGender;

	@OneToOne
	@JoinColumn(name = "pnr")
	private TicketEntity ticket;

}