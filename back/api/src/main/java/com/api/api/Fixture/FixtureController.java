package com.api.api.Fixture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fixtures")
public class FixtureController {

    private final FixtureService fixtureService;

    @Autowired
    public FixtureController(FixtureService fixtureService) {
        this.fixtureService = fixtureService;
    }

    // Create a new fixture
    @PostMapping
    public Fixture createFixture(@RequestBody Fixture fixture) {
        System.out.println("Creating fixture Controller");
        System.out.println(fixture);
        return fixtureService.createFixture(fixture);
    }

    // Get all fixtures
    @GetMapping
    public List<Fixture> getAllFixtures() {
        return fixtureService.getAllFixtures();
    }

    // Get a fixture by ID
    @GetMapping("/{id}")
    public Optional<Fixture> getFixtureById(@PathVariable String id) {
        return fixtureService.getFixtureById(id);
    }

    // Update a fixture
    @PutMapping("/{id}")
    public Fixture updateFixture(@PathVariable String id, @RequestBody Fixture fixture) {
        boolean isOn = fixture.isOn();
        Fixture updatedFixture = fixture;
        if(isOn == false){ // the water has been turned off
            LocalDateTime now = LocalDateTime.now();
            LocalDateTime lastOn = fixture.getLastOn();

            long seconds = ChronoUnit.MINUTES.between(lastOn, now);
            List<Float> updatedConsumption = fixture.getConsumption();
            updatedConsumption.set(updatedConsumption.size()-1,updatedConsumption.get(updatedConsumption.size()-1) + seconds);
            System.out.println("Flag");
            System.out.println(seconds);
            System.out.println(updatedConsumption);
            updatedFixture.setConsumption(updatedConsumption);
        }
        System.out.println("Updating fixture: ");
        System.out.println(updatedFixture);
        return fixtureService.updateFixture(id, updatedFixture);
    }

    // Delete a fixture
    @DeleteMapping("/{id}")
    public void deleteFixture(@PathVariable String id) {
        fixtureService.deleteFixture(id);
    }
}