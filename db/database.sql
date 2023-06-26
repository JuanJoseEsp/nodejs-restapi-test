CREATE DATABASE IF NOT EXISTS companydb;

use companydb;

CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO empleados VALUES 
(1, 'Juan', 1000),
(2, 'Henry', 3000),
(3, 'Max', 5000),
(4, 'Luis', 1000);

