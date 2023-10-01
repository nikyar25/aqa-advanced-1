class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (typeof newTitle === 'string') {
            this._title = newTitle;
        } else {
            console.error('Помилка: Назва книги має бути рядком.');
        }
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor === 'string') {
            this._author = newAuthor;
        } else {
            console.error('Помилка: Автор книги має бути рядком.');
        }
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (typeof newYear === 'number' && newYear >= 0) {
            this._year = newYear;
        } else {
            console.error('Помилка: Рік видання книги має бути невід\'ємним числом.');
        }
    }

    printInfo() {
        console.log(`Книга: ${this._title}`);
        console.log(`Автор: ${this._author}`);
        console.log(`Рік видання: ${this._year}`);
    }

    static findOldestBook(books) {
        if (!Array.isArray(books)) {
            console.error('Помилка: Вхідний параметр має бути масивом книг.');
            return null;
        }

        if (books.length === 0) {
            console.error('Помилка: Масив книг порожній.');
            return null;
        }

        let oldestBook = books[0];

        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldestBook.year) {
                oldestBook = books[i];
            }
        }

        return oldestBook;
    }
}

module.exports = Book;