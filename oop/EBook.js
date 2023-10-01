const Book = require('./Book');

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this._format = format;
    }

    get format() {
        return this._format;
    }

    set format(newFormat) {
        if (typeof newFormat === 'string') {
            this._format = newFormat;
        } else {
            console.error('Помилка: Формат файлу має бути рядком.');
        }
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this._format}`);
    }

    static createFromBook(book, format) {
        if (!(book instanceof Book)) {
            console.error('Помилка: Вхідний параметр має бути об\'єктом класу Book.');
            return null;
        }

        return new EBook(book.title, book.author, book.year, format);
    }
}

module.exports = EBook;