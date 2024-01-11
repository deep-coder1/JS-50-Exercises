// *Array Methods:*
// Find the largest element in an array 
// using the `reduce()` method.

function findLargestElement(){
    return arr.reduce((max, current)=>
        current > max ? current : max)
}

// let arr = [10, 20, 30, 40, 50];
let arr = [1, 2, 10, 40, 15, 25, 10];
let reduce = findLargestElement(arr);

console.log(reduce);

// Output:-
// 40