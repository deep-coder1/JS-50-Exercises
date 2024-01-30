// Random Exercise*
// Create a function that determines whether a number is
// Oddish or Evenish. A number is Oddish if the sum of all
// of its digits is odd, and a number is Evenish if the sum of
// all of its digits is even. Iÿ a number is Oddish, return
// "Oddish". Otherwise, return "Evenish".


// oddorEven(121) = 1+2+1 = 4 // Evenish
// oddorEven(41) = 4+1 = 5 // Oddish

function oddishOrEvenish(num){
    const digits = num.toString().split('').map(Number);

    // console.log(digits);
    const sum = digits.reduce((acc,digit) => acc+digit,0);

    return sum % 2 === 0? "Evenish" : "Oddish";
}

// oddishOrEvenish(14);
console.log(oddishOrEvenish(121));

// Output:- 
// Evenish