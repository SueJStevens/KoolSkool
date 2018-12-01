-- used to find a course for specific personnel
use koolskool_db;
select * from courses c
INNER JOIN teacher_course_map m
ON c.id = m.course_id
-- use substitue for direct ID for teacher 
where m.personnel_id = 3;

-- table of users should have ID for personnel - 


-- select statement for table population for each indiv. course
Select * from students s
INNER JOIN student_course_map m
ON s.id = m.student_id
Where m.course_id = 2;