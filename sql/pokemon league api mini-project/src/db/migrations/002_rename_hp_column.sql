/*
 002_rename_hp_column.sql
 
 rename "hp" column to "base_hp" in pokemon table.
 
 author: christopher romo
 created: 2026-06-11
 */
ALTER TABLE pokemon
RENAME COLUMN hp TO base_hp;