CREATE DATABASE x66ijdt1fgvvj992;
USE x66ijdt1fgvvj992;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
