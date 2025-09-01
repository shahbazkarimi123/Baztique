package com.karimi.baztique.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="watch")
public class Watch {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    @Column(name="brand")
    private String brand;

    @Column(name="")
    private String collectionName;

    @Column(name="")
    private String brandCountry;

    @Column(name="")
    private String manufactureOrExported;

    @Column(name="")
    private String importedBy;

    @Column(name="")
    private String description;

    @Column(name="")
    private String watchGlassOrCrystal;

    @Column(name="")
    private int warranty;

    @Column(name="")
    private String waterResistance;

    @Column(name="")
    private String cas


    
}
