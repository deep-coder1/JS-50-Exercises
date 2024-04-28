// Random Exercise*
// Given two integers representing the numerator and
// denominator of a fraction, return the ÿraction in string format.
// Input: numerator = 1, denominator = 2
// Output: "0.5

function fraction(numerator,denominator){
    const result = numerator/denominator;
    console.log(typeof result)
    return result.toString();
}

console.log(fraction(1,2));
console.log(typeof fraction(1,2));

// Output:-
// number
// 0.5
// number
// string