package com.infosys.InfyGO.controller;

import java.util.Enumeration;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.ModelAndView;

import com.infosys.InfyGO.dto.Login;
import com.infosys.InfyGO.dto.SearchFlights;
import com.infosys.InfyGO.entity.UserEntity;
import com.infosys.InfyGO.exception.InvalidCredentialException;
import com.infosys.InfyGO.service.FlightService;
import com.infosys.InfyGO.service.LoginService;

@Controller
@SessionAttributes({ "userName", "userId" })
public class LoginController {
    final Logger logger = LoggerFactory.getLogger(this.getClass());

//    @Autowired
//    private LoginService loginService;

    private String command = "command";
    private String login = "login";

    @GetMapping(value = "/login")
    public String getLoginDetails(@RequestParam Optional<String> error, SessionStatus status) {

        return login;
    }

    @GetMapping(value = "/logout")
    public String logout(HttpSession session, SessionStatus status) {
        return "Log out";
    }
}
