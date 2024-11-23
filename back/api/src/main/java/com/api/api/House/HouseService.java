package com.api.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HouseService {
    @Autowired
    private HouseRepository houseRepository;

    // Create or Save a House
    public House saveHouse(House house) {
        return houseRepository.save(house);
    }

    // Retrieve All Houses
    public List<House> getAllHouses() {
        return houseRepository.findAll();
    }

    // Retrieve a House by ID
    public Optional<House> getHouseById(String id) {
        return houseRepository.findById(id);
    }

    // Delete a House by ID
    public void deleteHouseById(String id) {
        houseRepository.deleteById(id);
    }
}
