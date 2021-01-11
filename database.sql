--\c into todo_database
CREATE DATABASE todo_database;  
-- that would enable me to define schema 
CREATE TABLE todo(
 id SERIAL PRIMARY KEY,
 description VARCHAR(255)
);   
-- next is to connect with pg to database so we can write to the database
