package com.karimi.baztique.dao;

import java.util.List;

import com.karimi.baztique.model.Watch;

public interface WatchDao {
    List<Watch> getAllWatch();
    Watch getWatchById(long id);
    void saveNewWatch(Watch watch);
    void updateWatch(Watch watch);
    void 
    
}
