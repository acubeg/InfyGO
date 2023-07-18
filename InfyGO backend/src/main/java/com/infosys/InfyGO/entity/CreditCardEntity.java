/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infosys.InfyGO.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "CREDITCARD_DETAILS")
public class CreditCardEntity {
	@Id
	// @NotNull(message = "Please enter the Card Number")
	@Column(name = "card_number")

	private String cardNumber;
	// @NotNull(message = "Please enter the Card Holder Name")
	@Column(name = "cardholdername")

	private String cardHolder_Name;
	// @NotNull(message = "Please enter cvv")
	private String cvv;

	// @NotNull(message = "Please enter the pin")
	@Column(name = "secure_pin")
	private String securePin;

	// @NotNull(message = "Please enter the Expiry Month")
	@Column(name = "expiry_month")
	private String expiryMonth;

	// @NotNull(message = "Please enter the Expiry Year")
	@Column(name = "expiry_year")
	private String expiryYear;

	@Column(name = "total_bill")
	private String totalBill;

}
