package com.karimi.baztique.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.karimi.baztique.service.UserService;

@RestController

public class UserRestController {
    @Autowired
    private  UserService userService;
    @GetMapping(path="api/users")
    

    
    
}
