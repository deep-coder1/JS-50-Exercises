// Multidimensional Array:
// Create a JavaScript ÿunction that Āenerates a 2D
// array with the specified number of rows and columns.
// Each element in the array should contain the sum of
// its row index and column index. Once you've created
// the array, write two additional functions to display the
// array in its oriĀinal form and in reverse.

function createMultidimensionalArray(rows,columns){
    let arr = [];

    for(let i = 0; i<rows; i++){
        // arr.push(new Array(columns));
        let row = [];
        for(let j = 0; j<columns; j++){
            // arr[i][j]=i+j;
            row.push(i+j);
        }
        arr.push(row);
    }
    return arr;
}

function display(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i].join(" "));
    }
}

function reverseDisplay(arr){
    for(let i=arr.length-1; i>=0; i--){
        console.log(arr[i].reverse().join(" "));
    }
}

const rows = 3;
const columns = 4;

const multiArray = createMultidimensionalArray(rows,columns);

console.log("Original Array");
display(multiArray);

console.log("Reverse Array");
reverseDisplay(multiArray);

// Output:- 
// Original Array
// 0 1 2 3
// 1 2 3 4
// 2 3 4 5
// Reverse Array
// 5 4 3 2
// 4 3 2 1
// 3 2 1 0