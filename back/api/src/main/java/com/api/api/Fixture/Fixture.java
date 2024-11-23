package com.api.api;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "fixtures") // Maps to the "fixtures" collection in MongoDB
public class Fixture {

    @Id
    private String id; // MongoDB's unique identifier (_id field)

    private boolean on; // Represents the on/off state of the fixture
    private float maximumRate; // Represents the maximum rate (e.g., wattage, speed)

    @DBRef // Indicates a reference to another document (House)
    private House house; // A reference to the House document

    // Constructors
    public Fixture() {}

    public Fixture(boolean on, float maximumRate, House house) {
        this.on = on;
        this.maximumRate = maximumRate;
        this.house = house;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean isOn() {
        return on;
    }

    public void setOn(boolean on) {
        this.on = on;
    }

    public float getMaximumRate() {
        return maximumRate;
    }

    public void setMaximumRate(float maximumRate) {
        this.maximumRate = maximumRate;
    }

    public House getHouse() {
        return house;
    }

    public void setHouse(House house) {
        this.house = house;
    }

    @Override
    public String toString() {
        return "Fixture{" +
                "id='" + id + '\'' +
                ", on=" + on +
                ", maximumRate=" + maximumRate +
                ", house=" + house +
                '}';
    }
}