package com.cogoun.movierama.controller.dto;

import com.cogoun.movierama.domain.Movie;

public class SubmittedMovie extends Movie {

    private long postedByUserId;

    public long getPostedByUserId() {
        return postedByUserId;
    }

    public void setPostedByUserId(long postedByUserId) {
        this.postedByUserId = postedByUserId;
    }

    public static Movie buildMovie(SubmittedMovie submittedMovie) {
        Movie movie = new Movie();
        movie.setId(submittedMovie.getId());
        movie.setTitle(submittedMovie.getTitle());
        movie.setDateAdded(submittedMovie.getDateAdded());
        movie.setDescription(submittedMovie.getDescription());
        return movie;
    }
}
