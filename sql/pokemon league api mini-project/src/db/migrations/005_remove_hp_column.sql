/*
 005_remove_hp_column.sql
 
 removes "base_hp" column from pokemon table.
 
 author: christopher romo
 created: 2026-06-11
 */
ALTER TABLE pokemon 
DROP COLUMN base_hp;