create database demo;
use demo;
create table students (id int primary key, name varchar(20));

alter table students add dept int;

insert into students values(1,'jay',7);
insert into students values(2,'shrey',7);
insert into students values(3,'dhairya',6);
insert into students values(4,'shreyansh',6);
insert into students values(5,'ajit',11);
insert into students values(6,'kabir',9);

select * from students;

select * from students where dept = 7;

select * from students where name like 'j%';

select count(dept)  from students group by dept;

select distinct dept from students;

select * from students order by dept;

select * from students where dept = 7 or id=4;

update students set name = 'bakhai' where name = 'dhairya';