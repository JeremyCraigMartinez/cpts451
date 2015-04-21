##Homework 5

1. Storage Indexing
	- (10 points)
		1. (v) no index because you are listing information for all employees, not searching/filtering for any specific attributes
		2. (iii) - _Clustered B+ tree index on floor, budget fields of Dept_ because it is uses numerical comparisons which are ideal of a B+ tree. And it needs to be organized on both of those fields because the query specifies both. B+ tree would be right for this because it is good for range and equality queries, whereas hash is only good for equality.
	- Don't know
3. Storage and Indexing
	- List the names, ages, and offices of professors of a user-specified gender (male or female) who have a userspecified research specialty (e.g., AI, robotics).
		1. (gender, specialty)
		2. clustered
		3. hashed
	- List all information about professors older than 30 years old.
		1. age
		2. unclustered
		3. B+
	- List the did, dname, and dept-chair for departments with a user-specified number of majors. Departments may have up to 4 majors. 
		1. num-majors
		2. unclustered
		3. B+
	- Find the dname and budget for the department with the lowest budget.
		1. budget
		2. unclustered
		3. B+
	- List the number of different specialties covered by professors in each dept-name.
		1. (dept-name, specialty)
		2. clustered
		3. hashed
3. Reference Appendix A for this section
	- Insert a data entry with key 40 into this tree.
		1. See Appendix A Figure 3.1
		2. 3 reads, 1 write
	- Insert a data entry with key 7 into the original tree
		1. See Appendix A Figure 3.2
		2. Don't Know
	- Delete a data entry with key 18 from the original tree.
		1. See Appendix A Figure 3.3
		2. Don't Know
4. (15 points)
	- (n-1) x 32 + (n) x 8 <= 16K __n≈410__
	- log410(25600) = 1.68718. __2 Levels__
	- D(logF0.15B+1). D(log410(0.15*200+1)) = __D(0.570794)__