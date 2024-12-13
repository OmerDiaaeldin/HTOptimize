package com.api.api;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.api.api.User.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateUser() {
        User mockUser = new User("testuser", "password123", null);
        when(userRepository.save(mockUser)).thenReturn(mockUser);

        User createdUser = userService.createUser(mockUser);

        assertNotNull(createdUser);
        assertEquals("testuser", createdUser.getUserName());
        verify(userRepository, times(1)).save(mockUser);
    }

    @Test
    void testGetAllUsers() {
        List<User> mockUsers = List.of(
                new User("user1", "pass1", null),
                new User("user2", "pass2", null)
        );
        when(userRepository.findAll()).thenReturn(mockUsers);

        List<User> users = userService.getAllUsers();

        assertNotNull(users);
        assertEquals(2, users.size());
        verify(userRepository, times(1)).findAll();
    }

    @Test
    void testGetUserById() {
        String userId = "123";
        User mockUser = new User("testuser", "password123", null);
        when(userRepository.findById(userId)).thenReturn(Optional.of(mockUser));

        Optional<User> user = userService.getUserById(userId);

        assertTrue(user.isPresent());
        assertEquals("testuser", user.get().getUserName());
        verify(userRepository, times(1)).findById(userId);
    }

    @Test
    void testGetUserByIdNotFound() {
        String userId = "123";
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        Optional<User> user = userService.getUserById(userId);

        assertFalse(user.isPresent());
        verify(userRepository, times(1)).findById(userId);
    }

    @Test
    void testUpdateUser() {
        String userId = "123";
        User existingUser = new User("oldUser", "oldPass", null);
        User updatedUser = new User("newUser", "newPass", null);

        when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));
        when(userRepository.save(existingUser)).thenReturn(updatedUser);

        Optional<User> result = userService.updateUserById(userId, updatedUser);

        assertTrue(result.isPresent());
        assertEquals("newUser", result.get().getUserName());
        assertEquals("newPass", result.get().getPassword());
        verify(userRepository, times(1)).findById(userId);
        verify(userRepository, times(1)).save(existingUser);
    }

    @Test
    void testDeleteUser() {
        String userId = "123";

        doNothing().when(userRepository).deleteById(userId);

        userService.deleteUser(userId);

        verify(userRepository, times(1)).deleteById(userId);
    }
}
