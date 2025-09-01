package com.karimi.baztique.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Table(name="watch")
public class Watch {
    @Id
    @GeneratedValue(strategy=Generat)
    private long id;
    
}
