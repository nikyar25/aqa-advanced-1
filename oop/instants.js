const Book = require('./Book');
const EBook = require('./EBook');

const book1 = new Book("Назва книги 1", "Автор книги 1", 2020);
const book2 = new Book("Назва книги 2", "Автор книги 2", 2015);

console.log("Книга 1:");
book1.printInfo();
console.log("--------------------------");
console.log("Книга 2:");
book2.printInfo();

const ebook = new EBook("Електронна книга 1", "Автор електронної книги 1", 2022, "PDF");

console.log("--------------------------");
console.log("Електронна книга:");
ebook.printInfo();

console.log("--------------------------");
const books = [book1, book2, ebook];
const oldestBook = Book.findOldestBook(books);
console.log("Найдавніша книга:");
oldestBook.printInfo();

console.log("--------------------------");
const newEBook = EBook.createFromBook(book1, "EPUB");
console.log("Нова електронна книга створена зі звичайної книги:");
newEBook.printInfo();