package com.karimi.baztique.model;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "watch_user")
public class WatchUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long userId;

    @Column(name = "email")
    private String email;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "office_address")
    private String officeAddress;

    @Column(name = "home_address")
    private String homeAddress;

    @Column(name="profile_picture")
    @Lob
    private byte[] profilePicture;

    @Column(name = "created_at", updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;


    @OneToMany(mappedBy = "watchUser", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Watch> watches;

    public WatchUser() {
    }

    public WatchUser(String email, String userName, String password, String phoneNumber, String firstName,
            String lastName, String officeAddress, String homeAddress, byte[] profilePicture, LocalDateTime createdAt,
            List<Watch> watches) {
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.officeAddress = officeAddress;
        this.homeAddress = homeAddress;
        this.profilePicture = profilePicture;
        this.createdAt = createdAt;
        this.watches = watches;
    }

    
    
}
