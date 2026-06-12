/*
 003_add_default_hp_value.sql
 
 adds default values for "base_hp" column in pokemon table.
 
 author: christopher romo
 created: 2026-06-11
 */
-- new rows default to 100
ALTER TABLE pokemon
ALTER COLUMN base_hp
SET DEFAULT 100;
-- old missing values become 100
UPDATE pokemon
SET base_hp = 100
WHERE base_hp IS NULL;