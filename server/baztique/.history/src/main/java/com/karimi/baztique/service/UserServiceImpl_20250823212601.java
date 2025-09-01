package com.karimi.baztique.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.karimi.baztique.dao.WatchDao;
import com.karimi.baztique.model.WatchUser;

public class UserServiceImpl implements  UserService{

    @Autowired
    private WatchDao watchDao;

    @Override
    public List<WatchUser> getAllUsers() {
        return watchDao.
    }

    @Override
    public void signup(WatchUser watchUser) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'signup'");
    }

    @Override
    public WatchUser getUserByUserName(String userName) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUserByUserName'");
    }

    @Override
    public WatchUser loginUser(WatchUser watchUser) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'loginUser'");
    }
    
}
