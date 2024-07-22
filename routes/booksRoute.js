const express = require("express");
const bookController = require("../controller/book-controller");

const route = express.Router();

route.get("/getAll", bookController.getAllBooks);
route.get("/getById/:id", bookController.getBookById);
route.post("/", bookController.addBook);
route.delete("/delete/:id", bookController.deleteBookById);

module.exports = route;