/*
* This scipt creates all necessary tables, if they do not exist yet.
* Call it with
* sqlite3 db_3S.db < create-tables.sql
*/

CREATE TABLE IF NOT EXISTS Content(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  itemId INTEGER NOT NULL,
  unitId INTEGER NOT NULL,
  quantity FLOAT NOT NULL CHECK(quantity >= 0),
  storageId INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS Item(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS Storage(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS Unit(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(32) NOT NULL
);
