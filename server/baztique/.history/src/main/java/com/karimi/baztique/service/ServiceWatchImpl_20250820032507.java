package com.karimi.baztique.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karimi.baztique.dao.WatchDao;
import com.karimi.baztique.model.Watch;

@Service
public class ServiceWatchImpl implements WatchService{

    @Autowired
    private WatchDao watchDao;

    @Override
    public List<Watch> getAllWatch() {
        return watchDao.getAllWatch();
    }

    @Override
    public Watch getWatchById(long id) {
        return 
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
