create database demo;
use demo;
create table students (id int primary key, name varchar(20));

alter table students add dept int;

insert into students values(1,'jay',7);
insert into students values(2,'shrey',7);

insert into students values(4,'shreyansh',6);
insert into students values(5,'ajit',11);
insert into students values(6,'kabir',9);
insert into students values(7,'hansraj',7);


create table placements 
(CompanyId int primary key,studentId int,name varchar(20),location varchar(20) ,FOREIGN KEY (studentId) REFERENCES students(id));

insert into placements values(11,1,'aimdek','ahmedabad');
insert into placements values(22,2,'aimedk','ahemdabad');
insert into placements values(32,4,'local','rajkot');
insert into placements values(41,5,'mnc','nyc');
insert into placements values(56,5,'local','rajkot');
update placements set location='remote' where CompanyId=41;

create table marks
(studentId int foreign key references students(id),score int);

insert into marks values(1,90);
insert into marks values(2,80);
insert into marks values(5,70);
insert into marks values(6,75);
insert into marks values(7,85);

select * from marks;

select * from placements;

--JOINS :-	

select s.name,p.name,m.score from students s left join placements p on s.id = p.studentId left join marks m on s.id = m.studentId;

select s.name,p.name,m.score from students s right join placements p on s.id = p.studentId right join marks m on s.id = m.studentId;

select s.name,p.name,m.score from students s full outer join placements p on s.id = p.studentId full outer join marks m on s.id = m.studentId;

select s.name,p.name,m.score from students s inner join placements p on s.id = p.studentId inner join marks m on s.id = m.studentId;



--PROCEDURES :-

--simple procedure
create procedure spGetAllStudents 
as
begin
select * from students;
end

exec spGetAllStudents;


--procedure with one input parameter
alter procedure spGetAllStudents 
@dept int 
as
begin
select * from students where dept = @dept;
end

declare @department int = 7;
exec spGetAllStudents @department;


--procedure with one input and one output parameter
alter procedure spGetAllStudents 
@dept int , @count int output
as
begin
select * from students where dept = @dept;
select @count = @@ROWCOUNT;
end

declare @count int , @department int =7;
exec spGetAllStudents @department,@count output;
select @count as 'Number of students'


--VIEW :- 
create view computerStudents as select * from students where dept = 7;

select * from computerStudents ;



