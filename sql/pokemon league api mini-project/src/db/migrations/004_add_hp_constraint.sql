/*
 004_add_hp_constraint.sql
 
 adds a constraint for "base_hp" column in pokemon table.
 
 author: christopher romo
 created: 2026-06-11
 */
-- base_hp is now required
ALTER TABLE pokemon
ALTER COLUMN base_hp
SET NOT NULL;
-- base_hp must be positive
ALTER TABLE pokemon
ADD CONSTRAINT hp_check CHECK (base_hp > 0);