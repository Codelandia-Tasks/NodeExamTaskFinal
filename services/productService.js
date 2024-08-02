const pool = require('../config/db');
const productModel = require('../models/product/product');
const { PRODUCT_FOUND_SUCCESSFULLY, PRODUCT_NOT_FOUND, BOOK_FOUND_SUCCESSFULLY, PRODUCT_ADDED_SUCCESSFULLY, PRODUCT_DELETED_SUCCESSFULLY } = require('../utils/messages/messages');
const { SuccessResult, ErrorResult } = require('../utils/results');

const getAllProductsData = async () => {
    const result = await pool.query('select * from product');
    res = productModel.mapAll(result.rows);
    return new SuccessResult(PRODUCT_FOUND_SUCCESSFULLY,result);
}

const getProductById = async (id) => {
    const result = await pool.query('select * from product p where p.id = $1',[id]);
    const product = productModel.mapOne(result.rows[0]);
    if(product == null)
        return new ErrorResult(PRODUCT_NOT_FOUND);
    return new SuccessResult(PRODUCT_FOUND_SUCCESSFULLY,result);
}

const addProduct = async (product) => {
    product = productModel.mapOne(product);
    const result = await pool.query('CALL add_product($1,$2,$3,$4,$5,$6)',[
        product.p_name,product.price,product.old_price,product.categoryid,
        product.color,product.size
    ]);
    return new SuccessResult(PRODUCT_ADDED_SUCCESSFULLY,product);
}

const deleteProduct = async (id) => {
    const result = await pool.query('delete from product p where p.id = $1', [id]);
    return new SuccessResult(PRODUCT_DELETED_SUCCESSFULLY);
}
// error var  tapmaq lazimdi product  routeda 
module.exports = {
    getAllProductsData,
    getProductById,
    addProduct,
    deleteProduct
}