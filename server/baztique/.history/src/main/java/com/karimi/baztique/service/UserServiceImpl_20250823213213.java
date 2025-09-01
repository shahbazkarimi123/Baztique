package com.karimi.baztique.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.karimi.baztique.dao.user.UserDao;
import com.karimi.baztique.model.WatchUser;

import jakarta.transaction.Transactional;

public class UserServiceImpl implements  UserService{

    @Autowired
    private UserDao userDao;

    @Override
    public List<WatchUser> getAllUsers() {
        return userDao.getAllUsers();
    }

    @Override
    @Transactional
    public void signup(WatchUser watchUser) {
        userDao.signup(watchUser);

        
    }

    @Override
    public WatchUser getUserByUserName(String userName) {
       return userDao.getUserByUserName(userName);
    }

    @Override
    public WatchUser loginUser(WatchUser watchUser) {
        return userDao.loginUser(watchUser)
    }
    
}
