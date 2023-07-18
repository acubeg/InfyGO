package com.infosys.InfyGO.exception;

@SuppressWarnings("serial")
public class UserIdAlreadyPresentException extends InfyGoBootException {
	public UserIdAlreadyPresentException(String message){
		super(message);
	}

}
