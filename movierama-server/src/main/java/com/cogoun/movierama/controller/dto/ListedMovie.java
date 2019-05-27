package com.cogoun.movierama.controller.dto;

import com.cogoun.movierama.domain.Movie;
import com.cogoun.movierama.domain.MovieAction;

public class ListedMovie extends Movie {

    private String postedByUsername;
    private long postedByUserId;
    private int likes;
    private int hates;
    private MovieAction.ActionType relationToRequestingUser;

    public static ListedMovie buildFrom(Movie movie) {
        ListedMovie listedMovie = new ListedMovie();
        listedMovie.setId(movie.getId());
        listedMovie.setTitle(movie.getTitle());
        listedMovie.setDate(movie.getDate());
        listedMovie.setDescription(movie.getDescription());
        return listedMovie;
    }

    public static Movie buildFrom(ListedMovie listedMovie) {
        Movie movie = new Movie();
        movie.setId(listedMovie.getId());
        movie.setTitle(listedMovie.getTitle());
        movie.setDate(listedMovie.getDate());
        movie.setDescription(listedMovie.getDescription());
        return movie;
    }

    public String getPostedByUsername() {
        return postedByUsername;
    }

    public void setPostedByUsername(String postedByUsername) {
        this.postedByUsername = postedByUsername;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getHates() {
        return hates;
    }

    public void setHates(int hates) {
        this.hates = hates;
    }

    public MovieAction.ActionType getRelationToRequestingUser() {
        return relationToRequestingUser;
    }

    public void setRelationToRequestingUser(MovieAction.ActionType relationToRequestingUser) {
        this.relationToRequestingUser = relationToRequestingUser;
    }

    public long getPostedByUserId() {
        return postedByUserId;
    }

    public void setPostedByUserId(long postedByUserId) {
        this.postedByUserId = postedByUserId;
    }
}
