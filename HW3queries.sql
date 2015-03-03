########### 1.
SELECT e.courseNo,s.sName,c.classroom
FROM (Student s, Enroll e, Course c)
WHERE (e.courseNo REGEXP '4[0-9][0-9]$')
AND e.sID=s.sID
AND e.courseNo=c.courseNo;

########### 2.
SELECT s.sName
FROM (Student s, Enroll e, Prereq p)
WHERE p.CourseNo='CptS223'
AND e.courseNo=p.courseNo
AND s.sID=e.sID
AND e.grade >= 2
GROUP BY s.sName;

########### 3.
SELECT c.courseNo,enrollment.num 
FROM (Course c) 
INNER JOIN (
	SELECT e.courseNo,COUNT(e.courseNo) num
	FROM (Enroll e)
	GROUP BY e.courseNo
) enrollment
ON enrollment.num<10 
AND enrollment.courseNo=c.courseNo
WHERE c.classroom='Sloan7';

########### 4.
SELECT s.sName,s.sID,s.dept 
FROM (Student s) 
WHERE s.sID NOT IN (SELECT sID FROM Enroll);

###########	5.
SELECT s.sName,s.dept,e.grade 
FROM (Student s) 
INNER JOIN ( 
	SELECT sID, MIN(grade) grade, courseNo 
	FROM Enroll 
	GROUP BY sID ) e 
ON s.sID = e.sID 
AND e.courseNo='CptS223';

########### 6 
SELECT c.courseNo 
FROM (Course c)
INNER JOIN (
	SELECT e.courseNo,COUNT(e.courseNo) num
	FROM (Enroll e)
	GROUP BY e.courseNo
) enrollment
ON enrollment.courseNo=c.courseNo
AND enrollment.num>c.enroll_limit;

########### 7.
SELECT e_alias.courseNo,c.enroll_limit,e_alias.min_grade,e_alias.max_grade 
FROM (Course c) 
INNER JOIN (
	SELECT e.courseNo,MIN(e.grade) min_grade ,MAX(e.grade) max_grade 
	FROM (Enroll e) 
	GROUP BY e.courseNo) e_alias 
ON e_alias.courseNo=c.courseNo AND (e_alias.min_grade)<(e_alias.max_grade-1);

########## 8.
SELECT e.courseNo,s.sName,e.grade,IF(e.grade=e_min.min_grade,'min','max')
FROM (Enroll e, Student s)
INNER JOIN (
	SELECT e1.courseNo,MIN(e1.grade)min_grade 
	FROM (Enroll e1)
	WHERE (e1.courseNo REGEXP '^CHE')
	GROUP BY e1.courseNo
) e_min
ON e_min.courseNo=e.courseNo
INNER JOIN (
	SELECT e2.courseNo,MAX(e2.grade)max_grade 
	FROM (Enroll e2)
	WHERE (e2.courseNo REGEXP '^CHE')
	GROUP BY e2.courseNo
) e_max
ON e_max.courseNo=e.courseNo
WHERE s.sID=e.sID
AND (e.grade=e_min.min_grade OR e.grade=e_max.max_grade)

########## 9.
SELECT DISTINCT s.sName,s.sID
FROM (Student s)
INNER JOIN (
SELECT s_CLASS.sID
FROM (Student s_CLASS, Enroll e_CLASS)
WHERE s_CLASS.sID=e_CLASS.sID
AND ( 
(e_CLASS.courseNo REGEXP '^MATH')
OR (e_CLASS.courseNo REGEXP '^EE')
OR (e_CLASS.courseNo REGEXP '^CptS')
)
) results_CLASS
ON results_CLASS.sID=s.sID
INNER JOIN (
	SELECT s_DEPT.sID
	FROM (Student s_DEPT)
	WHERE s_DEPT.dept IS NULL
) results_DEPT
ON results_DEPT.sID=s.sID
WHERE results_CLASS.sID=results_DEPT.sID

########## 10.
SELECT DISTINCT s.sID
FROM (Student s)

# Get all students enrolled in a class
INNER JOIN (
	SELECT sID
	FROM (Student) 
	WHERE sID IN (SELECT sID FROM Enroll)
) ids
ON s.sID=ids.sID

# Get course numbers for respective ID's from previous INNER JOIN
INNER JOIN (
	SELECT courseNo,sID
	FROM (Enroll)
) s_alias
ON s_alias.sID=s.sID

# Get prereq for respective courses from previous INNER JOIN
INNER JOIN (
	SELECT preCourseNo,courseNo
	FROM (Prereq)
) pre_alias
ON pre_alias.courseNo=s_alias.courseNo

# Get respective ID's, courses (prereq's), and grades
INNER JOIN (
	SELECT grade,sID,courseNo
	FROM (Enroll)
) e_grades
ON s_alias.sID=e_grades.sID AND pre_alias.preCourseNo=e_grades.courseNo
WHERE e_grades.grade < 2
