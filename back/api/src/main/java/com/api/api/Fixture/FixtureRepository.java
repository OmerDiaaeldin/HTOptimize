package com.api.api.Fixture;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.api.api.Fixture.Fixture;
import java.util.List;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "Fixture", path = "Fixture")
public interface FixtureRepository extends MongoRepository<Fixture, String> {

    // // Custom query to find fixtures by house ID
    List<Fixture> findByHouse_Id(String houseId);
}
