package com.karimi.baztique.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karimi.baztique.model.Watch;

@Service
public class ServiceWatchImpl implements WatchService{

    @Autowired
    private 

    @Override
    public List<Watch> getAllWatch() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllWatch'");
    }

    @Override
    public Watch getWatchById(long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getWatchById'");
    }

    @Override
    public void saveNewWatch(Watch watch) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveNewWatch'");
    }

    @Override
    public void updateWatch(Watch watch) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateWatch'");
    }

    @Override
    public Watch findWatchByName(String name) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findWatchByName'");
    }
    
}
