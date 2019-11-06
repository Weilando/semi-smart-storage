/*
* This scipt adds a little set of entries to your database.
* Call it with
* sqlite3 db_3D.db < insert-data.sql
*
* Attention: This script does not check, if entries already exist or if the tables exist!
* Please run create-tables.sql first.
*/

INSERT INTO Unit(id, name) VALUES
  (1, '1 piece'),
  (2, '250g'),
  (3, '500g'),
  (4, '750g'),
  (5, '1kg'),
  (6, '330ml bottle'),
  (7, '500ml bottle'),
  (8, '700ml bottle'),
  (9, '750ml bottle'),
  (10, '1L bottle'),
  (11, '1L carton'),
  (12, '150ml jar'),
  (13, '250ml jar'),
  (14, '500ml jar');

INSERT INTO Storage(id, name) VALUES (1, 'Fridge'), (2, 'Basement');

INSERT INTO Item(id, name, unitId) VALUES
  (1, 'Milk', 11),
  (2, 'Egg', 1),
  (3, 'Falafel', 1),
  (4, 'Hummus', 2),
  (5, 'Butter', 1),
  (6, 'Slice of ham', 1),
  (7, 'Sclice of salami', 1),
  (8, 'Cherry jam', 13),
  (9, 'Peach jam', 13),
  (10, 'Raspberry jam', 13),
  (11, 'Strawberry jam', 13),
  (12, 'Yoghurt', 14),
  (13, 'Chocolate pudding', 12),
  (14, 'Vanilla pudding', 12),
  (15, 'Chicken breast', 2),
  (16, 'Ground meat', 3),
  (17, 'Sparkling water', 9),
  (18, 'Beer', 6),
  (19, 'Apple juice', 9),
  (20, 'Orange juice', 11);

INSERT INTO isIn(storageId, itemId, quantity) VALUES
  (1, 1, 0.8),
  (1, 2, 7),
  (1, 12, 3.5),
  (1, 10, 0.75),
  (1, 5, 1),
  (1, 3, 5),
  (1, 6, 3),
  (1, 7, 4),
  (2, 17, 21),
  (2, 18, 8),
  (2, 19, 2);
