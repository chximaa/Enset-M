-- question 1
create database gestion_vols;
use gestion_vols;

-- question 2
create table pilotes (
    numpilote int primary key,
    nom varchar(50),
    ville varchar(50)
);

create table avions (
    numavion int primary key,
    nomavion varchar(50),
    capacite int check (capacite > 0),
    localisation varchar(50)
);

create table vols (
    numvol int primary key,
    numpilote int,
    numavion int,
    ville_depart varchar(50),
    ville_arrivee varchar(50),
    date_vol date,
    foreign key (numpilote) references pilotes(numpilote),
    foreign key (numavion) references avions(numavion)
);

-- question 3
insert into pilotes values
(1, 'Dupont', 'Paris'),
(2, 'Leclerc', 'Lyon'),
(3, 'Martin', 'Toulouse');

insert into avions values
(101, 'Boeing 747', 400, 'Paris'),
(102, 'Airbus A320', 180, 'Toulouse'),
(103, 'Boeing 737', 220, 'Lyon');

insert into vols values
(1, 1, 101, 'Paris', 'New York', '2024-06-10'),
(2, 2, 102, 'Lyon', 'Madrid', '2024-06-12'),
(3, 3, 103, 'Toulouse', 'Berlin', '2024-06-15');

-- question 4
update avions set capacite = 280 where numavion = 105; -- l'avion n 105 n'existe pas
update avions set capacite = 280 where numavion = 103; 

select * from avions;
select * from vols;

-- question 5
alter table pilotes add column experience int;

-- question 6
alter table pilotes drop column experience;

-- question 7 methode 1
alter table avions rename column localisation to base_aerienne;
-- question 7 methode 2
alter table avions change localisation base_aerienne varchar(50);

-- question 8
update pilotes set ville = 'Toulouse' where numpilote = 2;

-- question 9
delete from vols where numvol = 1; -- error foreign key

-- question 10
delete from vols where numpilote = 3;

-- question 11
drop table vols;
