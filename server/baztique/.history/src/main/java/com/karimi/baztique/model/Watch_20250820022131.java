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

    @Column(name="",precis)
    private 

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
    private String caseMaterial;

    @Column(name="")
    private String gender;

    @Column(name="")
    private String caseShape;

    @Column(name="")
    private String dialColor;

    @Column(name="")
    private String dialType;

    @Column(name="")
    private int caseSizeMM;

    @Column(name="")
    private int caseThicknessMM;

    @Column(name="")
    private String strapColor;

    @Column(name="")
    private String strapMaterial;

    @Column(name="")
    private int strapWidthMM;

    @Column(name="")
    private String strapType;

    @Column(name="")
    private String careInstruction;


    
}
