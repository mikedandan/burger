/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  burger_name varchar(45) NOT NULL,
  devoured boolean,
  PRIMARY KEY (item_id)
)

