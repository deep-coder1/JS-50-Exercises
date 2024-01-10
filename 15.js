// *Higher-Order Functions:*
//  Write a ÿunction that takes an array oÿ 
// numbers and returns a new array with 
// only the even numbers.

let arr = [10, 15, 20, 25, 30 ,35, 40];

function filterEvenNumber(arr) {
    return arr.filter(num => num % 2 ===0);
}

console.log("Even Num Array: ", filterEvenNumber(arr));
console.log("Original Array: ", arr);