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
        TypedQuery<Watch> query = entityManager.createQuery("SELECT w fROM Watch w",Watch.class);
        return query.getResultList();

    }

    @Override
    public Watch getWatchById(long id) {
        Watch watch = entityManager.find(Watch.class, id);
        return watch;
    }

    @Override
    public void saveNewWatch(Watch watch) {
        
    }

    @Override
    public void updateWatch(Watch watch) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateWatch'");
    }

    @Override
    public Watch findWatchByName(String name) {
        TypedQuery<Watch> query = this.entityManager.createQuery(
            "SELECT w FROM w WHERE w.brand = : watchName",
            Watch.class
        );
        query.setParameter("watchName", name);
        return query.getResultStream().findFirst
    }
    
}
