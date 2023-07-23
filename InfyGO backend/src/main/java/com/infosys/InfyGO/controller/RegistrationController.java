package com.infosys.InfyGO.controller;

import com.infosys.InfyGO.exception.UserIdAlreadyPresentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.infosys.InfyGO.dto.User;
import com.infosys.InfyGO.service.RegistrationService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping("/infy-go/register")
    public String addCustomer(@RequestBody User user) throws UserIdAlreadyPresentException {

        return registrationService.registerUser(user);

    }


}
