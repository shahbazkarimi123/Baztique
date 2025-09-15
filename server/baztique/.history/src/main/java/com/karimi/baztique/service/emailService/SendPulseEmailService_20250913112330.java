package com.karimi.baztique.service.emailService;

import java.util.Base64;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.karimi.baztique.model.EmailRequest;
@Service
public class SendPulseEmailService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final SendPulseAuthService authService;

    @Value("${sendpulse.client-id}")
    private String clientId;

    @Value("${sendpulse.client-secret}")
    private String clientSecret;

    public SendPulseEmailService(SendPulseAuthService authService) {
        this.authService = authService;
    }

    public String sendEmail(EmailRequest emailRequest) {
        String accessToken = authService.getAccessToken(clientId, clientSecret);

        String url = "https://api.sendpulse.com/smtp/emails";

        // Base64 encode HTML content
        String html = Base64.getEncoder().encodeToString(
                ("<p>" + emailRequest.getMessage() + "</p>").getBytes()
        );

        Map<String, Object> email = Map.of(
                "html", html,
                "text", emailRequest.getMessage(),
                "subject", emailRequest.getSubject(),
                "from", Map.of("name", "YourApp", "email", "s.com"),
                "to", List.of(Map.of("email", emailRequest.getTo(), "name", "Recipient"))
        );

        Map<String, Object> request = Map.of("email", email);

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(request, headers);

        try {
            ResponseEntity<Map> response = restTemplate.postForEntity(url, entity, Map.class);

            if (Boolean.TRUE.equals(response.getBody().get("result"))) {
                return "✅ Email sent successfully!";
            } else {
                return "❌ Failed to send email: " + response.getBody();
            }
        } catch (Exception e) {
            return "❌ Error while sending email: " + e.getMessage();
        }
    }
}
