package com.api.api;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TestController {
    
    @GetMapping("/tt")
    String temp(){
        return "Inside the test";
    }
}
