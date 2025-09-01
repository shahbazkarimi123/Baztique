package com.karimi.baztique.service;

import java.util.List;

import com.karimi.baztique.model.WatchUser;

public interface UserService {
    List<WatchUser> getAllUsers();
    void signup(WatchUser watchUser);
    WatchUser getUserByUserName(String u watchUser);
    WatchUser loginUser(WatchUser watchUser);
}
