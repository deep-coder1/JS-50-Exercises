// Prototypal Inheritance:*
// Create an object `person` with properties 
// like name and age. Then, create a new 
// object `student` that inherits from `person` 
// and has an additional property 
// `studentId`.Add a method to the `person` 
// object and demonstrate that `student` 
// also has access to it.

const person = {
    name: "Deepak",
    age: "24",

    introduce:function(){
        return `Hi my name is ${this.name} and I am ${this.age} year old`
    }
}

const student = Object.create(person);

student.studentId = '12345';

console.log(student.name);
console.log(student.studentId);
console.log(person.studentId); // person cant access studentId

console.log(person);

// Output:- 
// Deepak
// 42.js:24 12345
// 42.js:25 undefined
// 42.js:27 {name: 'Deepak', age: '24', introduce: ƒ}age: "24"introduce: ƒ ()name: "Deepak"[[Prototype]]: Object