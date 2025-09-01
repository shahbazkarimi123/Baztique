package com.karimi.baztique.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.karimi.baztique.model.Watch;


public interface WatchService {
    List<Watch> getAllWatch();
    Watch getWatchById(long id);
    void saveNewWatch(Watch watch);
    void updateWatch(Watch watch);
    Watch findWatchByName(String name);
}
