class Book {
    constructor(rows){
        this.title  = rows?.title,
        this.author = rows?.author,
        this.publish_date = rows?.publish_date,
        this.isbn = rows?.isbn
    }

    static mapAll(rows){
        return rows.map(row => new Book(row));
    }

    static mapOne(row){
        return new Book(row);
    }
}

module.exports = Book;