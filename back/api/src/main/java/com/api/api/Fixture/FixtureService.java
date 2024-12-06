package com.api.api.Fixture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FixtureService {

    @Autowired
    private final FixtureRepository fixtureRepository;

    public FixtureService(FixtureRepository fixtureRepository) {
        this.fixtureRepository = fixtureRepository;
    }

    // Create a new fixture
    public Fixture createFixture(Fixture fixture) {
        fixture.setLastOn(LocalDateTime.now());
        System.out.println("Creating fixture Service");
        return fixtureRepository.save(fixture);
    }

    // Get all fixtures
    public List<Fixture> getAllFixtures() {
        System.out.println("Getting all fixtures Service");
        return fixtureRepository.findAll();
    }

    // Get a fixture by ID
    public Optional<Fixture> getFixtureById(String id) {
        return fixtureRepository.findById(id);
    }

    public List<Float> getConsumptionById(String id) {
        return fixtureRepository.findById(id).get().getConsumption();
    }

    // Update a fixture
    public Fixture updateFixture(String id, Fixture updatedFixture) {
        return fixtureRepository.findById(id)
                .map(existingFixture -> {
                    existingFixture.setOn(updatedFixture.isOn());
                    existingFixture.setMaximumRate(updatedFixture.getMaximumRate());
                    existingFixture.setHouse(updatedFixture.getHouse());
                    existingFixture.setConsumption(updatedFixture.getConsumption());
                    return fixtureRepository.save(existingFixture);
                })
                .orElseThrow(() -> new RuntimeException("Fixture not found with ID: " + id));
    }

    // Delete a fixture
    public void deleteFixture(String id) {
        fixtureRepository.deleteById(id);
    }
}