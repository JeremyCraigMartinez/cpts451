##problem1

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

__d__. Constraint does not already exist

    CREATE ASSERTION faculty_num_classes
    CHECK ((SELECT COUNT(*) FROM (Faculty f) WHERE EXISTS (SELECT fid FROM Course)) > 0 AND 
           (SELECT COUNT(*) FROM (Faculty f) WHERE EXISTS (SELECT fid FROM Course)) < 4 )

__e__. Constraint does not already exist

    CREATE TABLE Course (
	    courseNo VARCHAR(7) PRIMARY KEY,
	    dept VARCHAR(10) NOT NULL,
	    enroll_limit INTEGER,
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
