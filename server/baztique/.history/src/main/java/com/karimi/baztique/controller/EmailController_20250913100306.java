package com.karimi.baztique.controller;

import org.springframework.web.bind.annotation.RestController;

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
