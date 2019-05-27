package com.cogoun.movierama.controller;

import com.cogoun.movierama.controller.dto.ListedMovie;
import com.cogoun.movierama.controller.dto.SubmittedMovie;
import com.cogoun.movierama.domain.Movie;
import com.cogoun.movierama.domain.MovieAction;
import com.cogoun.movierama.domain.User;
import com.cogoun.movierama.repository.MovieActionRepository;
import com.cogoun.movierama.repository.MovieRepository;
import com.cogoun.movierama.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private MovieActionRepository movieActionRepository;

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin
    @PostMapping(produces = "application/json")
    public SubmittedMovie submit(@RequestBody SubmittedMovie submittedMovie) {
        submittedMovie.setDate(new Date());
        Movie savedMovie = movieRepository.save(SubmittedMovie.buildMovie(submittedMovie));
        MovieAction movieAction = new MovieAction();
        movieAction.setMovieId(savedMovie.getId());
        movieAction.setUserId(submittedMovie.getPostedByUserId());
        movieAction.setRelation(MovieAction.ActionType.CREATED);
        movieActionRepository.save(movieAction);
        submittedMovie.setId(savedMovie.getId());
        return submittedMovie;
    }

    @CrossOrigin
    @GetMapping(value = "/all", produces = "application/json")
    public List<ListedMovie> all(@RequestParam long userId) {
        Iterable<Movie> foundMovies = movieRepository.findAll();
        List<ListedMovie> movies = getListedMovies(userId, foundMovies);
        return movies;
    }

    @CrossOrigin
    @GetMapping(value = "/byUser", produces = "application/json")
    public List<ListedMovie> submittedByUser(@RequestParam long userId, @RequestParam long submittedByUserId) {
        Iterable<Movie> foundMovies = movieRepository.findAllByUserIdAndRelation(submittedByUserId, MovieAction.ActionType.CREATED.ordinal());
        List<ListedMovie> movies = getListedMovies(userId, foundMovies);
        return movies;
    }

    private List<ListedMovie> getListedMovies(@RequestParam long userId, Iterable<Movie> forMovies) {
        List<ListedMovie> movies = new ArrayList<>();
        forMovies.forEach(movie -> {
            ListedMovie listedMovie = ListedMovie.buildFrom(movie);
            List<MovieAction> movieActions = movieActionRepository.findByMovieId(movie.getId());
            movieActions.stream().forEach(action -> {
                if (action.getRelation() != null) {
                    if (action.getUserId() == userId) {
                        listedMovie.setRelationToRequestingUser(action.getRelation());
                    }
                    switch (action.getRelation()) {
                        case LIKED:
                            listedMovie.setLikes(listedMovie.getLikes() + 1);
                            break;
                        case HATED:
                            listedMovie.setHates(listedMovie.getHates() + 1);
                            break;
                        case CREATED:
                            User user = userRepository.findById(action.getUserId()).get();
                            listedMovie.setPostedByUsername(user.getName());
                            listedMovie.setPostedByUserId(action.getUserId());
                    }
                }
            });
            movies.add(listedMovie);
        });
        return movies;
    }

    @CrossOrigin
    @PostMapping(value = "/like", produces = "application/json")
    public void like(@RequestParam long userId, @RequestParam long movieId) {
        MovieAction movieAction = movieActionRepository.findOneByMovieIdAndUserId(movieId, userId);
        if (movieAction == null) {
            movieAction = new MovieAction();
            movieAction.setUserId(userId);
            movieAction.setMovieId(movieId);
            movieAction.setRelation(MovieAction.ActionType.LIKED);
        } else if (movieAction.getRelation().equals(MovieAction.ActionType.HATED)) {
            movieAction.setRelation(MovieAction.ActionType.LIKED);
        }
        movieActionRepository.save(movieAction);
    }

    @CrossOrigin
    @PostMapping(value = "/hate", produces = "application/json")
    public void hate(@RequestParam long userId, @RequestParam long movieId) {
        MovieAction movieAction = movieActionRepository.findOneByMovieIdAndUserId(movieId, userId);
        if (movieAction == null) {
            movieAction = new MovieAction();
            movieAction.setUserId(userId);
            movieAction.setMovieId(movieId);
            movieAction.setRelation(MovieAction.ActionType.HATED);
        } else if (movieAction.getRelation().equals(MovieAction.ActionType.LIKED)) {
            movieAction.setRelation(MovieAction.ActionType.HATED);
        }
        movieActionRepository.save(movieAction);
    }

    @CrossOrigin
    @PostMapping(value = "/retract", produces = "application/json")
    public void retract(@RequestParam long userId, @RequestParam long movieId) {
        MovieAction movieAction = movieActionRepository.findOneByMovieIdAndUserId(movieId, userId);
        if (movieAction != null && movieAction.getRelation() != MovieAction.ActionType.CREATED) {
            movieActionRepository.delete(movieAction);
        }

    }
}
