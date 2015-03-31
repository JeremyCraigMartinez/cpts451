##problem2

__a__.  

    CREATE VIEW hw4.gpa AS
    SELECT AVERAGE(e.grade)
    FROM (Enroll e, Student s)
    WHERE e.sID=s.sID
    GROUP BY s.sID;

__b__. Yes, it is updatable. Views in MySQL are updated as the columns are updated in the database. Since this view derives it's query from a SELECT statement pertaining to the database, they are updated. However, if there were embedded columns within the view, those would not be updatable.

__c__.  

    CREATE VIEW hw4.course_info AS
    SELECT (courseNo, classroom, meets_at)
    FROM (Course);

__d__. Yes, it is updatable. Views in MySQL are updated as the columns are updated in the database. Since this view derives it's query from a SELECT statement pertaining to the database, they are updated. However, if there were embedded columns within the view, those would not be updatable.