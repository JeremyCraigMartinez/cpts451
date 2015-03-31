CREATE TABLE Student (
	sID CHAR(8) PRIMARY KEY,
	sName VARCHAR(30),
	dept VARCHAR(10)
);
CREATE TABLE Faculty (
	fid CHAR(5) PRIMARY KEY,
	fName VARCHAR(30),
	fdept_id VARCHAR(10)
);
CREATE TABLE Course (
	courseNo VARCHAR(7) PRIMARY KEY,
	dept VARCHAR(10) NOT NULL,
	enroll_limit INTEGER,
	classroom VARCHAR(10),
	meets_at VARCHAR(25),
	fid CHAR(5) NOT NULL REFERENCES Faculty(fID)
);
CREATE TABLE Enroll (
	courseNo VARCHAR(7),
	sID CHAR(8),
	grade FLOAT NOT NULL,
	PRIMARY KEY (courseNo, sID),
	FOREIGN KEY (courseNo) REFERENCES Course(courseNo),
	FOREIGN KEY (sID) REFERENCES Student(sID)
);
CREATE TABLE Prereq (
	courseNo VARCHAR(7),
	preCourseNo VARCHAR(7),
	PRIMARY KEY (courseNo, preCourseNo),
	FOREIGN KEY (courseNo) REFERENCES Course(courseNo),
	FOREIGN KEY (preCourseNo) REFERENCES Course(courseNo)
);