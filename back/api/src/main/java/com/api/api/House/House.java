package com.api.api;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "House")
public class House {

    @Id
    private String id;

    private String address;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString(){
        return "House{" +
                "id='" + id + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
