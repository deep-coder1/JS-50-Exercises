// Destructuring:*
// Destructure an object to get its 
// properties.

const person = {
    fName:'Deepak',
    lName:'Thakur',
    age:24,
    city:'New York'
}

console.log(person);
console.log(person.fName);

const {fName,lName,...left} = person;
console.log(fName);
console.log(left);

// Output:- 

// {fName: 'Deepak', lName: 'Thakur', age: 24, city: 'New York'}
// 39.js:13 Deepak
// 39.js:16 Deepak
// 39.js:17 
// {age: 24, city: 'New York'}
// age
// : 
// 24
// city
// : 
// "New York"
// [[Prototype]]
// : 
// Object