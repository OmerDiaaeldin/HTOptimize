package com.api.api.auth;

import com.api.api.House.House;
import com.api.api.House.HouseService;
import com.api.api.User.User;
import com.api.api.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private HouseService HouseService;

    @Autowired
    private UserService userService;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil, 
                          UserService userService, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        // Encode the password before saving

        String houseId = user.getHouse().getId();

        House house = HouseService.getHouseById(houseId).orElseThrow(() -> new RuntimeException("House not found with ID: " + houseId));

        User newUser = new User(user.getUserName(), passwordEncoder.encode(user.getPassword()), house);
        userService.createUser(newUser);

        return "User registered successfully!";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        System.out.println("Being executed");
        System.out.println(user);
        try {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword())
            );

            return jwtUtil.generateToken(user.getUserName());
        } catch (Exception e) {
            System.out.println("Error: " + e);
            return e.getMessage();
            // throw new RuntimeException("Invalid username/password");
        }
    }
}
