package com.karimi.baztique.dao.user;

import java.util.List;

import com.karimi.baztique.model.WatchUser;


public interface UserDao {
    List<WatchUser> getAllUsers();
    void signup(WatchUser watchUser);
    WatchUser getUserByUserName(String userName);
    WatchUser 


    
}
