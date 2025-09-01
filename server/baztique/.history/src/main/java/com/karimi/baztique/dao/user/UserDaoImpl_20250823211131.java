package com.karimi.baztique.dao.user;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.karimi.baztique.model.WatchUser;

import jakarta.persistence.EntityManager;

@Repository
public class UserDaoImpl implements UserDao{

    
    private EntityManager entityManager;
    public UserDaoImple(EntityManager entityManager)

    @Override
    public List<WatchUser> getAllUsers() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllUsers'");
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
