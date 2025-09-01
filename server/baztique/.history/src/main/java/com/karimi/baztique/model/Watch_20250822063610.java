package com.karimi.baztique.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "watch")
public class Watch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    @Column(name = "price", precision = 9, scale = 2)
    private BigDecimal price;

    @Column(name = "discount")
    private int discount;

    @Column(name = "model_number")
    private String modelNumber;

    @Column(name = "trending")
    private boolean trending;

    @Column(name = "brand")
    private String brand;

    @Column(name = "collection_name")
    private String collectionName;

    @Column(name = "brand_country")
    private String brandCountry;


    @Column(name = "manufacture_o_rexported")
    private String manufactureOrExported;

    @Column(name = "imported_by")
    private String importedBy;

    @Column(name = "description")
    private String description;

    @Column(name = "watch_glass_or_crystal")
    private String watchGlassOrCrystal;

    @Column(name = "warranty")
    private int warranty;

    @Column(name = "water_resistance")
    private String waterResistance;

    @Column(name = "case_material")
    private String caseMaterial;

    @Column(name = "gender")
    private String gender;

    @Column(name = "case_shape")
    private String caseShape;

    @Column(name = "dial_color")
    private String dialColor;

    @Column(name = "dial_type")
    private String dialType;

    @Column(name = "case_size_mm")
    private int caseSizeMM;

    @Column(name = "case_thickness_mm")
    private int caseThicknessMM;

    @Column(name = "strap_color")
    private String strapColor;

    @Column(name = "strap_material")
    private String strapMaterial;

    @Column(name = "strap_width_mm")
    private int strapWidthMM;

    @Column(name = "strap_type")
    private String strapType;

    @Column(name = "care_instruction")
    private String careInstruction;

    @Column(name="created_at", updatable=false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column(name="last_updated")

    @ManyToOne
    @JoinColumn(name="user_id")
    private WatchUser owner;
    
    

}
