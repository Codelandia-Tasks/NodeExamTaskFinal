const bookService = require('../services/bookService');

const getAllBooks = async (req,res) => {
    const result = await bookService.getAllBooksData();
    res.json(result);
}

const getBookById = async (req,res) => {
    const result = await bookService.getBookById(req.params.id);
    res.json(result);
}

const addBook = async (req,res) => {
    const result = await bookService.addBook(req.body);
    res.json(result);
}

const deleteBookById = async (req,res) => {
    const result = await bookService.deleteBookById(req.params.id);
    res.json(result);
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    deleteBookById
}