-- question 1
CREATE DATABASE gestion_entreprise;
USE gestion_entreprise;

-- question 2 
CREATE TABLE employe (
    nemp INT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    username VARCHAR(50),
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
    -- question 2 methode 1
	constraint chk_sal CHECK (salmin < salmax)
    
);
-- queation 2 methode 2: constraint check salaire
alter table grade add constraint ch_salaire check (salmin < salmax);
alter table grade add check (salmin < salmax);

-- question 3
desc employe;
desc departement;
desc grade;
-- autre methode: 
describe employe;


-- question 4
alter table employe add constraint unique_username unique (username);
alter table employe add unique (username);

-- question 5
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


-- afficher les donnees saisie dans le tableau
select * from employe;


-- question 6
update employe set salaire = 32500 where salaire < 30000;

-- question 7 methode 1:
alter table employe add column email varchar(100) not null;
-- question 7 methode 2: 
alter table employe add email varchar(100) not null;
-- pour suppreimer le meme column
alter table employe drop column email;

-- question 8 methode 1:
update employe set salaire = salaire*1.1 where nemp=1;
-- question 8 methode 2:
update employe set salaire = salaire + salaire*0.1 where nemp=1;


-- question 9 methode 1
alter table employe add constraint nm_codedep foreign key (codedep) references departement(codedep);
-- question 9 methode 2
alter table employe add foreign key (codedep) references departement(codedep);

-- question 10 / 11
insert into employe values (7,'bouchemal', 'fouad','f.bouchem', 1);
insert into employe values (4, 'Benali', 'Ahmed', 'a.ersgdx', 25000.50, NULL, '2010-06-15', 20);

-- essay
select * from employe;
select * from departement;


-- question 12 methode 1
alter table employe add constraint check_salaire check (salaire>0);
-- question 12 methode 2
alter table employe add check (salaire>0);

-- question 13

-- question 14
alter table employe add anciennete int;
update employe set anciennete = (year(current_date())- year(daterecrut));

-- question 15
update employe set codedep=1 where nemp=3;
select * from employe;

-- question 16
delete from departement where codedep=3; -- doit afficher un erreur car codedep est un cle etrangere, et pour le supprimer, il faut d'abord faire : set nm_codedep=0;
select * from departement;

-- question 17
alter table employe drop column prime;

-- question 18
delete from employe;

-- question 19
drop table grade;












