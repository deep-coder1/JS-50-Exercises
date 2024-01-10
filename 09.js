// Objects*

// Create an object representinĀ a car with 
// properties like make, model, and year.Add a 
// method to the car object to start the enĀine.

let car = {
    make:"Toyota",
    model:"Camry",
    year:2022
}

car.startEngine = function(){
    console.log("Engine Started");
}

console.log(car);
console.log(car.startEngine);
car.startEngine();

// Output:-

// 09.js:18 ƒ (){
//     console.log("Engine Started");
// }
// 09.js:14 Engine Started