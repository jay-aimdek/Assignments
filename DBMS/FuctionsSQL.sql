use demo;


--id is auto incremented
create table employees (id int primary key IDENTITY(1,1),FirstName varchar(20),LastName varchar(20),salary int);

insert into employees values('sheldon','cooper',1500),('leonard','hofstadter',1200),('raj','kuthrapali',2000),('howard','wolowits',1000);

select * from employees;

select avg(salary) as 'avg salary is' from employees;

select max(salary) as 'max salary is' from employees;

select min(salary) as 'min salary is' from employees;

select sum(salary) as 'sum of all salary is' from employees;

select upper(FirstName) from employees;

select lower(FirstName) from employees;

select TRIM('!@' from '!!@@---Jay---');

select RTRIM('jay  ');

select LTRIM('   jay');

select SQRT(salary) from employees ;
 
select CEILING(1.2);

select FLOOR(1.2);

select ABS(-1);