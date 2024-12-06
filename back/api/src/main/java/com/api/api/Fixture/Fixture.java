package com.api.api.Fixture;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.api.api.House.House;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "fixtures") // Maps to the "fixtures" collection in MongoDB
public class Fixture {

    @Id
    private String id; // MongoDB's unique identifier (_id field)

    private boolean on; // Represents the on/off state of the fixture
    private float maximumRate; // Represents the maximum rate (e.g., wattage, speed)

    @DBRef // Indicates a reference to another document (House)
    private House house; // A reference to the House document

    private List<Float> consumption; // Represents consumption data stored as an array in MongoDB

     @LastModifiedDate // Automatically updated when the document is modified
    private LocalDateTime lastOn; // Field to store the last updated timestamp

    // Default constructor
    public Fixture() {}

    // Constructor to initialize all fields
    public Fixture(boolean on, float maximumRate, House house, List<Float> consumption, LocalDateTime lastOn) {
        this.on = on;
        this.maximumRate = maximumRate;
        this.house = house;
        this.consumption = consumption;
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

    public List<Float> getConsumption() {
        return consumption;
    }

    public void setConsumption(List<Float> consumption) {
        this.consumption = consumption;
    }

    public LocalDateTime getLastOn() {
        return lastOn;
    }
    
    public void setLastOn(LocalDateTime lastOn) {
        this.lastOn = lastOn;
    }

    @Override
    public String toString() {
        return "Fixture{" +
                "id='" + id + '\'' +
                ", on=" + on +
                ", maximumRate=" + maximumRate +
                ", house=" + house +
                ", consumption=" + consumption +
                '}';
    }
}
