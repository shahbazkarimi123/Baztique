package com.karimi.baztique.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.karimi.baztique.model.Watch;
import com.karimi.baztique.service.WatchService;

@RestController
@RequestMapping(path="/baztique")
public class WatchController {
    @Autowired
    private WatchService watchService;

    @GetMapping(path="/watches")
    public List<Watch> getAllWatches(){
        return  watchService.getAllWatch();
    }

    @GetMapping(path="/watches/{id}")
    public Watch getWatchById(@PathVariable long id){
        return watchService.getWatchById(id);
    }
    
    
}
