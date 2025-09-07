package com.karimi.baztique.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfigyration {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf -> csrf.disable())
                .cors(with)
                        .authorizeHttpRequests(requests -> requests
                                .requestMatchers("/baztique/api/**").authenticated()
                                .requestMatchers("/baztique/watches/**").authenticated()
                                .anyRequest().permitAll()
                        .httpBasic(withDefaults()));
        return http.build();

    }
    
}
