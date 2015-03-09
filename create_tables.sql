CREATE TABLE Business (
	business_id VARCHAR(50) NOT NULL PRIMARY KEY,
	review_count INT NOT NULL,
	name VARCHAR(100) NOT NULL,
	state VARCHAR(50) NOT NULL,
	fulladdress VARCHAR(200),
	longitude INT NOT NULL,
	latitude INT NOT NULL,
	city VARCHAR (50) NOT NULL,
	open BOOLEAN NULL,
	type	VARCHAR(50) NOT NULL
);

CREATE TABLE Days_of_Week (
	h_bid VARCHAR(50) NOT NULL,
	day VARCHAR(10) NOT NULL,
	open VARCHAR(10) NULL,
	close VARCHAR(10) NULL,

	FOREIGN KEY (h_bid) REFERENCES Business(business_id),
	PRIMARY KEY (h_bid,day)
);

CREATE TABLE Category (
	c_bid VARCHAR(50) NOT NULL,
	name	VARCHAR(50),

	FOREIGN KEY (c_bid) REFERENCES Business(business_id),
	PRIMARY KEY (c_bid,name)
);

CREATE TABLE Attributes (
	attr_id INT NOT NULL AUTO_INCREMENT,
	a_bid VARCHAR(50) NULL,
	attr_key VARCHAR(50) NOT NULL,
	is_parent BOOLEAN  DEFAULT FALSE,  /* false if has no children, true otherwise*/

	FOREIGN KEY (a_bid) REFERENCES Business(business_id),
	PRIMARY KEY (attr_id)
);
 
CREATE TABLE child_attributes (
	parent_attr_id INT NOT NULL,
	child_attr_id INT NOT NULL,

	PRIMARY KEY (parent_attr_id, child_attr_id),
	FOREIGN KEY (parent_attr_id) REFERENCES Attributes(attr_id),
	FOREIGN KEY (child_attr_id) REFERENCES Attributes(attr_id)
);

CREATE TABLE Attributes_Int_Value (
	int_attr_id INT NOT NULL PRIMARY KEY,
	value INT NOT NULL,

	FOREIGN KEY (int_attr_id) REFERENCES Attributes(attr_id)
);

ALTER TABLE Attributes_Int_Value ADD INDEX (value);

CREATE TABLE Attributes_VarChar_Value (
	varchar_attr_id INT NOT NULL PRIMARY KEY,
	value VARCHAR(50) NOT NULL,

	FOREIGN KEY (varchar_attr_id) REFERENCES Attributes(attr_id)
);

ALTER TABLE Attributes_VarChar_Value ADD INDEX (value);

CREATE TABLE CheckIn (
	day VARCHAR(10) NOT NULL,
	num_checkins INT NOT NULL,
	c_bid VARCHAR(50) NOT NULL,

	FOREIGN KEY (c_bid) REFERENCES Business(business_id),
	PRIMARY KEY (c_bid,day)
);

CREATE TABLE User (
	user_id VARCHAR(50) NOT NULL PRIMARY KEY,
	name VARCHAR(100),
	fans INT,
	average_stars INT,
	yelping_since VARCHAR(20),
	votes_funny INT,
	votes_useful INT,
	votes_cool INT
);

CREATE TABLE Elite (
	year INT NOT NULL,
	e_uid VARCHAR(50) NOT NULL,

	FOREIGN KEY (e_uid) REFERENCES User(user_id),
	PRIMARY KEY (year,e_uid)
);

CREATE TABLE Compliment (
	tag VARCHAR(50) NOT NULL,
	c_uid VARCHAR(50) NOT NULL,
	numTagged INT NULL,

	FOREIGN KEY (c_uid) REFERENCES User(user_id),
	PRIMARY KEY (tag,c_uid)
);

CREATE TABLE Friendship (
	friend1 VARCHAR(50) NOT NULL,
	friend2 VARCHAR(50) NOT NULL,

	FOREIGN KEY (friend1) REFERENCES User(user_id),
	FOREIGN KEY (friend1) REFERENCES User(user_id)
);

CREATE TABLE Review (
	review_id VARCHAR(50) NOT NULL PRIMARY KEY,
	stars INT NOT NULL,
	review_text VARCHAR(200) NOT NULL,
	votes_funny INT NOT NULL,
	votes_useful INT NOT NULL,
	votes_cool INT NOT NULL,
	review_date DATE NOT NULL,
	r_bid VARCHAR(50) NOT NULL,
	r_uid VARCHAR(50) NOT NULL,

	FOREIGN KEY (r_bid) REFERENCES Business(business_id),
	FOREIGN KEY (r_uid) REFERENCES User(user_id)
);

