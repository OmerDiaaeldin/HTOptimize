package com.api.api.fixture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        return fixtureService.updateFixture(id, fixture);
    }

    // Delete a fixture
    @DeleteMapping("/{id}")
    public void deleteFixture(@PathVariable String id) {
        fixtureService.deleteFixture(id);
    }
}