package com.api.api;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.api.api.Fixture.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.api.api.House.House;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

class FixtureServiceTest {

    @Mock
    private FixtureRepository fixtureRepository;

    @InjectMocks
    private FixtureService fixtureService;

    private House mockHouse;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockHouse = new House(); // Create a mock House object for testing
    }

    @Test
    void testCreateFixture() {
        Fixture mockFixture = new Fixture(false, 120.5f, mockHouse, List.of(10.0f, 15.0f), LocalDateTime.now());
        when(fixtureRepository.save(mockFixture)).thenReturn(mockFixture);

        Fixture createdFixture = fixtureService.createFixture(mockFixture);

        assertNotNull(createdFixture);
        assertEquals(120.5f, createdFixture.getMaximumRate());
        assertEquals(2, createdFixture.getConsumption().size());
        verify(fixtureRepository, times(1)).save(mockFixture);
    }

    @Test
    void testGetAllFixtures() {
        List<Fixture> mockFixtures = List.of(
                new Fixture(true, 100.0f, mockHouse, List.of(5.0f, 10.0f), LocalDateTime.now()),
                new Fixture(false, 150.0f, mockHouse, List.of(7.0f, 8.0f), LocalDateTime.now())
        );
        when(fixtureRepository.findAll()).thenReturn(mockFixtures);

        List<Fixture> fixtures = fixtureService.getAllFixtures();

        assertNotNull(fixtures);
        assertEquals(2, fixtures.size());
        verify(fixtureRepository, times(1)).findAll();
    }

    @Test
    void testGetFixtureById() {
        String fixtureId = "123";
        Fixture mockFixture = new Fixture(true, 100.0f, mockHouse, List.of(10.5f), LocalDateTime.now());
        when(fixtureRepository.findById(fixtureId)).thenReturn(Optional.of(mockFixture));

        Optional<Fixture> fixture = fixtureService.getFixtureById(fixtureId);

        assertTrue(fixture.isPresent());
        assertEquals(100.0f, fixture.get().getMaximumRate());
        assertEquals(1, fixture.get().getConsumption().size());
        verify(fixtureRepository, times(1)).findById(fixtureId);
    }

    @Test
    void testGetFixtureByIdNotFound() {
        String fixtureId = "123";
        when(fixtureRepository.findById(fixtureId)).thenReturn(Optional.empty());

        Optional<Fixture> fixture = fixtureService.getFixtureById(fixtureId);

        assertFalse(fixture.isPresent());
        verify(fixtureRepository, times(1)).findById(fixtureId);
    }

    @Test
    void testUpdateFixture_WhenFixtureExists() {
        String fixtureId = "123";
        Fixture existingFixture = new Fixture(false, 100.0f, mockHouse, List.of(10.5f), LocalDateTime.now());
        Fixture updatedFixture = new Fixture(true, 200.0f, mockHouse, List.of(20.0f), LocalDateTime.now());

        when(fixtureRepository.findById(fixtureId)).thenReturn(Optional.of(existingFixture));
        when(fixtureRepository.save(any(Fixture.class))).thenReturn(updatedFixture);

        Fixture result = fixtureService.updateFixture(fixtureId, updatedFixture);

        assertNotNull(result);
        assertEquals(200.0f, result.getMaximumRate());
        assertTrue(result.isOn());

        verify(fixtureRepository, times(1)).findById(fixtureId);
        verify(fixtureRepository, times(1)).save(any(Fixture.class));
    }

    @Test
    void testUpdateFixture_WhenFixtureDoesNotExist() {
        String fixtureId = "123";
        Fixture updatedFixture = new Fixture(true, 200.0f, mockHouse, List.of(20.0f), LocalDateTime.now());

        when(fixtureRepository.findById(fixtureId)).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(RuntimeException.class, () -> 
            fixtureService.updateFixture(fixtureId, updatedFixture)
        );

        assertEquals("Fixture not found with ID: 123", exception.getMessage());

        verify(fixtureRepository, times(1)).findById(fixtureId);
        verify(fixtureRepository, never()).save(any());
    }

    @Test
    void testDeleteFixture() {
        String fixtureId = "123";

        doNothing().when(fixtureRepository).deleteById(fixtureId);

        fixtureService.deleteFixture(fixtureId);

        verify(fixtureRepository, times(1)).deleteById(fixtureId);
    }
}
