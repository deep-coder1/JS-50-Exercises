// Inheritance and Prototypes:*
// Create a subclass `Magazine` that 
// extends the `Book` class with an 
// additional property `issue`.Add a 
// method to the `Magazine` class to get 
// the magazine's issue number.

class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Magazine extends Book{
    constructor(title,author,year,issue){
        super(title,author,year);
        this.issue = issue;
    }
    getIssueNumber(){
        return this.issue
    }
}

const myMagazine = new Magazine('Dxo','Zayn',2024,5);
