package com.karimi.baztique.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Arrays;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
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

    @Column(name = "description", columnDefinition="TEXT")
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

    @Column(name="last_updated", updatable=true)
    @UpdateTimestamp
    private LocalDateTime lastUpdated;

    @Column(name="first_image", columnDefinition="LONGBLOB")
    @Lob
    private byte[] firstImage;

    @Column(name="second_image", columnDefinition="LONGBLOB")
    @Lob
    private byte[] secondImage;

    @Column(name="third_image",)
    @Lob
    private byte[] thirdImage;

    @Column(name="fourth_image")
    @Lob
    private byte[] fourthImage;

    @Column(name="fifth_image")
    @Lob
    private byte[] fifthImage;

    


    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonBackReference
    private WatchUser watchUser;

    public Watch() {
    }

    public Watch(BigDecimal price, int discount, String modelNumber, boolean trending, String brand,
            String collectionName, String brandCountry, String manufactureOrExported, String importedBy,
            String description, String watchGlassOrCrystal, int warranty, String waterResistance, String caseMaterial,
            String gender, String caseShape, String dialColor, String dialType, int caseSizeMM, int caseThicknessMM,
            String strapColor, String strapMaterial, int strapWidthMM, String strapType, String careInstruction,
            LocalDateTime createdAt, LocalDateTime lastUpdated, byte[] firstImage, byte[] secondImage,
            byte[] thirdImage, byte[] fourthImage, byte[] fifthImage, WatchUser watchUser) {
        this.price = price;
        this.discount = discount;
        this.modelNumber = modelNumber;
        this.trending = trending;
        this.brand = brand;
        this.collectionName = collectionName;
        this.brandCountry = brandCountry;
        this.manufactureOrExported = manufactureOrExported;
        this.importedBy = importedBy;
        this.description = description;
        this.watchGlassOrCrystal = watchGlassOrCrystal;
        this.warranty = warranty;
        this.waterResistance = waterResistance;
        this.caseMaterial = caseMaterial;
        this.gender = gender;
        this.caseShape = caseShape;
        this.dialColor = dialColor;
        this.dialType = dialType;
        this.caseSizeMM = caseSizeMM;
        this.caseThicknessMM = caseThicknessMM;
        this.strapColor = strapColor;
        this.strapMaterial = strapMaterial;
        this.strapWidthMM = strapWidthMM;
        this.strapType = strapType;
        this.careInstruction = careInstruction;
        this.createdAt = createdAt;
        this.lastUpdated = lastUpdated;
        this.firstImage = firstImage;
        this.secondImage = secondImage;
        this.thirdImage = thirdImage;
        this.fourthImage = fourthImage;
        this.fifthImage = fifthImage;
        this.watchUser = watchUser;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public String getModelNumber() {
        return modelNumber;
    }

    public void setModelNumber(String modelNumber) {
        this.modelNumber = modelNumber;
    }

    public boolean isTrending() {
        return trending;
    }

    public void setTrending(boolean trending) {
        this.trending = trending;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getCollectionName() {
        return collectionName;
    }

    public void setCollectionName(String collectionName) {
        this.collectionName = collectionName;
    }

    public String getBrandCountry() {
        return brandCountry;
    }

    public void setBrandCountry(String brandCountry) {
        this.brandCountry = brandCountry;
    }

    public String getManufactureOrExported() {
        return manufactureOrExported;
    }

    public void setManufactureOrExported(String manufactureOrExported) {
        this.manufactureOrExported = manufactureOrExported;
    }

    public String getImportedBy() {
        return importedBy;
    }

    public void setImportedBy(String importedBy) {
        this.importedBy = importedBy;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getWatchGlassOrCrystal() {
        return watchGlassOrCrystal;
    }

    public void setWatchGlassOrCrystal(String watchGlassOrCrystal) {
        this.watchGlassOrCrystal = watchGlassOrCrystal;
    }

    public int getWarranty() {
        return warranty;
    }

    public void setWarranty(int warranty) {
        this.warranty = warranty;
    }

    public String getWaterResistance() {
        return waterResistance;
    }

    public void setWaterResistance(String waterResistance) {
        this.waterResistance = waterResistance;
    }

    public String getCaseMaterial() {
        return caseMaterial;
    }

    public void setCaseMaterial(String caseMaterial) {
        this.caseMaterial = caseMaterial;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCaseShape() {
        return caseShape;
    }

    public void setCaseShape(String caseShape) {
        this.caseShape = caseShape;
    }

    public String getDialColor() {
        return dialColor;
    }

    public void setDialColor(String dialColor) {
        this.dialColor = dialColor;
    }

    public String getDialType() {
        return dialType;
    }

    public void setDialType(String dialType) {
        this.dialType = dialType;
    }

    public int getCaseSizeMM() {
        return caseSizeMM;
    }

    public void setCaseSizeMM(int caseSizeMM) {
        this.caseSizeMM = caseSizeMM;
    }

    public int getCaseThicknessMM() {
        return caseThicknessMM;
    }

    public void setCaseThicknessMM(int caseThicknessMM) {
        this.caseThicknessMM = caseThicknessMM;
    }

    public String getStrapColor() {
        return strapColor;
    }

    public void setStrapColor(String strapColor) {
        this.strapColor = strapColor;
    }

    public String getStrapMaterial() {
        return strapMaterial;
    }

    public void setStrapMaterial(String strapMaterial) {
        this.strapMaterial = strapMaterial;
    }

    public int getStrapWidthMM() {
        return strapWidthMM;
    }

    public void setStrapWidthMM(int strapWidthMM) {
        this.strapWidthMM = strapWidthMM;
    }

    public String getStrapType() {
        return strapType;
    }

    public void setStrapType(String strapType) {
        this.strapType = strapType;
    }

    public String getCareInstruction() {
        return careInstruction;
    }

    public void setCareInstruction(String careInstruction) {
        this.careInstruction = careInstruction;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(LocalDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public byte[] getFirstImage() {
        return firstImage;
    }

    public void setFirstImage(byte[] firstImage) {
        this.firstImage = firstImage;
    }

    public byte[] getSecondImage() {
        return secondImage;
    }

    public void setSecondImage(byte[] secondImage) {
        this.secondImage = secondImage;
    }

    public byte[] getThirdImage() {
        return thirdImage;
    }

    public void setThirdImage(byte[] thirdImage) {
        this.thirdImage = thirdImage;
    }

    public byte[] getFourthImage() {
        return fourthImage;
    }

    public void setFourthImage(byte[] fourthImage) {
        this.fourthImage = fourthImage;
    }

    public byte[] getFifthImage() {
        return fifthImage;
    }

    public void setFifthImage(byte[] fifthImage) {
        this.fifthImage = fifthImage;
    }

    public WatchUser getWatchUser() {
        return watchUser;
    }

    public void setWatchUser(WatchUser watchUser) {
        this.watchUser = watchUser;
    }

    @Override
    public String toString() {
        return "Watch [id=" + id + ", price=" + price + ", discount=" + discount + ", modelNumber=" + modelNumber
                + ", trending=" + trending + ", brand=" + brand + ", collectionName=" + collectionName
                + ", brandCountry=" + brandCountry + ", manufactureOrExported=" + manufactureOrExported
                + ", importedBy=" + importedBy + ", description=" + description + ", watchGlassOrCrystal="
                + watchGlassOrCrystal + ", warranty=" + warranty + ", waterResistance=" + waterResistance
                + ", caseMaterial=" + caseMaterial + ", gender=" + gender + ", caseShape=" + caseShape + ", dialColor="
                + dialColor + ", dialType=" + dialType + ", caseSizeMM=" + caseSizeMM + ", caseThicknessMM="
                + caseThicknessMM + ", strapColor=" + strapColor + ", strapMaterial=" + strapMaterial
                + ", strapWidthMM=" + strapWidthMM + ", strapType=" + strapType + ", careInstruction=" + careInstruction
                + ", createdAt=" + createdAt + ", lastUpdated=" + lastUpdated + ", firstImage="
                + Arrays.toString(firstImage) + ", secondImage=" + Arrays.toString(secondImage) + ", thirdImage="
                + Arrays.toString(thirdImage) + ", fourthImage=" + Arrays.toString(fourthImage) + ", fifthImage="
                + Arrays.toString(fifthImage) + ", watchUser=" + watchUser + "]";
    }

    
}
