package com.cogoun.movierama.repository;

import com.cogoun.movierama.domain.Movie;
import com.cogoun.movierama.domain.MovieAction;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface MovieActionRepository extends CrudRepository<MovieAction, Long> {

    MovieAction findOneByMovieIdAndUserId(long movieId, long userId);
    List<MovieAction> findByMovieId(long movieId);
}
