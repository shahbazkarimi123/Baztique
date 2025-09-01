package com.karimi.baztique.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.karimi.baztique.dao.user.UserDao;
import com.karimi.baztique.model.WatchUser;

public class UserServiceImpl implements  UserService{

    @Autowired
    private UserDao userDao;

    @Override
    public List<WatchUser> getAllUsers() {
        return userDao.getAllUsers();
    }

    @Override
    public void signup(WatchUser watchUser) {
        
        
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
