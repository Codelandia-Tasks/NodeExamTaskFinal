const pool = require('../config/db');
const bcrypt = require("bcrypt");
const { ErrorResult, SuccessResult } = require("../utils/results");
const User = require('../models/users/user');
const { DATA_SUCCESSFULLY, USER_FOUND_SUCCESSFULLY, USER_NOT_FOUND, DATA_NOT_FOUND, USER_CREATED_SUCCESSFULY, USER_CREATED_SUCCESSFULLY, USER_DELETED_SUCCESSFULLY } = require('../utils/messages/messages');

const getAllUsers = async () => {
    try {
        const result = await pool.query('SELECT * FROM users');
        if (result.rows.length === 0) {
            return new ErrorResult(DATA_NOT_FOUND);
        }
        const users = User.mapAll(result.rows);
        return new SuccessResult(DATA_SUCCESSFULLY, users);
    } catch (error) {
        return new ErrorResult(error.message);
    }
}

const getUserById = async (id) => {
    try {
        const result = await pool.query('select * from users u where u.id = $1',[id]);
        const user = User.mapOne(result.rows[0]);
        if(!user) return new ErrorResult(USER_NOT_FOUND,user);
        return new SuccessResult(USER_FOUND_SUCCESSFULLY, user);
    } catch (error) {
        return new ErrorResult(error.message);
    }
}

const getUserByUsername = async (username) => {
    const result = await pool.query('select * from users u where u.username = $1',[username]);
    const user = User.mapOne(result.rows[0]);
    if (!user) return new ErrorResult(USER_NOT_FOUND);
    return new SuccessResult(USER_FOUND_SUCCESSFULLY, user);
}

const addUser = async (user) => {
    user = User.mapOne(user);
    const checkingDuplicate = await getUserByUsername(user.username);
    if(checkingDuplicate.data != null)
        return new ErrorResult("Duplicate username");
    user.password = await bcrypt.hash(user.password, 10);
    const result = await pool.query('call add_user($1,$2)', [
        user.username,
        user.password
    ]);
    return new SuccessResult(USER_CREATED_SUCCESSFULLY, user);
}

const deleteUserById = async (id) => {
    const result = await pool.query('delete from users u where u.id = $1', [id]);
    return new SuccessResult(USER_DELETED_SUCCESSFULLY);
}

module.exports = {
    getUserById,
    getUserByUsername,
    addUser,
    getAllUsers,
    deleteUserById
}

