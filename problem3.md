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