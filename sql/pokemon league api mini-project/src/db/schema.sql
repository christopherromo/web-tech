/*
 schema.sql
 
 creates the pokemon, teams, and trainers tables.
 
 author: christopher romo
 created: 2026-06-03
 */
-- pokemon table
CREATE TABLE pokemon (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(20),
    level INTEGER CHECK(level > 0)
);
-- trainers table
CREATE TABLE trainers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    region VARCHAR(30),
    badges INTEGER DEFAULT 0
);
-- teams table
CREATE TABLE teams (
    trainer_id INTEGER,
    pokemon_id INTEGER,
    PRIMARY KEY (trainer_id, pokemon_id),
    FOREIGN KEY (trainer_id) REFERENCES trainers(id),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
);