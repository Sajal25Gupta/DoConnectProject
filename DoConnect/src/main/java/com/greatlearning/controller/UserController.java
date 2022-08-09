package com.greatlearning.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.greatlearning.entity.User;
import com.greatlearning.service.UserService;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userservice;

    @PostMapping("/login")
    private String login(@RequestBody HashMap<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");
        String role = body.get("role");
        User user = userservice.findByPassword(password);
        if (role.equals("admin") && user != null) {
            return "admin";
        } else if (userservice.isExists(email, password)) {
            return "user";
        } else {
            return "no";
        }
    }


    @GetMapping("/useremail/{email}")
    private User getUserByEmail(@PathVariable String email) {
        return userservice.findByEmail(email);
    }

    @PostMapping("/register")
    private String Register(@RequestBody User u) {
        if (userservice.isExists(u.getEmail(), u.getPassword())) {
            return "exist";
        } else {
            userservice.save(u);
            return "inserted";
        }
    }

    @GetMapping("/user/{id}")
    private User user(@PathVariable int id) {
        try {
            return userservice.getById(id);
        } catch (Exception e) {
            return new User();
        }
    }

    @GetMapping("/users/unique/{name}")
    private List<String> getUniqueUsers(@PathVariable String name) {
        return userservice.getByDistinct(name);
    }

    @DeleteMapping("/deleteuser/{email}")
    private String deleteUser(@PathVariable String email) {
        if (userservice.findByEmail(email) != null) {
            userservice.delete(email);
            return "ok";
        }
        return "no";
    }
}
