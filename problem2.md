##problem2

__a__.  

    CREATE VIEW [GPA] AS
    SELECT AVERAGE(e.grade)
    FROM (Enroll e, Student s)
    WHERE e.sID=s.sID
    GROUP BY s.sID

__b__.