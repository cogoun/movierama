package com.cogoun.movierama.controller;

import com.cogoun.movierama.domain.MovieAction;
import com.cogoun.movierama.domain.User;
import com.cogoun.movierama.repository.MovieActionRepository;
import com.cogoun.movierama.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin
    @PostMapping(produces = "application/json")
    public User enroll(@RequestBody User user) {
        return userRepository.save(user);
    }

    @CrossOrigin
    @GetMapping(value = "/login", produces = "application/json")
    public User login(@RequestParam String name, @RequestParam String password) {
        return userRepository.findOneByNameAndPassword(name, password).get();
    }

    @CrossOrigin
    @GetMapping(value = "/all", produces = "application/json")
    public List<User> all() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }
}
