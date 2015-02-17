INSERT INTO R
VALUES(1000,20,555);
INSERT INTO R
VALUES(2000,20,333);
INSERT INTO R
VALUES(3000,30,111);
INSERT INTO R
VALUES(4000,30,555);
INSERT INTO R
VALUES(5000,40,444);

INSERT INTO S
VALUES(1,100,1000);
INSERT INTO S
VALUES(2,100,3000);
INSERT INTO S
VALUES(2,200,2000);
INSERT INTO S
VALUES(3,100,5000);
INSERT INTO S
VALUES(4,200,1000);

INSERT INTO T
VALUES(10,50,100);
INSERT INTO T
VALUES(20,125,200);
INSERT INTO T
VALUES(30,150,300);
INSERT INTO T
VALUES(40,75,400);
INSERT INTO T
VALUES(50,100,200);

INSERT INTO Y
VALUES(1,100,10,25);
INSERT INTO Y
VALUES(1,100,20,5);
INSERT INTO Y
VALUES(2,100,20,20);
INSERT INTO Y
VALUES(2,200,20,15);
INSERT INTO Y
VALUES(3,100,40,15);
INSERT INTO Y
VALUES(4,200,40,5);
INSERT INTO Y
VALUES(4,200,50,10);

INSERT INTO Z
VALUES(2000,20,22);
INSERT INTO Z
VALUES(5000,50,55);

/*
i)		Deletion does NOT violate any integrity constraints

ii)		Deletion does NOT violate any integrity constraints

iii)	Deletion does NOT violate any integrity constraints

iv)		Deletion does NOT violate any integrity constraints

V)		Deletion does NOT violate any integrity constraints


DATABASE AFTER UPDATES AND DELETIONS

mysql> select * from R; select * from S; select * from T; select * from Y; select * from Z;
+------+----+-----+
| A    | B  | C   |
+------+----+-----+
| 1000 | 20 | 555 |
| 3000 | 30 | 111 |
| 4000 | 30 | 555 |
| 5000 | 40 | 444 |
+------+----+-----+
4 rows in set (0.00 sec)

+---+-----+------+
| D | E   | F    |
+---+-----+------+
| 2 | 100 | 3000 |
| 2 | 200 | 2000 |
| 3 | 100 | 5000 |
| 3 | 200 | 2000 |
| 4 | 200 | 1000 |
+---+-----+------+
5 rows in set (0.00 sec)

+----+-----+-----+
| G  | H   | I   |
+----+-----+-----+
| 10 |  50 | 100 |
| 20 | 125 | 200 |
| 40 |  75 | 400 |
| 50 | 100 | 200 |
+----+-----+-----+
4 rows in set (0.00 sec)

+---+-----+----+----+
| M | N   | O  | P  |
+---+-----+----+----+
| 1 | 100 | 10 | 25 |
| 1 | 100 | 20 |  5 |
| 2 | 100 | 20 | 20 |
| 2 | 200 | 20 | 15 |
| 3 | 100 | 40 | 15 |
| 4 | 100 | 50 | 35 |
| 4 | 200 | 40 |  5 |
| 4 | 200 | 50 | 10 |
+---+-----+----+----+
8 rows in set (0.00 sec)

+------+----+----+
| J    | K  | L  |
+------+----+----+
| 2000 | 20 | 22 |
| 5000 | 20 | 75 |
| 5000 | 50 | 55 |
+------+----+----+
3 rows in set (0.00 sec)

*/