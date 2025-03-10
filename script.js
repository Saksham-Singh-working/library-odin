const myLibrary = [];

function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
    this.info = () => {
        if(read === true){
            return `${title} by ${author}, ${pages} pages, read`;
        }
        else{
            return `${title} by ${author}, ${pages} pages, not read yet.`;
        }
    };
}

function addBookToLibrary(title, author, pages, read){
    let id = crypto.randomUUID();
    let book = new Book(title, author, pages, read, id);
    myLibrary.push(book);
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
    table.innerHTML = "";
    myLibrary.forEach((element) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${element.title}</td><td>${element.author}</td><td>${element.pages}</td><td>${element.read}</td><td>${element.id}</td>`
        table.appendChild(row);
    });
}
displayBooks();
let rows= Array.from(document.querySelectorAll("tr"));

document.querySelector(".toggle").addEventListener("click", () => {
    document.querySelector("form").style.opacity = "1";
});

document.querySelector("form").addEventListener("submit", () => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const read = document.getElementById("read").value;
    if(read == "yes"){
        addBookToLibrary(title, author, pages, true);
    }
    else{
        addBookToLibrary(title, author, pages, false);
    }
    displayBooks();
});