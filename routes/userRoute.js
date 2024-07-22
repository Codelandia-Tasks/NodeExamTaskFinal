const userController = require("../controller/user-controller");
const express = require("express");
const route = express.Router();

route.get("/getAllUsers", userController.getAllUsers);
route.get("/getOneUser/:id", userController.getUserById);
route.get("/getUserByUsername/:username", userController.getUserByUsername);
route.post("/", userController.addUser);
route.delete("/delete/:id", userController.deleteUserById);

module.exports = route;