package com.karimi.baztique.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.karimi.baztique.model.User;
import com.karimi.baztique.model.WatchUser;
import com.karimi.baztique.service.UserService;

@RestController
@RequestMapping(path="baztique/")
public class UserRestController {
    @Autowired
    private  UserService userService;
    

    @GetMapping(path="/api/users")
    public List<WatchUser> getAllUser(){

        return userService.getAllUsers();
    }
    @PostMapping(path="/api/login-user")
    public ResponseEntity<WatchUser> loginUserByUserNameAndPassword(@RequestBody User user) throws Exception{
        WatchUser theWatchUser = userService.getUserByUserName(user.getUserName());
        if(theWatchUser.getPassword().equals(user.getPassword()))
        
        
    }

    
    
}
