// Recursion
// Implement a recursive function to find 
// the nth Fibonacci number.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ... n
// n = 5
// 5
// n = 6 (8)

function Fibonacci(n){
    if(n<=1){
        return n;
    }
    else{
        return Fibonacci(n-1)+Fibonacci(n-2);
    }
}

console.log(Fibonacci(5));

// Output:-
// 5