CREATE TABLE clinic
(
	name VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	PRIMARY KEY(name,city)
);
CREATE TABLE doctor
(
	phys_ssn 	INTEGER 	NOT NULL PRIMARY KEY,
	name 		VARCHAR(50) NOT NULL,
	specialty 	VARCHAR(50),
	experience 	VARCHAR(100),
	clinic_name VARCHAR(50),
	clinic_city VARCHAR(50),
	KEY clinic_id (clinic_name,clinic_city),
	FOREIGN KEY (clinic_id) REFERENCES clinic (name,city)
);
CREATE TABLE patient
(
	patient_ssn 	INTEGER 		NOT NULL PRIMARY KEY,
	age 			INTEGER 		NOT NULL,
	name 			VARCHAR 		NOT NULL,
	address 		VARCHAR(100)	NOT NULL,
	primary_phys 	VARCHAR(50),
	UNIQUE INDEX address_UNIQUE (address ASC),
	KEY primary_phys (primary_phys),
	FOREIGN KEY (primary_phys) REFERENCES doctor (phys_ssn)
);
CREATE TABLE prescription
(
	pres_num 	INTEGER NOT NULL,
	pres_date 	DATE 	NOT NULL,
	clinic_name VARCHAR(50),
	clinic_city VARCHAR(50),
	UNIQUE INDEX pres_num_UNIQUE (pres_num ASC),
	KEY clinic_id (clinic_name,clinic_city),
	FOREIGN KEY (clinic_id) REFERENCES clinic (name,city)
);
-- DOCTOR AND PATIENT AND PRESCRIPTION
CREATE TABLE prescribes
(
	pres_num 	INTEGER NOT NULL,
	patient_ssn INTEGER NOT NULL,
	phys_ssn 	INTEGER NOT NULL,
	PRIMARY KEY(pres_num,patient_ssn,phys_ssn)
);
--
CREATE TABLE drugcompany
(
	brand_name	VARCHAR(50) NOT NULL PRIMARY KEY,
	phone_num  	VARCHAR(20) NOT NULL
);
CREATE TABLE drug
(
	drug_name 	VARCHAR(50)  NOT NULL,
	formula 	VARCHAR(200) NOT NULL,
	UNIQUE INDEX drug_name_UNIQUE (drug_name ASC),
	KEY make (make),
	FOREIGN KEY (make) REFERENCES drugcompany (brand_name)
);
CREATE TABLE pharmacy
(
	phar_name VARCHAR(50) 	NOT NULL,
	phone_num VARCHAR(20) 	NOT NULL,
	type VARCHAR(100) 		NOT NULL
);
CREATE TABLE instore
(
	address VARCHAR(100) NOT NULL REFERENCES pharmacy(type),
	PRIMARY KEY(address)
);
CREATE TABLE online
(
	url VARCHAR(100) NOT NULL REFERENCES pharmacy(type),
	PRIMARY KEY(url)
);
CREATE TABLE prescription_and_drug
(
	pres_num 	INTEGER 	NOT NULL REFERENCES prescription(pres_num),
	drug_name 	VARCHAR(50) NOT NULL REFERENCES drug(drug_name),
	PRIMARY KEY (pres_num,drug_name)
);
CREATE TABLE sell
(
	phar_name 	VARCHAR(50)	NOT NULL REFERENCES pharmacy(phar_name),
	drug_name 	VARCHAR(50) NOT NULL REFERENCES drug(drug_name),
	price 		INTEGER 	NOT NULL,
	PRIMARY KEY (phar_name,drug_name)
);
CREATE TABLE contract
(
	phar_name 	VARCHAR(50)	NOT NULL REFERENCES pharmacy(phar_name),
	brand_name 	VARCHAR(50) NOT NULL REFERENCES drugcompany(brand_name),
	contract_text	VARCHAR(5000),
	supervisor		VARCHAR(50) NOT NULL,
	start_date		DATE NOT NULL,
	end_date		DATE NOT NULL,
	PRIMARY KEY (phar_name,brand_name)
);