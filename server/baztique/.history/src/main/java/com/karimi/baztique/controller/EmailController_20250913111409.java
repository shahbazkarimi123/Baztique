package com.karimi.baztique.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.karimi.baztique.model.EmailRequest;
import com.karimi.baztique.service.emailService.SendPulseEmailService;
import com.karimi.baztique.service.emailService.SendPulseService;

@RestController
@RequestMapping("baztique/")
public class EmailController {

    private final SendPulseEmailService emailService;

    public EmailController(SendPulseEmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send")
    public ResponseEntity<Map<String, String>> sendEmail(@RequestBody EmailRequest request) {
        String resultMessage = emailService.sendEmail(request);
        return ResponseEntity.ok(Map.of("message", resultMessage));
    }
}

