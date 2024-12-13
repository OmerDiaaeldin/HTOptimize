package com.api.api;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.api.api.House.House;
import com.api.api.House.HouseRepository;
import com.api.api.House.HouseService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

class HouseServiceTest {

    @Mock
    private HouseRepository houseRepository;

    @InjectMocks
    private HouseService houseService;

    private House house;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        house = new House("123 Main Street");
        house.setId("1");
    }

    @Test
    void testCreateHouse() {
        when(houseRepository.save(house)).thenReturn(house);

        House createdHouse = houseService.saveHouse(house);

        assertNotNull(createdHouse);
        assertEquals("123 Main Street", createdHouse.getAddress());
        verify(houseRepository, times(1)).save(house);
    }

    @Test
    void testGetAllHouses() {
        List<House> houses = new ArrayList<>();
        houses.add(house);
        when(houseRepository.findAll()).thenReturn(houses);

        List<House> result = houseService.getAllHouses();

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("123 Main Street", result.get(0).getAddress());
        verify(houseRepository, times(1)).findAll();
    }

    @Test
    void testGetHouseById() {
        when(houseRepository.findById("1")).thenReturn(Optional.of(house));

        Optional<House> result = houseService.getHouseById("1");

        assertTrue(result.isPresent());
        assertEquals("123 Main Street", result.get().getAddress());
        verify(houseRepository, times(1)).findById("1");
    }


    @Test
    void testDeleteHouse() {
        doNothing().when(houseRepository).deleteById("1");

        houseService.deleteHouseById("1");

        verify(houseRepository, times(1)).deleteById("1");
    }

    @Test
    void testGetHouseByIdNotFound() {
        when(houseRepository.findById("999")).thenReturn(Optional.empty());

        Optional<House> result = houseService.getHouseById("999");

        assertFalse(result.isPresent());
        verify(houseRepository, times(1)).findById("999");
    }
}