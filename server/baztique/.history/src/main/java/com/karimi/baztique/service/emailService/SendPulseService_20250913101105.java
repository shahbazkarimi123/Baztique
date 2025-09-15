package com.karimi.baztique.service.emailService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SendPulseService {

    @Value("${sendpulse.client-id}")
    private String clientId;

    @Value("${sendpulse.client-secret}")
    private String clientSecret;

    private final RestTemplate restTemplate = new RestTemplate();
    private String accessToken;

    private String getToken() {
        if (accessToken != null) return accessToken;

        String url = "https://api.sendpulse.com/oauth/access_token";
        Map<String, String> body = Map.of(
                "grant_type", "client_credentials",
                "client_id", clientId,
                "client_secret", clientSecret
        );
        System.out.println(clientId)
        ResponseEntity<Map> response = restTemplate.postForEntity(url, body, Map.class);
        accessToken = (String) response.getBody().get("access_token");
        return accessToken;
    }

    public void sendEmail(String to, String subject, String text) {
        String url = "https://api.sendpulse.com/smtp/emails";

        Map<String, Object> payload = Map.of(
                "email", Map.of(
                        "subject", subject,
                        "text", text,
                        "from", Map.of("name", "My Spring App", "email", "you@yourdomain.com"),
                        "to", List.of(Map.of("email", to))
                )
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(getToken());
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(payload, headers);
        restTemplate.postForEntity(url, request, String.class);
    }
}

