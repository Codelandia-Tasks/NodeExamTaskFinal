const pool = require('../config/db');
const categoryModel = require('../models/category/category');
const { CATEGORY_FOUND_SUCCESSFULLY, CATEGORY_NOT_FOUND, CATEGORY_ADDED_SUCCESSFULLY, CATEGORY_DELETED_SUCCESSFULLY } = require('../utils/messages/messages');
const { SuccessResult, ErrorResult } = require('../utils/results');

const getAllCategoryData = async () => {
    const result = await pool.query('select * from category')
    res = categoryModel.mapAll(result.rows);
    return new SuccessResult(CATEGORY_FOUND_SUCCESSFULLY,result);
}

const getCategoryById = async (id) => {
    const result = await pool.query('select * from category c where c.id = $1', [id]);
    const category = categoryModel.mapOne(result.rows[0]);
    if(category == null)
        return new ErrorResult(CATEGORY_NOT_FOUND);
    return new SuccessResult(CATEGORY_FOUND_SUCCESSFULLY,result);
}

const addCatgeory = async (category) => {
    category = categoryModel.mapOne(category);
    const result = await pool.query('CALL add_category($1)',[category.name]);
    return new SuccessResult(CATEGORY_ADDED_SUCCESSFULLY,result);
}

const deleteCategory = async (id) => {
    const result = await pool.query('delete from category c where c.id = $1',[id]);
    return new SuccessResult(CATEGORY_DELETED_SUCCESSFULLY);
}

module.exports = {
    getAllCategoryData,
    getCategoryById,
    addCatgeory,
    deleteCategory
}