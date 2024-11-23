package com.api.api;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String userName;
    private String password;

    @DBRef
    private House house;

    public User(String userName, String password, House house){
        this.userName = userName;
        this.password = password;
        this.house = house;
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
        return house;
    }

    public void setHouse(House house){
        this.house =  house;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", house=" + house +
                '}';
    }

}
