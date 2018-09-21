
-- Drop Database ------------------------------

DROP DATABASE IF EXISTS wamazon_db;


-- Create Database and Connect -----------------

CREATE DATABASE wamazon_db;
\c wamazon_db;


-- Inventory Table and Inserts -----------------

CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  item_name VARCHAR NOT NULL,
  item_price NUMERIC NOT NULL
);

INSERT INTO inventory (item_name, item_price) VALUES
  ('Television', 300.00),
  ('Laptop', 599.00),
  ('Smart Phone', 789.00),
  ('Tablet', 699.00),
  ('Mouse', 26.00),
  ('Keyboard', 31.00),
  ('Nintendo', 249.00);


-- Confirm Inserts -----------------------------

SELECT * FROM inventory;
