package com.cogoun.movierama.repository;

import com.cogoun.movierama.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findOneByNameAndPassword(String name, String password);
}
