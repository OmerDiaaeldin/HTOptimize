package com.api.api.User;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.api.api.House.House;

import org.springframework.data.mongodb.core.mapping.DBRef;

@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String userName;
    private String password;

    @DBRef
    private House House;

    public User(String userName, String password, House House){
        this.userName = userName;
        this.password = password;
        this.House = House;
    }

    public String getId(){
        return this.id;
    }

    public void setId(String id){
        this.id = id;
    }

    public String getUserName(){
        return userName;
    }

    public void setUserName(String userName){
        this.userName = userName;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public House getHouse(){
        return House;
    }

    public void setHouse(House House){
        this.House =  House;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", House=" + House +
                '}';
    }

}
