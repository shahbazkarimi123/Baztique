package com.karimi.baztique.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer{
    @SuppressWarnings("null")
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
        .allowedOrigins("http://localhost:5173","http://192.168.1.26:5173")
        .allowCredentials(true)
        .allowedMethods("GET","POST","PUT","DELETE");
        
    }
    
}
