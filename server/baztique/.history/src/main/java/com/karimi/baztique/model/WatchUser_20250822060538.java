package com.karimi.baztique.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="watch_user")
public class WatchUser {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="us")
    
}
