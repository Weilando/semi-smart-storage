#!/bin/sh
echo Delete all tables.
sqlite3 db_3S.db < drop-tables.sql
echo
sh setup-database.sh
