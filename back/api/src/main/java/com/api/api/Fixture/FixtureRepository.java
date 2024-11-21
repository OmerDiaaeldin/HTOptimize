package com.api.api.fixture;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface FixtureRepository extends MongoRepository<Fixture, String> {
    
}