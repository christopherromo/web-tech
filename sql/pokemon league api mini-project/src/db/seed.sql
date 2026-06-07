/*
 seed.sql
 
 populates the pokemon, teams, and trainers tables.
 
 author: christopher romo
 created: 2026-06-03
 */
-- pokemon
INSERT INTO pokemon(name, type, level)
VALUES ('pikachu', 'electric', 80),
    ('cinderace', 'fire', 40),
    ('grookey', 'grass', 35),
    ('inteleon', 'water', 30),
    ('weezing', 'poison', 25),
    ('wobbuffet', 'psychic', 50),
    ('lucario', 'fighting, steel', 40),
    ('skeledirge', 'fire, ghost', 45),
    ('absol', 'dark', 35),
    ('roserade', 'grass, poison', 30),
    ('empoleon', 'water, steel', 60),
    ('heracross', 'bug, fighting', 55),
    ('garchomp', 'dragon, ground', 80),
    ('glaceon', 'ice', 75),
    ('milotic', 'water', 75),
    ('charizard', 'fire, flying', 70),
    ('chespin', 'grass', 35),
    ('luxray', 'electric', 40),
    ('delphox', 'fire, psychic', 40),
    ('sylveon', 'fairy', 45),
    ('clefable', 'fairy', 55),
    ('lilligant', 'grass', 60),
    ('armarouge', 'fire, psychic', 40),
    ('meowscarada', 'grass, dark', 45),
    ('gallade', 'psychic, fighting', 45),
    ('cubone', 'ground', 15),
    ('meowth', 'normal', 50),
    ('mew', 'psychic', 100),
    ('zeraora', 'electric', 50),
    ('missingno', NULL, NULL);
-- trainers
INSERT INTO trainers(name, region, badges)
VALUES ('ash', 'kanto', 48),
    ('barry', 'sinnoh', 8),
    ('alain', 'kalos', 8);
INSERT INTO trainers(name, region)
VALUES ('goh', 'kanto'),
    ('james', 'kanto'),
    ('jessie', 'kanto'),
    ('roy', 'kanto'),
    ('drew', 'hoenn'),
    ('cynthia', 'sinnoh'),
    ('n', 'unova'),
    ('clemont', 'kalos'),
    ('serena', 'kalos'),
    ('lusamine', 'alola'),
    ('liko', 'paldea'),
    ('rinto', NULL);
-- teams
INSERT INTO teams(trainer_id, pokemon_id)
VALUES (1, 1),
    (4, 2),
    (4, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (7, 8),
    (8, 9),
    (8, 10),
    (2, 11),
    (2, 12),
    (9, 13),
    (9, 14),
    (9, 15),
    (3, 16),
    (11, 17),
    (11, 18),
    (12, 19),
    (12, 20),
    (13, 21),
    (13, 22),
    (14, 23),
    (14, 24),
    (15, 25);