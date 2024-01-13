// *Closures
// Implement a private variable using
// closures.

function createCounter(){
    // Private Variable
    let count = 0;

    // Inner Function(closure)
    function increment(){
        count ++;
        console.log("Count: ", count);
    }

    return{
        incrementCounter:function(){
            increment();
        },

        getCount:function(){
            return count;
        }
    }
}

// let count = 2;

const counter = createCounter();
counter.incrementCounter();
counter.incrementCounter();
console.log(counter);
console.log(counter.getCount());

// Output:-
// Count:  1
// Count:  2
// {incrementCounter: ƒ, getCount: ƒ}
// 2