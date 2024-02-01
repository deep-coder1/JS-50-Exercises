// Random Exercise*
// Create a function that takes an array of objects
// (groceries) which calculates the total price and
// returns it as a number.
// Advanced Level:*
// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//  { product: "Milk", quantity: 1, price: 1.50 },
//  { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 

function getTotalPrice(groceries){
    let total = 0;

    for(const item of groceries){
        console.log(item);
        
        const itemPrice = item.quantity*item.price;

        // total = total + itemPrice;
        total += itemPrice;
    }

    return total;
}

console.log(getTotalPrice([
    {
        product: "Milk", quantity: 1, price: 1.50
    },
    { product: "Cereals", quantity: 1, price: 2.50 }
]))

// Output:- 
// {product: 'Milk', quantity: 1, price: 1.5}
// 45.js:16 {product: 'Cereals', quantity: 1, price: 2.5}
// 45.js:27 4