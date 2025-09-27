package com.karimi.baztique.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karimi.baztique.dao.WatchDao;
import com.karimi.baztique.model.Watch;

import jakarta.transaction.Transactional;

@Service
public class ServiceWatchImpl implements WatchService {

    @Autowired
    private WatchDao watchDao;

    @Override
    public List<Watch> getAllWatch() {
        return watchDao.getAllWatch();
    }

    @Override
    public Watch getWatchById(long id) {
        return watchDao.getWatchById(id);
    }

    @Override
    @Transactional
    public void saveNewWatch(Watch watch) {
        watchDao.saveNewWatch(watch);
    }

    @Override
    @Transactional
    public void updateWatch(Watch watch) {
        watchDao.updateWatch(watch);
    }

    @Override
    public Watch findWatchByName(String name) {
        return watchDao.findWatchByName(name);
    }

    @Override
    public List<Watch> getWatchesByGender(String gender) {

        return watchDao.getWatchesByGender(gender);
    }

    @Override
    public List<Watch> getRandomWatches(Integer maxResult) {
        return watchDao.
    }
}
