package com.cogoun.movierama.repository;

import com.cogoun.movierama.domain.Movie;
import com.cogoun.movierama.domain.MovieAction;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import javax.persistence.NamedNativeQuery;
import java.util.List;

public interface MovieRepository extends CrudRepository<Movie, Long> {

    @Query(value = "select m.* from movie m, user_movie_relationship umr "
            + "where m.id = umr.movie_id and umr.user_id = ?1 and umr.relation= ?2",
            nativeQuery = true)
    Iterable<Movie> findAllByUserIdAndRelation(long submittedByUserId, int relation);
}
