let books = [];

function addBook() {
    var bookName = document.getElementById("bookName").value;
    var authorName= document.getElementById("authorName").value;
    var bookDescription= document.getElementById("bookDescription").value;
    var pagesNumber= document.getElementById("pagesNumber").value;
    books.push({name:bookName,author:authorName,description:bookDescription,pages:pagesNumber});
    document.getElementById("books").innerHTML = books.map((book, index) => `<div>bookname: ${book.name} <button onclick="editBook(${index})">Edit</button></div>`).join('');
}

function editBook(index) {
    books[index].name = prompt("Enter new book name:", books[index].name);
    books[index].author = prompt("Enter new author name:", books[index].author);
    books[index].description = prompt("Enter new book description:", books[index].description);
    books[index].pages = prompt("Enter new number of pages:", books[index].pages);
    document.getElementById("books").innerHTML = books.map((book, index) => `<div>bookname: ${book.name} <button onclick="editBook(${index})">Edit</button></div>`).join('');
}