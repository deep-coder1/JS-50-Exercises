// *Array Methods:*
// Remove all occurrences oÿ a specific 
// element ÿrom an array.

function removeElementFromArray(){
    return arr.filter(item => item !== target);
}

let arr = [10, 10, 20, 10, 30, 10, 40, 10];
let = target = 10;
let removed = removeElementFromArray(arr,target);
console.log(removed);

// Output:-
// [20, 30, 40]