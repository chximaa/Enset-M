CREATE DATABASE gestion_entreprise;
USE gestion_entreprise;
CREATE TABLE employe (
    nemp INT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    username VARCHAR(50) UNIQUE,
    salaire DECIMAL(10,2),
    prime DECIMAL(10,2),
    daterecrut DATE,
    codedep INT
);
CREATE TABLE departement (
    codedep INT PRIMARY KEY,
    nomdep VARCHAR(50),
    lieu VARCHAR(50),
    responsable INT,
    FOREIGN KEY (responsable) REFERENCES employe(nemp)
);

CREATE TABLE grade (
    grade INT PRIMARY KEY,
    salmin DECIMAL(10 , 2 ),
    salmax DECIMAL(10 , 2 ),
   constraint chk_sal CHECK (salmin < salmax)
    
);

INSERT INTO employe VALUES 
(1, 'Benali', 'Ahmed', 'a.benali', 25000.50, NULL, '2010-06-15', 1),
(2, 'Rahmani', 'Nadia', 'n.rahmani', 32000.75, NULL, '2012-09-23', 2),
(3, 'El Amrani', 'Sami', 's.elamrani', 41000.00, NULL, '2015-04-10', 3);

INSERT INTO departement VALUES 
(1, 'Ressources Humaines', 'Casablanca', 1),
(2, 'Informatique', 'Rabat', 2),
(3, 'Finance', 'Casablanca', 3);

INSERT INTO grade VALUES 
(1, 7000.00, 12000.00),
(2, 12001.00, 14000.00),
(3, 14001.00, 20000.00);