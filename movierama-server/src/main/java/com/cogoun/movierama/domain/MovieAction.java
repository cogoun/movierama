package com.cogoun.movierama.domain;

import javax.persistence.*;

@Entity
@Table(name = "USER_MOVIE_RELATIONSHIP")
public class MovieAction {

    public enum ActionType {
        NONE, CREATED, LIKED, HATED
    }

    @Id
    @GeneratedValue
    private long id;

    private long userId;

    private long movieId;

    private ActionType relation;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public ActionType getRelation() {
        return relation;
    }

    public void setRelation(ActionType relation) {
        this.relation = relation;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getMovieId() {
        return movieId;
    }

    public void setMovieId(long movieId) {
        this.movieId = movieId;
    }
}
