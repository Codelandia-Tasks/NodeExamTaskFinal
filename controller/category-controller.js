const categoryService = require('../services/categoryService');


const getAllCategories = async (req,res) => {
    const result = await categoryService.getAllCategoryData();
    res.json(result);
}

const getCategoryId = async (req,res) => {
    const result = await categoryService.getCategoryById(req.params.id);
    res.json(result);
}

const addCategory = async (req,res) => {
    const result = await categoryService.addCatgeory(req.body);
    res.json(result);
}

const deleteCategory = async (req,res) => {
    const result = await categoryService.deleteCategory(req.params.id);
    res.json(result);
}

module.exports = {
    getAllCategories,
    getCategoryId,
    addCategory,
    deleteCategory
}