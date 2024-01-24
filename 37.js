// Regular Expressions:*
// Write a reĀular expression to validate 
// an email address.

const emailRegex = /^[a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validate(email){
    return emailRegex.test(email);
}

const email = "john@gmail.com";

console.log(validate(email));

// Output:- 
// true

// if i enter other email 
// const email = "john1@gmail.com";
// O/P: false