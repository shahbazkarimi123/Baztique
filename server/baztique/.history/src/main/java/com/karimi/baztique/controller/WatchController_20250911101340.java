package com.karimi.baztique.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.karimi.baztique.model.Watch;
import com.karimi.baztique.service.WatchService;

@RestController
@RequestMapping(path = "/baztique")
public class WatchController {
    @Autowired
    private WatchService watchService;

    @GetMapping(path = "/watches")
    public List<Watch> getAllWatches() {
        return watchService.getAllWatch();
    }

    @GetMapping(path = "/watches/id/{id}")
    public Watch getWatchById(@PathVariable long id) {
        return watchService.getWatchById(id);
    }

    @GetMapping(path = "/watches/gender/{gender}")
    public List<Watch> getWatchesByGender(@PathVariable String gender) {
        return watchService.getWatchesByGender(gender);

    }

    @PostMapping(path="/watches/upload",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Watch> uploadWatch(
        @RequestParam String brand,
            @RequestParam(required = false) BigDecimal price,
            @RequestParam(required = false) Integer discount,
            @RequestParam String modelNumber,
            @RequestParam Boolean trending,
            @RequestParam String collectionName,
            @RequestParam String manufactureOrExported,
            @RequestParam String brandCountry,
            @RequestParam(required = false) String importedBy,
            @RequestParam String watchGlassCrystal,
            @RequestParam(required = false) Integer warranty,
            @RequestParam String waterResistance,
            @RequestParam String caseMaterial,
            @RequestParam String gender,
            @RequestParam String caseShape,
            @RequestParam String dialColor,
            @RequestParam String dialType,
            @RequestParam(required = false) Integer caseSizeMM,
            @RequestParam(required = false) Integer caseThicknessMM,
            @RequestParam String strapColor,
            @RequestParam String strapMaterial,
            @RequestParam(required = false) Integer strapWidthMM,
            @RequestParam String strapType,
            @RequestParam(required = false) String careInstruction,
            @RequestParam String description,
            @RequestParam(required = false) MultipartFile firstImage,
            @RequestParam(required = false) MultipartFile secondImage,
            @RequestParam(required = false) MultipartFile thirdImage,
            @RequestParam(required = false) MultipartFile fourthImage
    )throws IOException{
        Watch watch = new Watch();
        watch.setBrand(brand);
        watch.setPrice(price);
        watch.setDiscount(discount);
        watch.setModelNumber(modelNumber);
        watch.setTrending(trending);
        watch.setCollectionName(collectionName);
        watch.setManufactureOrExported(manufactureOrExported);
        watch.setBrandCountry(brandCountry);
        watch.setImportedBy(importedBy);
        watch.setWatchGlassOrCrystal(watchGlassCrystal);
        watch.setWarranty(warranty);
        watch.setWaterResistance(waterResistance);
        watch.setCaseMaterial(caseMaterial);
        watch.setGender(gender);
        watch.setCaseShape(caseShape);
        watch.setDialColor(dialColor);
        watch.setDialType(dialType);
        watch.setCaseSizeMM(caseSizeMM);
        watch.setCaseThicknessMM(caseThicknessMM);
        watch.setStrapColor(strapColor);
        watch.setStrapMaterial(strapMaterial);
        watch.setStrapWidthMM(strapWidthMM);
        watch.setStrapType(strapType);
        watch.setCareInstruction(careInstruction);
        watch.setDescription(description);

        // Save files as byte[] in DB or store path
        if (firstImage != null) watch.setFirstImage(firstImage.getBytes());
        if (secondImage != null) watch.setSecondImage(secondImage.getBytes());
        if (thirdImage != null) watch.setThirdImage(thirdImage.getBytes());
        if (fourthImage != null) watch.setFourthImage(fourthImage.getBytes());

        watchService.saveNewWatch(watch);

        return ResponseEntity.ok(watch);
        

    }

}
