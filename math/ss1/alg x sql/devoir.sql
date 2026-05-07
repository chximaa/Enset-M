-- Exercice 1
create database exercice1;
use exercice1;

-- question1
create table Etudiant (
	id int primary key,
    nom varchar(50),
    prenom varchar(50),
    age int,
    adresse varchar(100)
);

-- question 2
insert into Etudiant values
	(1, 'Ben Ali', 'Ahmed', 22, 'Tunis'),
	(2, 'Trabelsi', 'Ali', 24, 'Sfax'),
	(3, 'Mejri', 'Amal', 21, 'Sousse'),
	(4, 'Salah', 'ahmed', 23, 'Nabeul'),
	(5, 'Hammami', 'Sami', 25, 'Gabes'),
	(6, 'Khaled', 'Amina', 20, 'Bizerte'),
	(7, 'Bouraoui', 'Mehdi', 26, 'Monastir'),
	(8, 'Gharbi', 'Sarra', 22, 'Tunis'),
	(9, 'Mokni', 'Nour', 23, 'Mahdia'),
	(10, 'Jouini', 'Yassine', 24, 'Djerba');


-- question3
create table Employe(
	id int primary key,
    nom varchar(50),
    prenom varchar(50),
    salaire decimal(10,2),
    adresse varchar(100),
    fonction varchar(50),
    date_embauche date,
    commission decimal(10,2)
);

-- question 4
insert into Employe values
	(1, 'Ben Salah', 'Karim', 6000.00, 'Tunis', 'ingénieur', '1979-06-15', NULL),
	(2, 'Jlassi', 'Mourad', 7000.00, 'Sfax', 'technicien', '1985-09-10', 500.00),
	(3, 'Brahmi', 'Leila', 5000.00, 'Sousse', 'secrétaire', '2000-05-24', NULL),
	(4, 'Kacem', 'Nadia', 5500.00, 'Nabeul', 'ingénieur', '1982-03-20', 300.00),
	(5, 'Zidi', 'Omar', 4800.00, 'Gabes', 'technicien', '1990-07-30', NULL),
	(6, 'Mahjoub', 'Salma', 6200.00, 'Bizerte', 'ingénieur', '1995-05-14', 400.00),
	(7, 'Rezgui', 'Fares', 5300.00, 'Monastir', 'technicien', '1998-11-02', NULL),
	(8, 'Ben Aissa', 'Kais', 7500.00, 'Tunis', 'ingénieur', '2003-06-22', 600.00),
	(9, 'Chouikh', 'Rania', 4700.00, 'Mahdia', 'secrétaire', '2005-09-19', NULL),
	(10, 'Mansouri', 'Samir', 5100.00, 'Djerba', 'technicien', '2010-04-10', 200.00);


-- Exercice 2
create database exercice2;
use exercice2;

-- question 1
create table Etudiant(
	matricule varchar(50) primary key,
    nom varchar(50),
    prenom varchar(50),
    dateNaissance date,
    niveau varchar(50)
);

-- question2
insert into Etudiant values
	('e1', 'Dupont', 'Jean', '2000-05-15', 'M1'),
	('e2', 'Martin', 'Sophie', '1999-08-21', 'M2'),
	('e3', 'Durand', 'Paul', '2001-02-10', 'M1'),
	('e4', 'Bernard', 'Elise', '2002-11-03', 'M2'),
	('e5', 'Moreau', 'Luc', '2000-07-19', 'M1'),
	('e6', 'Lemoine', 'Claire', '1998-09-30', 'M2'),
	('e7', 'Petit', 'Marc', '2003-04-12', 'M1'),
	('e8', 'Giraud', 'Alice', '2001-06-25', 'M2');

-- question 3
create table Cours(
	codes varchar(50) primary key,
    nom_cours varchar(50),
    enseignant varchar(50)
);

-- question 4
insert into Cours values
	('001', 'Mathématiques', 'Mr. Leroy'),
	('002', 'Physique', 'Mme. Morel'),
	('003', 'Informatique', 'Mr. Dubois'),
	('004', 'Chimie', 'Mme. Lefevre');

-- question 5
create table Examen(
	matricule varchar(50), 
    foreign key (matricule) references Etudiant(matricule),
    codes varchar(50),
    foreign key (codes) references Cours(codes),
    note float
);

-- question 6
insert into Examen values
	('e1', '001', 14.5),
	('e1', '002', 16.0),
	('e2', '002', 12.0),
	('e3', '001', 10.5),
	('e4', '002', 18.0),
	('e5', '003', 15.5),
	('e6', '004', 13.0),
	('e7', '001', 9.0),
	('e8', '003', 17.0),
	('e1', '003', 14.0),
	('e2', '004', 11.5),
	('e3', '002', 13.5),
	('e4', '001', 16.0),
	('e5', '002', 14.8),
	('e6', '001', 12.5),
	('e7', '004', 10.0),
	('e8', '002', 19.0);

select * from etudiant;
select * from examen;
select * from cours;


-- Exercice 3
create database exercice3;
use exercice3;

-- question 1
create table CLIENTS (
	coded varchar(50) primary key ,
    nom varchar(50),
    ville_resid varchar(50),
    profession varchar(50)
);

-- question 2
insert into CLIENTS values
	('C1', 'Ali', 'Tanger', 'Ingénieur'),
	('C2', 'Sofia', 'Marrakech', 'Médecin'),
	('C3', 'Karim', 'Tanger', 'Professeur'),
	('C4', 'Leila', 'Casablanca', 'Avocate'),
	('C5', 'Hassan', 'Tanger', 'Comptable'),
	('C6', 'Yasmine', 'Marrakech', 'Architecte'),
	('C7', 'Omar', 'Casablanca', 'Entrepreneur'),
	('C8', 'Nadia', 'Rabat', 'Journaliste'),
	('C9', 'Mohamed', 'Tanger', 'Analyste'),
	('C10', 'Fatima', 'Marrakech', 'Pharmacienne');

-- question 3
create table HABITATION (
	codeh varchar(50) primary key,
    typeh varchar(50),
    adress varchar(50),
    ville varchar(50),
    LoyerM float
);

-- question 4
insert into HABITATION values
	('H1', 'T1', 'Rue 1', 'Tanger', 3000),
	('H2', 'T2', 'Rue 2', 'Marrakech', 4000),
	('H3', 'T1', 'Rue 3', 'Tanger', 3200),
	('H4', 'T2', 'Rue 4', 'Marrakech', 4500),
	('H5', 'T3', 'Rue 5', 'Casablanca', 5000),
	('H6', 'T1', 'Rue 6', 'Tanger', 2800),
	('H7', 'T2', 'Rue 7', 'Marrakech', 4200),
	('H8', 'T3', 'Rue 8', 'Rabat', 5500),
	('H9', 'T1', 'Rue 9', 'Tanger', 3100),
	('H10', 'T2', 'Rue 10', 'Marrakech', 4600)	;

-- question 5
create table LOCATION (
	id_location int primary key,
    date_location date,
    codeh varchar(50),
    foreign key (codeh) references HABITATION(codeh),
    coded varchar(50),
    foreign key (coded) references CLIENTS (coded),
    nombMois int
);

-- question 6
insert into LOCATION values
	(1, '2024-01-15', 'H1', 'C1', 3),
	(2, '2024-02-10', 'H2', 'C2', 2),
	(3, '2024-03-05', 'H3', 'C3', 4),
	(4, '2024-04-20', 'H4', 'C1', 1),
	(5, '2024-05-11', 'H6', 'C5', 5),
	(6, '2024-06-15', 'H7', 'C6', 2),
	(7, '2024-07-18', 'H8', 'C7', 6),
	(8, '2024-08-20', 'H9', 'C8', 3),
	(9, '2024-09-10', 'H10', 'C9', 4),
	(10, '2024-10-05', 'H2', 'C10', 3),
	(11, '2024-11-08', 'H1', 'C3', 2),
	(12, '2024-12-12', 'H4', 'C2', 4);
	
	

select * from habitation