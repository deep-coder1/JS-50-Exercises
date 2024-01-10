// *Functions and Scope:*
// Create a ÿunction that Āenerates a 
// random number between a Āiven ranĀe.

function getRandomNumber(min, max) {
    // return Math.random()*10;
    // return Math.floor(Math.random()*(50+1)+50);
    return Math.floor(Math.random()*(max-min+1)) +min;
}

console.log(getRandomNumber(50, 100));

// Output:-
// 71