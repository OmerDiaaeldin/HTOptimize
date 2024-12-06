package com.api.api.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.api.api.House.House;
import com.api.api.House.HouseService;

import java.util.Optional;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    private HouseService HouseService;
    
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        String houseId = user.getHouse().getId();

        House house = HouseService.getHouseById(houseId).orElseThrow(() -> new RuntimeException("House not found with ID: " + houseId));

        User newUser = new User(user.getUserName(), user.getPassword(), house);
        return userService.createUser(newUser);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable String id) {
        return userService.getUserById(id);
    }

    @PutMapping("/{id}")
    public Optional<User> updateUserById(@PathVariable String id, @RequestBody User user) {
        return userService.updateUserById(id, user);
    }
}
