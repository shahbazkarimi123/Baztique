package com.karimi.baztique.service.emailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class EmailService {
    @Autowired
    private JavaMailSender mailSender;
    public String sendMail(String to, String subject, String text){

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to); // your email
            message.setSubject(subject);
            message.setText(text);
            mailSender.send(message);
            return "Email sent successfully!";
        } catch (MailException e) {
            return "Error sending email.";
        }
    }
    
}
