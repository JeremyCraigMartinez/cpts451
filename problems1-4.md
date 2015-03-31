##Problem1

__a__. Constraint does not already exist.  

    CREATE TABLE Course (
        courseNo VARCHAR(7) PRIMARY KEY,
        dept VARCHAR(10) NOT NULL,
        enroll_limit INTEGER CHECK (enroll_limit>5),
        classroom VARCHAR(10),
        meets_at VARCHAR(25),
        fid CHAR(5) NOT NULL REFERENCES Faculty(fID)
    );

__b__. Constraint already exists
__c__. Constraint does not already exist

    DROP TRIGGER IF EXISTS `eecs_limit`;
    delimiter //
    CREATE TRIGGER `eecs_limit`
    BEFORE INSERT ON `Faculty`
    FOR EACH ROW
    BEGIN
	    DECLARE dept VARCHAR(10);
	    set dept = (SELECT COUNT(*) FROM Faculty WHERE fdept_id=new.fdept_id AND fdept_id="EECS");
	    IF (dept=15) THEN
		    signal sqlstate '45000';
	    END IF;
    END
    //
    delimiter ;

__d__. Constraint does not already exist

    CREATE ASSERTION faculty_num_classes
    CHECK ((SELECT COUNT(*) FROM (Faculty f) WHERE EXISTS (SELECT fid FROM Course)) > 0 AND 
           (SELECT COUNT(*) FROM (Faculty f) WHERE EXISTS (SELECT fid FROM Course)) < 4 )

__e__. Constraint does not already exist

    CREATE TABLE Course (
	    courseNo VARCHAR(7) PRIMARY KEY,
	    dept VARCHAR(10) NOT NULL,
	    enroll_limit INTEGER CHECK (enroll_limit>5),
	    classroom VARCHAR(10),
	    meets_at VARCHAR(25),
	    fid CHAR(5) NOT NULL REFERENCES Faculty(fID),
	    UNIQUE KEY `time_and_place` (`classroom`,`meets_at`)
    );

OR

    ALTER TABLE `Course` ADD UNIQUE `time_and_place`(`classroom`, `meets_at`);

__f__. Constraint does not already exist

    DROP TRIGGER IF EXISTS `new_enrollment_limit`;
    delimiter //
    CREATE TRIGGER `new_enrollment_limit`
    BEFORE UPDATE ON `Course`
    FOR EACH ROW
    BEGIN
	    IF (new.enroll_limit>30) THEN
		    signal sqlstate '45000';
	    END IF;
    END
    //
    delimiter ;


##Problem2

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

##Problem 3

__1__. R(A,B,C,D,E,F) with FD's:  

    BF -> E
    BE -> C
    C  -> BF  X
    BD -> A

> a. NO
> b. Line 3 (```C  -> BF```) is a trivial FD. Not in BCNF

__2__. R(K,M,N,O,P) with FD's:  

    P  -> K
    K  -> NO  X
    N  -> P   X
    O  -> MP
    M  -> N   X

> a. NO
> b. Line 2, 3, and 5 (```K -> NO```, ```N -> P```, and ```M -> N```) are trivial FD's. Not in BCNF.

##Problem 4

__a__. Keys: ```{B,C}```, ```{D}```, ```{A}```
__b__. R(A,B,C,D) and FD's:  

    BC -> D
    BC -> A
    D  -> B   X  Not trivial
    A  -> C   X  Not trivial

__c__. The following tables explain the decomposotion:

> ```D -> A```

 D   | A      
-----|-------
 KEY | VALUE  

> ```D -> B```

 D   | B     
-----|-------
 KEY | VALUE  

> ```A -> C```

 D   | C     
-----|-------
 KEY | VALUE  

###Things removed:
- ```BC -> D```
- ```BC -> A```

__d__. Yes, it is