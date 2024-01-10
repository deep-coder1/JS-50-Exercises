// Arrays and Loops:

// Find the sum of all elements in an array.

let arr = [20,30,40,10,8];

console.log(arr);
console.log(arr[0]);
console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]);

let sum = 0;
for(let i=0; i < arr.length; i++){
    // console.log(arr.length);
    sum+=arr[i];
}
console.log(sum);

// Output:-
// (5) [20, 30, 40, 10, 8]
// 20
// 108
// 108