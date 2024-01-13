// Async Programming - 
// Callbacks:*
// Implement a function that makes multiple 
// API calls and processes the data using 
// callbacks.

function makeAPICall(url,callback){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.error("Error during API Call: ", err.message));
}

function handleData(data){
    console.log('Process Data: ',data);
}

function main(){
    const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/2';

    makeAPICall(apiUrl1,handleData);
    makeAPICall(apiUrl2,handleData);
}

main();


// Output:
// Process Data:  {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
// Process Data:  {userId: 1, id: 2, title: 'qui est esse', body: 'est rerum tempore vitae\nsequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla'}