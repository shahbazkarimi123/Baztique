package com.karimi.baztique.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.karimi.baztique.service.emailService.SendPulseService;

@RestController
@RequestMapping("/api/email")
public class EmailController {

    private final SendPulseService sendPulseService;

    public EmailController(SendPulseService sendPulseService) {
        this.sendPulseService = sendPulseService;
    }

    @PostMapping("/send")
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequest request) {
        sendPulseService.sendEmail(request.getTo(), request.getSubject(), request.getText());
        return ResponseEntity.ok("Email sent!");
    }
}

class EmailRequest {
    private String to;
    private String subject;
    private String text;

    // getters and setters
}
