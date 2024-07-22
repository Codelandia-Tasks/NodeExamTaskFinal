const pool = require('../config/db');
const { ErrorResult, SuccessResult } = require("../utils/results");
const bookModel = require('../models/book/book');
const { BOOK_FOUND_SUCCESSFULLY, BOOK_NOT_FOUND, BOOK_ADDED_SUCCESSFULLY, BOOK_DELETED_SUCCESSFULLY } = require('../utils/messages/messages');

const getAllBooksData = async () => {
    const result = await pool.query("select * from books");
    res = bookModel.mapAll(result.rows);
    return new SuccessResult(BOOK_FOUND_SUCCESSFULLY,result);
}

const getBookById = async (id) => {
    const result = await pool.query("select * from books b where b.id = $1", [id]);
    const book = bookModel.mapOne(result.rows[0]);
    if (book == null) return new ErrorResult(BOOK_NOT_FOUND);
    return new SuccessResult(BOOK_FOUND_SUCCESSFULLY, book);
};

const addBook = async (book) => {
    book = bookModel.mapOne(book);
    const result = await pool.query('call add_book($1,$2,$3,$4)', [ book.title, book.author, book.publish_date, book.isbn]);
    return new SuccessResult(BOOK_ADDED_SUCCESSFULLY, book);
}

const deleteBookById = async (id) => {
    const result = await pool.query('delete from books b where b.id = $1', [id]);
    return new SuccessResult(BOOK_DELETED_SUCCESSFULLY);
}

module.exports = {
    getAllBooksData,
    getBookById,
    addBook,
    deleteBookById
}