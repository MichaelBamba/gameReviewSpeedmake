create database Game_Reviews;
\c Game_Reviews;

create table Games (
    id serial PRIMARY KEY,
    name text,
    genre text,
    year_published int,
    publisher text,
    rating int 
    );

create table users (
    id serial PRIMARY KEY,
    name text,
    password varchar,
    user_since int

);
create table reviewers (
    id serial PRIMARY KEY,
    users_id int REFERENCES users(id),
    name text,
    reviewer_since int 
);



create table reviews (
    id serial PRIMARY KEY,
    reviewers_id int REFERENCES reviewers(id),
    Games_id int REFERENCES Games(id),
    title text,
    score int, 
    review text
);

create table comment (
    id serial PRIMARY KEY,
    users_id int REFERENCES users(id),
    comment text
);

INSERT INTO Games (
    name, genre, year_published, publisher, rating)
VALUES
('Pokemon Mystery Dungeon DX', 
'tbs, Pokemon, rougelike', 
2020, 
'Spike Chunsoft', 
8);

Insert into users (
    name, password, user_since )
    VALUES (
        'LOKI', 'HI', 2019
);

INSERT into reviewers(
    users_id, name, reviewer_since  
)
VALUES
(1 , 'LOKI' , 2019);

INSERT into reviews (
    reviewers_id, Games_id, title, score, review)
    VALUES (
        1, 1 , 'A Good Remake', 8,
        'This is a quality remake of a beloved game. It does not evolve the game staying completly true to the original even if it maybe detrimintal.'
    );