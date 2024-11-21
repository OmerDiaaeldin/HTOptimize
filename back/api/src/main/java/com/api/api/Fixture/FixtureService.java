
package com.api.api.fixture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FixtureService {

    private final FixtureRepository fixtureRepository;

    @Autowired
    public FixtureService(FixtureRepository fixtureRepository) {
        this.fixtureRepository = fixtureRepository;
    }

    // Create a new fixture
    public Fixture createFixture(Fixture fixture) {
        return fixtureRepository.save(fixture);
    }

    // Get all fixtures
    public List<Fixture> getAllFixtures() {
        return fixtureRepository.findAll();
    }

    // Get a fixture by ID
    public Optional<Fixture> getFixtureById(String id) {
        return fixtureRepository.findById(id);
    }

    // Update a fixture
    public Fixture updateFixture(String id, Fixture updatedFixture) {
        return fixtureRepository.findById(id)
                .map(existingFixture -> {
                    existingFixture.setOn(updatedFixture.isOn());
                    existingFixture.setMaximumRate(updatedFixture.getMaximumRate());
                    existingFixture.setHouse(updatedFixture.getHouse());
                    return fixtureRepository.save(existingFixture);
                })
                .orElseThrow(() -> new RuntimeException("Fixture not found with ID: " + id));
    }

    // Delete a fixture
    public void deleteFixture(String id) {
        fixtureRepository.deleteById(id);
    }
}