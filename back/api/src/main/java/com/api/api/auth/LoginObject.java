package com.api.api.auth;

public class LoginObject {
    public String username;
    public String jwt;
    public String houseId;

    public LoginObject(String username, String jwt, String houseId) {
        this.username = username;
        this.jwt = jwt;
        this.houseId = houseId;
    }
}
