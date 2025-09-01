package com.karimi.baztique.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.karimi.baztique.service.WatchService;

@RestController
@RequestMapping(path="/baztaque")
public class WatchController {
    @Autowired
    private WatchService watchService;

    
    
    
}
