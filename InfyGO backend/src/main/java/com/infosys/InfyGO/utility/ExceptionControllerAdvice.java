package com.infosys.InfyGO.utility;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * The Class ExceptionControllerAdvice.
 */

@ControllerAdvice
public class ExceptionControllerAdvice {

	private final Logger logger = LoggerFactory.getLogger(ExceptionControllerAdvice.class);

	/**
	 * Exception handler.
	 *
	 * @param ex the ex
	 * @return the client error information
	 */
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(Exception.class)
	@ResponseBody
	public ClientErrorInformation exceptionHandler(Exception ex) {

		logger.error(ex.getMessage(), ex);

		ClientErrorInformation errorInfo = new ClientErrorInformation();
		errorInfo.setErrorCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
		errorInfo.setMessage(ex.getMessage());
		return errorInfo;
	}

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler({ MethodArgumentNotValidException.class, HttpMessageNotReadableException.class })
	public ClientErrorInformation handleBindingErrors(Exception ex) {

		ClientErrorInformation errorInfo = new ClientErrorInformation();
		errorInfo.setErrorCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
		errorInfo.setMessage(ex.getMessage());
		return errorInfo;
	}

}