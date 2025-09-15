package com.karimi.baztique.model;

public class EmailRequest {
    private String to;
    private String subject;
    private String message;
    public EmailRequest() {
    }
    public EmailRequest(String to, String subject, String text) {
        this.to = to;
        this.subject = subject;
        this.message = text;
    }
    public String getTo() {
        return to;
    }
    public void setTo(String to) {
        this.to = to;
    }
    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }
    public String getText() {
        return message;
    }
    public void setText(String text) {
        this.text = text;
    }

    
}
