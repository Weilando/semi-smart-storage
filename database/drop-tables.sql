/*
* This scipt deletes all created tables, if they exist.
* Call it with
* sqlite3 db_3D.db < drop-tables.sql
*/

DROP TABLE IF EXISTS Item;
DROP TABLE IF EXISTS Unit;
DROP TABLE IF EXISTS Storage;
DROP TABLE IF EXISTS isIn;
