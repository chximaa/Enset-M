-- EXERCICE 1
use tp4;
-- question 1
select * from emp
where sal>1000;

-- question2 
select * from emp e
join dept d on e.deptno=d.deptno
where d.dname= 'SALES';

-- question 3
select ename, sal + coalesce(comm,0) -- ou if null(comm,0)
from emp;

-- question3 methode2
select ename, sal, comm, sal+ifnull(comm,0) as salaire from emp;

-- question 4  methode 1
select ename, ifnull(cast(comm as char), 'sans commission') as 'Commission' from emp;

-- question 4 methode 2
select ename, ifnull(comm, 'sans commission') as 'Commission' from emp;

-- question 5
select ename, hiredate, dayname(hiredate) as 'nom du jour' from emp
order by weekday(hiredate);

-- question 6
select e.ename as 'employe 1', e.empno as 'num1', m.ename as 'employe 2' , m.empno as 'num2'
from emp e join emp m on e.mgr = m.empno;

-- question 7
select e.ename from emp e left join emp m on e.mrg=m.empno;

-- question 8 methode 1
select e.ename, e.job, d.dname, e.sal, s.grade 
from emp e join dept d on e.deptno=d.deptno
join salgrade s on e.sal between s.losal and s.hisal;

-- question 8 methode 2


-- question 9
select deptno from dept 
where deptno not in (select deptno from emp); -- ou bien except

-- question 10
select job from emp where deptno in (10, 20)
 except (select job, from emp where depto =10 intersect select job from emp where deptno=20);

-- question 11 
select ename from emp
where hiredate =(select min(hiredate) from emp);

-- question 12
select ename from emp
order by sal desc,ename asc
limit 3;

-- question 13
select * from dept
where depto not in (select deptno from emp where job='salesman');

-- question 14
select empno, ename from emp where sal>(select avg(sal) from emp) and deptno in (select deptno from emp where ename like '%t%');

-- question 15
select deptno, avg(sal) from emp
group by deptno
having avg(sal)>2000;

-- question 16
select deptno from emp
group by deptno
having max(sal)>3000;



-- EXERCICE 2

-- question 1
select deptno, count(*) as 'nombre des employes' from emp
group by deptno;

-- question 2
select deptno, avg(sal) from emp
group by deptno;

-- question 3
select deptno, count(*) from emp
where job='salesman'
group by deptno;

-- question 4 
select deptno, count(*) from emp
group by deptno
having count(*)>2;

-- question 5
select * from emp 
where comm is null or comm=0;

-- question 6 methode 1
select deptno from dept d left join emp e on d.deptnp=e.deptno
where e.deptno is null;

-- question 6 metode 2
select deptno from dept
where deptno not in (select deptno from emp);

-- question 7
select * from emp e1
where exists (select 1 from emp e2 where e1.sal=e2.sal and e1.deptno <> e2.deptno);
 
-- question 8
select ename, e.empno from emp e join salgrade s on e.sal between s.losal and s.hisal 
where s.grade=2;

-- question 9
select empno 
from emp e join emp m on e.mrg= m.empno 
join salgrade s1 on e.sal between s1.losal and s1.hisal
join salgrade s2 on m.sal between s2.losal and s2.hisal
where s1.grade>s2.grade;

-- question 10
select ename, empno from emp e1
where sal=(select max(sal) from emp e2 where e1.deptno=e2.deptno);

-- question 11
select ename from emp e
join emp m on e.mgr=m.empno
join dept d1 on e.deptno=d1.deptno
join dept d2 on m.deptno=d2.deptno
where d1.loc <> d2.loc; -- ou bien d1.loc != d2.loc;

select ename from emp;

-- question 12
select ename from emp
group by ename
having count(*)>1;

-- question 13
select d.dname, count(*), avg(e.sal) from emp e 
join dept d on e.deptno=d.deptno
where e.comm is not null or e.comm>0
group by dname;

-- question 14
select ename, deptno, job from emp 
where deptno in (select deptno from dept where loc='dallas');

-- question 15
select ename, sal from emp
where mgr in (select empno from emp where ename='King');

-- question 16
select e.ename, d.dname, e.sal from emp e
join dept d on e.deptno=d.deptno
where (sal, coalesce(comm,0)) in (select sal, coalesce(comm,0) from emp e join dept d on  e.deptno=d.deptno where loc='dallas');

-- question 17
select ename, job, sal from emp
where sal > all (select sal from emp where job='CLERK');

-- question 18
select ename, sal from emp
where sal < any (select sal from emp where job='MANGER');

-- question 19
select ename, sal from emp
where deptno=30 and sal > any (select sal from emp where deptno =20);



































