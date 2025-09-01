package com.karimi.baztique.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.karimi.baztique.model.WatchUser;
import com.karimi.baztique.service.UserService;

@RestController
@Get
public class UserRestController {
    @Autowired
    private  UserService userService;

    @GetMapping(path="api/users")
    public List<WatchUser> getAllUser(){
        return userService.getAllUsers();
    }

    
    
}
