package com.karimi.baztique.model;

import java.math.BigDecimal;

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

    @Column(name="price",precision=9, scale=2)
    private BigDecimal price;

    @Column(name="discount")
    private int discount;

    @Column(name="model_number")
    private String modelNumber;

    @Column(name="trending")
    private boolean trending;

    @Column(name="brand")
    private String brand;

    @Column(name="collection_name")
    private String collectionName;

    @Column(name="brand_country")
    private String brandCountry;

    @Column(name="manufacture_or_exported")
    private String manufactureOrExported;

    @Column(name="imported_by")
    private String importedBy;

    @Column(name="description")
    private String description;

    @Column(name="watch_glass_or_crystal")
    private String watchGlassOrCrystal;

    @Column(name="warranty")
    private int warranty;

    @Column(name="water_resis")
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
