package com.karimi.baztique.service.emailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class EmailService {
    @Autowired
    private JavaMailSender mailSender;
    public String sendMail(String to, String subject, String text){

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to); // your email
            message.setSubject("React Button Clicked");
            message.setText("Someone clicked the button on your website!");
            mailSender.send(message);
            return "Email sent successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error sending email.";
        }
    }
    
}
