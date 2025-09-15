package com.karimi.baztique.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.karimi.baztique.model.EmailRequest;



@RestController
@RequestMapping("baztique/")
public class EmailController {
    @PostMapping(path="/api/mail/send")
    public String sendMail(@ResponseBody EmailRequest email){
        return null;
    }

   
}

