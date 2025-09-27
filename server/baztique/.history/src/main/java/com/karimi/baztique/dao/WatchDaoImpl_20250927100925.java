package com.karimi.baztique.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.karimi.baztique.model.Watch;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

@Repository
public class WatchDaoImpl implements WatchDao {
    private final EntityManager entityManager;

    public WatchDaoImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<Watch> getAllWatch() {
        TypedQuery<Watch> query = entityManager.createQuery("SELECT w fROM Watch w", Watch.class);
        return query.getResultList();

    }

    @Override
    public Watch getWatchById(long id) {
        Watch watch = entityManager.find(Watch.class, id);
        return watch;
    }

    @Override
    public void saveNewWatch(Watch watch) {
        entityManager.persist(watch);

    }

    @Override
    public void updateWatch(Watch watch) {
        if(watch==null){

            
        }
        entityManager.merge(watch);
    }

    @Override
    public Watch findWatchByName(String name) {
        TypedQuery<Watch> query = this.entityManager.createQuery(
                "SELECT w FROM Watch w WHERE w.brand = :watchName",
                Watch.class);
        query.setParameter("watchName", name);
        return query.getResultStream().findFirst().orElse(null);
    }

    @Override
    public List<Watch> getWatchesByGender(String gender) {
        TypedQuery<Watch> query = this.entityManager.createQuery(
                "SELECT w FROM Watch w WHERE w.gender =  :gender", Watch.class);
        query.setParameter("gender", gender);
        return query.getResultList();
    }

    @Override
    public List<Watch> getRandomWatch(Integer maxResult) {
        TypedQuery<Watch> query = this.entityManager.createQuery(
            "SELECT w FROM Watch w ORDER BY FUNCTION('RAND')",Watch.class
        );

        query.setMaxResults(5);
        return query.getResultList();
        
    }

    

}
