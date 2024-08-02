const express = require("express");
const userRoute = require("./userRoute");
const booksRoute = require("./booksRoute");
const authRoute = require("./authRoute");
const productRoute = require("./productRoute");
const categoryRoute = require("./categoryRoute");

const router = express.Router();

router.use('/users', userRoute);
router.use("/product", productRoute)
router.use("/category", categoryRoute)
router.use("/books", booksRoute);
router.use("/auth", authRoute);

module.exports = router;