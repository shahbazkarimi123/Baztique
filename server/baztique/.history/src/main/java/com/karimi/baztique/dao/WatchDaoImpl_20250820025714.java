package com.karimi.baztique.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.karimi.baztique.model.Watch;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

@Repository
public class WatchDaoImpl implements WatchDao{
    private final EntityManager entityManager;

    public WatchDaoImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    @Override
    public List<Watch> getAllWatch() {
        TypedQuery<List> query = entityManager.createQuery("SELECT w fROM Watch w",Watch.class);
        
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
