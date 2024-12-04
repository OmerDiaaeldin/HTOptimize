package com.api.api.House;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "House")
public class House {

    @Id
    private String id;

    private String address;

    public House(){
        
    }

    public House(String address){
        this.address = address;
    }

    public String getId(){
        return this.id;
    }

    public void setId(String id){
        this.id = id;
    }

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
