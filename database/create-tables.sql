/*
* This scipt creates all necessary tables, if they do not exist yet.
* Call it with
* sqlite3 db_3D.db < create-tables.sql
*/

CREATE TABLE IF NOT EXISTS Storage(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS Item(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(128) NOT NULL,
  unitId INTEGER NOT NULL,
  quantity FLOAT NOT NULL
);

CREATE TABLE IF NOT EXISTS isIn(
  itemId INTEGER NOT NULL,
  storageId INTEGER NOT NULL,
  PRIMARY KEY(itemId, storageId)
);

CREATE TABLE IF NOT EXISTS Unit(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(32) NOT NULL
);
