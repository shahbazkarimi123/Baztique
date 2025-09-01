package com.karimi.baztique.dao.user;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.karimi.baztique.model.WatchUser;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

@Repository
public class UserDaoImpl implements UserDao {

    private final EntityManager entityManager;

    public UserDaoImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    @Override
    public List<WatchUser> getAllUsers() {
        TypedQuery<WatchUser> query = entityManager.createQuery(
            "SELECT w FROM W",WatchUser.class
        );
        return query.getResultList();
    }

    @Override
    public void signup(WatchUser watchUser) {
       entityManager.persist(watchUser);
    }

    @Override
    public WatchUser getUserByUserName(String userName) {
        TypedQuery<WatchUser> query = entityManager.createQuery(
            "SELECT w FROM  Watchuser w WHRE w.userName = :userName",
            
        )
    }

    @Override
    public WatchUser loginUser(WatchUser watchUser) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'loginUser'");
    }

}
