package com.karimi.baztique.model;

class EmailRequest {
    private String to;
    private String subject;
    private String text;
    public EmailRequest() {
    }
    public EmailRequest(String to, String subject, String text) {
        this.to = to;
        this.subject = subject;
        this.text = text;
    }

    
}
