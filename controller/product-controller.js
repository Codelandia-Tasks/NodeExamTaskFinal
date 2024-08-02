const productService = require('../services/productService');

const getAllProducts = async (req,res) => {
    const result = await productService.getAllProductsData();
    res.json(result);
}

const getProductById = async (req,res) => {
    const result = await productService.getProductById(req.params.id);
    res.json(result);
}

const addProduct = async (req,res) => {
    const result = await productService.addProduct(req.body);
    res.json(result);
}

const deleteProductId = async (req,res) => {
    const result = await productService.deleteProduct(req.params.id);
    res.json(result);
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProductId
}