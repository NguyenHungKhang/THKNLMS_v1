package com.nguyenhungkhang.DemoForTest.controller;


import com.google.common.net.HttpHeaders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nguyenhungkhang.DemoForTest.services.IUserService;
import com.nguyenhungkhang.DemoForTest.services.imp.UserService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/v1/oauth")
public class LoginController {

    @Autowired
    IUserService userService = new UserService();
    
    @PostMapping("/login")
    public ResponseEntity LoginWithGoogleOauth2(@RequestBody String idToken, HttpServletResponse response) {
    	idToken = idToken.replaceAll("\"", "");
        String authToken = userService.processOAuthPostLogin(idToken);
        final ResponseCookie cookie = ResponseCookie.from("AUTH-TOKEN", authToken)
                .httpOnly(true)
                .maxAge(7 * 24 * 3600)
                .path("/")
                .secure(false)
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
        return ResponseEntity.ok().build();
    }
}
