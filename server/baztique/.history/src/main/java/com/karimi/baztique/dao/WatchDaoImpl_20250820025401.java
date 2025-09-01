package com.karimi.baztique.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.karimi.baztique.model.Watch;

import jakarta.persistence.EntityManager;

@Repository
public class WatchDaoImpl implements WatchDao{
    private final EntityManager entityManager;
    

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
