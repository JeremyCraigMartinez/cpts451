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