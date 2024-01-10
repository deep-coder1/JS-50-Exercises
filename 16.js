// *Higher-Order Functions:*
// Use `map()` to double all the elements 
// in an array.

function doubleArrayElements(arr){
    // return arr.map((num) =>{
    //     return num *2;
    // })

    // Same 
    return arr.map((num) => num *2)
}

let arr = [10, 20, 30, 40, 50];
console.log(doubleArrayElements(arr));
console.log(arr);

// Output:-
// (5) [20, 40, 60, 80, 100]
// (5) [10, 20, 30, 40, 50]