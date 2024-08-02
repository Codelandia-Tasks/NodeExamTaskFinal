const express = require("express");
const categoryController = require("../controller/category-controller");

const route = express.Router();

route.get("/getCategoryAll", categoryController.getAllCategories);
route.get("/getCategoryById/:id", categoryController.getCategoryId);
route.post("/addCategory", categoryController.addCategory);
route.delete("/deleteCategory/:id", categoryController.deleteCategory);

module.exports = route;