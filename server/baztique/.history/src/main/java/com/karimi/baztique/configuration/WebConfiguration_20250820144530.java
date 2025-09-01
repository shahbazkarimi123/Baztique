package com.karimi.baztique.configuration;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebConfiguration implements WebMvcConfigurer{
    @SuppressWarnings("null")
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("baztique/**")
        .allowedOrigins("http://localhost:5173")

        .allowedMethods("GET","POST","PUT","DELETE");
    }
    
}
