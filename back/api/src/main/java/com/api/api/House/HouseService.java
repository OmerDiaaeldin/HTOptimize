package com.api.api.House;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.api.Fixture.Fixture;
import com.api.api.Fixture.FixtureRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class HouseService {
    @Autowired
    private HouseRepository houseRepository;

    @Autowired
    private FixtureRepository FixtureRepository;

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

    public List<Float> getConsumptionByHouseId(String hid) throws Exception {
        List<Fixture> fixtures = FixtureRepository.findByHouse_Id(hid);
        System.out.println(fixtures);

        if (fixtures.isEmpty()) {
            throw new Exception("No fixtures found for house with ID: " + hid);
        }

        // Aggregate consumption values
        List<Float> consumptionList = new ArrayList<>();
        for (Fixture fixture : fixtures) {

            // current list of consumption values
            List<Float> consumption = fixture.getConsumption();
            if(consumption.size() > consumptionList.size()) { // pad the total consumption if needed
                while(consumptionList.size() < consumption.size()) {
                    consumptionList.add(0.0f);
                }
            }
            for(int i = 0; i < consumption.size(); i++) {
                consumptionList.set(i, consumptionList.get(i) + consumption.get(i));
            }
        }

        return consumptionList;
    }

    // Delete a House by ID
    public void deleteHouseById(String id) {
        houseRepository.deleteById(id);
    }
}
