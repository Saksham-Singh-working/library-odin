let myLibrary = [];

function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read, crypto.randomUUID()));
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Moby-Dick", "Herman Melville", 635, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 432, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false);
addBookToLibrary("War and Peace", "Leo Tolstoy", 1225, true);
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 671, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);

function displayBooks(){
    let table = document.querySelector("table");
    table.innerHTML = "<tr><th>Title</th> <th>Author</th> <th>Pages</th> <th>Read?</th> <th>ID</th></tr>";
    myLibrary.forEach((element) => {
        table.innerHTML += `<tr><td>${element.title}</td><td>${element.author}</td><td>${element.pages}</td><td>${element.read}</td><td>${element.id}</td><td><button id="${element.id}" class="delete">Delete</button></td></tr>`;
    });
    let deleteButtons = Array.from(document.querySelectorAll(".delete"));
    deleteButtons.forEach((element) => {
        element.addEventListener("click", ()=>{
            for(let i = 0; i < myLibrary.length; i++){
                if(myLibrary[i].id == element.id){
                    myLibrary.splice(i, 1);
                    displayBooks();
                    break;
                }
            }

        })
    });
}

let form = document.querySelector("form");

displayBooks();