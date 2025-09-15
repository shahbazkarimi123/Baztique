package com.karimi.baztique.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.karimi.baztique.model.EmailRequest;
import com.karimi.baztique.service.emailService.EmailService;



@RestController
@RequestMapping("baztique/")
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping(path="/api/mail/send")
    public String sendMail(@RequestBody EmailRequest email){
        String response = emailService.sendMail(email.getTo(), email.getSubject(), email.getMessage());
        
        return response;
    }

   
}

