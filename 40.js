// Create a class representing a Book 
// with properties like title, author, and 
// year.Add a method to the Book class to 
// get the book's age (current year - year 
// of publication).

class Book {
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getAge(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const book1 = new Book('The Alchemist','Paulo Coelho','2000');

console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

const ageOfBook = book1.getAge();

console.log(ageOfBook);

// Output:- 
// The Alchemist
// 40.js:23 Paulo Coelho
// 40.js:24 2000
// 40.js:28 24