const express = require("express");
const productController = require("../controller/product-controller");

const route = express.Router();

route.get("/getPrAll", productController.getAllProducts);
route.get("/getPrById/:id", productController.getProductById);
route.post("/addPr", productController.addProduct);
route.delete("/deletePr/:id", productController.deleteProductId);

module.exports = route;