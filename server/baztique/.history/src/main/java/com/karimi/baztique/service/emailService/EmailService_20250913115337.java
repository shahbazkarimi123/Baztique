package com.karimi.baztique.service.emailService;

import org.springframework.mail.SimpleMailMessage;

public class EmailService {
    try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("your.email@gmail.com"); // your email
            message.setSubject("React Button Clicked");
            message.setText("Someone clicked the button on your website!");
            mailSender.send(message);
            return "Email sent successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error sending email.";
        }
        public Exception getE() {
            return e;
        }
        public void setE(Exception e) {
            this.e = e;
        }
    
}
