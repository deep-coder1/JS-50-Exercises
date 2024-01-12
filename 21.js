// Recursion
// Write a recursive function to calculate 
// the factorial of a given number.

// fact = 5! = 5*4*3*2*1
//        4! = 4*3*2*1

// FontFaceSet(n) = n* n-1 * n-2 .....!
// n! = n*(n-1)!
// 5! = 5*4!
//    = 5*4!

function factorial(n){
    if(n === 1){
        return 1;
    } else{
        return n*(factorial(n-1))
    }
}

console.log(factorial(5));

// Output:-
// 120

// Ex:
// 5 * factorial(5-1)
// 4 * factorial(4-1)
// 3 * factorial(3-1)
// 2 * factorial(2-1)
// 1