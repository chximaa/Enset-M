-- EXERCICE 1 (fonction de manipularions de caracteres)
select * from employe;

use exercice1;
-- question 1
select id, nom, prenom from etudiant 
where prenom = 'Ahmed'; -- sql n'est pas sensible a la case;

-- question 2
select id, nom, prenom from etudiant
where lower(prenom='ahmed');

-- question 3
select concat(nom, ' ', prenom) as 'Nom de l’étudiant' from etudiant;

-- question 4
select id, length(nom) as 'Taille du nom' from etudiant;

-- question 5
select id, nom, prenom from etudiant
where prenom like '%a%';


-- EXERCICE 2 (fonctions numeriques)

-- question 1
select id, salaire % 5000 as 'Rem1', mod(salaire,5000) as'Rem2' from employe
where fonction = 'ingénieur';

-- question 2 methode 1
select * from employe
where date_embauche < '1980-02-01';

-- question 2 methode 1
select * from employe
where date_embauche < str_to_date('01-02-1980','%d-%m-%Y');


-- EXERCICE 3 (fonction de date)

-- question 1 methode 1
select nom, prenom, round(datediff(curdate(), date_embauche) /7) as 'Les semaines travailler' from employe;
-- question 1 methode 2
select nom, prenom, timestampdiff(week, date_embauche, curdate()) as 'Les semaines travailler' from employe;

-- question 2
select nom, timestampdiff(month, date_embauche, curdate()) from employe;
-- sysdate() == cudate() == current_date

-- question 3
-- devoir;
-- select nom, curdate() as 'date du jour' from employe
-- where curdate() > date_embauche and dayofweek(CURDATE()) = 6;
-- select (4-weekday(current_date))%7;

select date_add(date_embauche, interval mod((4-weekday(date_embauche)),7) day) as 'Le prochain vendredi' from employe;

-- question 4
select nom, date_add(date_embauche, interval 6 month);

-- question 5
select * from employe
where timestampdiff(month, curdate(), date_embauche);

-- question 6
select last_day(date_embauche);



-- EXERCICE 4 (fonction de conversion)

-- question 1
select date_format(date_embauche, '%w %D %M %Y') from employe;

-- question 2
select concat(format(salaire,2), '$') from employe;

-- question 3
select nom, date_embauche from employe 
where date_embauche = str_to_date('24 mai 2000', '%d-%M-%Y');


-- EXERCICE 5 (imbrication de fonctions)

-- question 1
select upper(concat(left(nom, 8)), '_MAR') from employe ;

-- question 2
select coalesce(fonction , 'ouvrier');
select coalesce(adress , 'sdf');
select coalesce(datesc , '01-jan-2011');


-- EXERCICE  6

-- question 1
select nom, salaire * 12 as salaire_annuel
from employes;

-- correction du prof
select nom, saliare*12 +coalesce(commission,0) from employe;

-- question 2
select nom, salaire + IFNULL(commission, 0) as revenu_mensuel
from employes;

-- correction du prof
select salair+coalesce(commission,0) from employe;

-- EXERCICE 7
use exercice2;

-- question 1
select * from etudiant
order by dateNaissance desc; -- desc donne l'odre decroissante

-- question 2 methode 1
select * from etudiant
where niveau='M1' or niveau = 'M2';

-- question 2 methode 2
select * from etudiant
where niveau in ('M1' , 'M2'); 

-- question 3
select matricule from examen 
where codes='002';

-- question 4 methode 1
select distinct matricule from examen
where codes in ('001','002');

-- question 4 methode 2
select distinct matricule from examen
where codes='001' or codes='002';

-- question 4 methode 3
select matricule from examen where codes='001'
union
select matricule from examen where codes='002';

-- question 5
select matricule, codes, note as 'Note/20', note*2 as 'Note/40' from examen
order by matricule, codes;

-- question 6
select avg(note) from examen
where codes = '002';
-- toujours les fonctins d'agregation sont au debut directement apres select, si on a le cas ou on a un champ avant la fonction il est necessaire d'ajouter group by (champ qui se trouve avant f.agre) a la fin

-- question 7 methode 1
select count(*) from examen
where matricule = 'e1';

-- question 7 methode 2 (ce n'est pas la reponse exacte du question)
select matricule, count(*) as 'nombre examen' from examen
group by matricule;

-- question 8
select count(*) from examen
where codes = '002';

-- question 9 methode 1
select matricule, avg(note) from examen
where matricule = 'e1';

-- question 9 methode 2
select matricule, avg(note) from examen
group by matricule;

-- question 10
select matricule, count(*) from examen
group by matricule;

-- question 11
select matricule, avg(note) as 'moyenne' from examen
group by matricule;

-- question 12 methode 1 (AVAMT LE REGROUPEMENT "WHERE", APRES LE REGROUPEMENT "HAVING")
select matricule, avg(note) as 'moyenne' from examen
group by matricule 
having avg(note)>=15;

-- question 12 methode 2
select matricule, avg(note) as moyenne from examen
group by matricule 
having moyenne>=15;

-- question 13
select codes, avg(note) from examen
group by codes;



-- EXERCICE 8
use exercice3; 
-- question 1
select * from habitation
where (typeh='T1' and ville='Tanger') or (typeh='T2' and ville='Marrakech');

-- question 2
select typeh, min(LoyerM) as 'min prix', max(LoyerM) AS 'max prix', avg(LoyerM) as 'prix moyenne' from Habitation
group by typeh;

-- question 3
select ville, typeh, min(LoyerM) as 'min prix', max(LoyerM) AS 'max prix', avg(LoyerM) as 'prix moyenne' from Habitation
where ville in ('Tanger', 'Marrakech')
group by typeh, ville;

-- question 4
select h.codeh, h.typeh, h.ville, c.nom, c.profession from habitation h 
join location l on h.codeh=l.codeh
join clients c on l.coded=c.coded;

-- question 5
select h.codeh, h.typeh, h.ville, c.nom, c.profession from habitation h 
left join location l on h.codeh=l.codeh
join clients c on l.coded=c.coded;

-- question 6
select coded from habitation h 
join location l on h.codeh=l.codeh
join clients c on l.clients=c.coded
where h.ville=c.ville_resid;

-- question 7
select h.typeh, count(h.codeh) as nombre_locations from location l
join habitation h on l.code_habitation = h.codeh
group by h.typeh
having count(h.typeh) >= 3;

-- question 8 methode de prof
select h.codeh, sum(nombMois) from location
group by codeh;

-- question 8 methode de chat gpt
SELECT h.codeh, SUM(TIMESTAMPDIFF(MONTH, l.date_debut, l.date_fin)) AS total_mois_loues
FROM habitation h
JOIN location l ON h.code = l.code_habitation
GROUP BY h.codeh;

-- question 9
select l.coded, sum(l.nombMois*h.LoyerM) from location 
join habitation h on l.codeh=h.codeh
group by l.coded;

-- question 10
select c.coded from clients c
left join location l on c.coded=l.coded
where l.coded is null;

-- question 11 methode 1
select l.coded from location l
join habitation h on l.codeh=h.codeh
where h.typeh in ('T1', 'T2')
group by coded
having count(distinct typeh)=2;

-- question 11 methode 2
select c.coded, c.nom from clients c join location l on c.coded=l.coded
join habitation h on l.codeh=h.codeh
where h.typeh='T1' and c.coded in (select l.coded from location l join habitation h on l.codeh=h.codeh where h.typeh='T2');

-- question 11 methode 3
select c.coded, c.nom from clients c 
join location l on c.coded=l.coded
join habitation h on l.codeh=h.codeh
join location l2 on c.coded=l2.coded
join habitation h2 on l2.codeh=h2.codeh
where h.typeh='T1' and h2.typeh='T2';







use exercice3;