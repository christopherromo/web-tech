/*
 seed.sql
 
 populates the pokemon, teams, and trainers tables.
 
 author: christopher romo
 created: 2026-06-03
 */
-- pokemon
INSERT INTO pokemon(name, type)
VALUES ('pikachu', 'electric'),
    ('cinderace', 'fire'),
    ('grookey', 'grass'),
    ('inteleon', 'water'),
    ('weezing', 'poison'),
    ('wobbuffet', 'psychic'),
    ('lucario', 'fighting, steel'),
    ('skeledirge', 'fire, ghost'),
    ('absol', 'dark'),
    ('roserade', 'grass, poison'),
    ('empoleon', 'water, steel'),
    ('heracross', 'bug, fighting'),
    ('garchomp', 'dragon, ground'),
    ('glaceon', 'ice'),
    ('milotic', 'water'),
    ('charizard', 'fire, flying'),
    ('chespin', 'grass'),
    ('luxray', 'electric'),
    ('delphox', 'fire, psychic'),
    ('sylveon', 'fairy'),
    ('clefable', 'fairy'),
    ('lilligant', 'grass'),
    ('armarouge', 'fire, psychic'),
    ('meowscarada', 'grass, dark'),
    ('gallade', 'psychic, fighting'),
    ('cubone', 'ground'),
    ('meowth', 'normal'),
    ('mew', 'psychic'),
    ('zeraora', 'electric'),
    ('missingno', NULL);
-- trainers
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
INSERT INTO trainers(name, region, badges)
VALUES ('ash', 'kanto', 48),
    ('barry', 'sinnoh', 8),
    ('alain', 'kalos', 8);
-- teams