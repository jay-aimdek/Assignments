use demo;


select * from students;


begin transaction 

insert into students values(3,'dhairya',7);

rollback 

commit

