// Functions:

// Create a function to calculate the area of a rectangle given its width and height.

// Simple function 
function calculateAreaOfRectangle(width,height){
    return width*height;
}

let area = calculateAreaOfRectangle(5,10);
console.log(area);

// Output:-
// 50


// Arrow function 
let calculateAreaOfRectangle2 = (width,height) => {
    return width*height;
}

let area2 = calculateAreaOfRectangle2(5,70);
console.log("Area of Rectangle is: " +area2);

// Output:-
// Area of Rectangle is: 350