const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoute");
const bookRouter = require('./routes/booksRoute');
// const Router = require('./routes');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRouter);
app.use("/", bookRouter);

app.listen(PORT, () => console.log(`Server heard on ${PORT}`));
