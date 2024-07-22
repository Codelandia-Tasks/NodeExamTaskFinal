const express = require("express");
const userRoute = require("./userRoute");
const booksRoute = require("./booksRoute");
const authRoute = require("./authRoute");

const router = express.Router();

router.use('/users', userRoute);
router.use("/books", booksRoute);
router.use("/auth", authRoute);

module.exports = router;