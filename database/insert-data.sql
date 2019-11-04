/*
* This scipt adds a little set of entries to your database.
* Call it with
* sqlite3 db_3D.db < insert-data.sql
*
* Attention: This script does not check, if entries already exist or if the tables exist!
* Please run create-tables.sql first.
*/

INSERT INTO Unit(name) VALUES
  (1, '1 piece'),
  (2, '250g'),
  (3, '500g'),
  (4, '750g'),
  (5, '1kg'),
  (6, '500ml'),
  (7, '1L');

INSERT INTO Storage(id, name) VALUES (1, 'Fridge');

INSERT INTO Item(id, name, unitId, quantity) VALUES
  (1, 'Milk', 7, 1.0),
  (2, 'Egg', 1, 7.0),
  (3, 'Yoghurt', 3, 3.5),
  (4, 'Butter', 1, 1.0),
  (5, 'Chicken breast', 2, 1.0);

INSERT INTO isIn(storageId, itemId) VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5);
