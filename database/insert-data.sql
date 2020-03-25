/*
* This scipt adds a little set of entries to your database.
* Call it with
* sqlite3 db_3S.db < insert-data.sql
*
* Attention: This script does not check, if entries already exist or if the tables exist!
* Please run create-tables.sql first.
*/

INSERT INTO Item(id, name) VALUES
  (1, 'Milk'),
  (2, 'Egg'),
  (3, 'Falafel'),
  (4, 'Hummus'),
  (5, 'Butter'),
  (6, 'Slice of ham'),
  (7, 'Sclice of salami'),
  (8, 'Cherry jam'),
  (9, 'Peach jam'),
  (10, 'Raspberry jam'),
  (11, 'Strawberry jam'),
  (12, 'Yoghurt'),
  (13, 'Chocolate pudding'),
  (14, 'Vanilla pudding'),
  (15, 'Chicken breast'),
  (16, 'Ground meat'),
  (17, 'Sparkling water'),
  (18, 'Apple juice'),
  (19, 'Orange juice'),
  (20, 'Beer');

INSERT INTO Storage(id, name) VALUES (1, 'Fridge'), (2, 'Basement');

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

INSERT INTO Content(itemId, unitId, quantity, storageId) VALUES
  (1, 10, 0.8, 1),
  (2, 1, 7, 1),
  (12, 3, 3.5, 1),
  (10, 12, 0.75, 1),
  (5, 1, 2, 1),
  (3, 1, 15, 1),
  (6, 1, 7, 1),
  (7, 1, 4, 1),
  (17, 10, 21, 2),
  (18, 8, 3, 2),
  (20, 6, 14, 2),
  (16, 2, 3, 2);
