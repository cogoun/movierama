DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id INT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS movie;
CREATE TABLE movie (
    id INT PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    description VARCHAR(1000) NOT NULL
);

DROP TABLE IF EXISTS user_movie_relationship;
CREATE TABLE user_movie_relationship (
    id INT PRIMARY KEY,
    user_id INT NOT NULL,
    movie_id INT NOT NULL,
    relation VARCHAR(250) NOT NULL,
    foreign key (user_id) references user(id),
    foreign key (movie_id) references movie(id),
);