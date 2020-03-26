#!/bin/sh
echo Set up the database.
sqlite3 db_3S.db < create-tables.sql
sqlite3 db_3S.db < insert-data.sql
chmod 666 db_3S.db
chmod 777 ../database
