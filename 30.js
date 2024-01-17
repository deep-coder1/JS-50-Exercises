// Async Programming - 
// Async/Await:*
// Implement an async function to fetch 
// data from an API and handle errors usinĀg
// try/catch.

async function fetchData(url){
    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error("Request failed with status :" +response.status);
        }
        return await(response.json());
    }
    catch(error){
        console.log("Error featching", error);
    }
}

fetchData("https://jsonplaceholder.typicode.com/posts/").then(data=>console.log(data));

// Output:-

// (100) [{…}, {…}, {…}, {…},  {…}, {…}, {…}]

// 0
// : 
// {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
// 1
// : 
// {userId: 1, id: 2, title: 'qui est esse', body: 'est rerum te