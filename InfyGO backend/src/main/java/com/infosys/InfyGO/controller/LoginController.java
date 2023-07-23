package com.infosys.InfyGO.controller;

import com.infosys.InfyGO.config.AuthResponse;
import com.infosys.InfyGO.config.JwtToken;
import com.infosys.InfyGO.dto.User;
import com.infosys.InfyGO.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;



import javax.validation.Valid;

@RestController
public class LoginController {
    @Autowired AuthenticationManager authManager;
    @Autowired
    JwtToken jwtUtil;

    @PostMapping("/infy-go/login")
    public ResponseEntity<AuthResponse> login(@RequestBody @Valid User request) {
        try {
            Authentication authentication = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getUserId(), request.getPassword())
            );

            UserEntity user = (UserEntity) authentication.getPrincipal();
            String accessToken = jwtUtil.generateAccessToken(user);
            AuthResponse response = new AuthResponse(user.getUserId(), accessToken);

            return ResponseEntity.ok().body(response);

        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}