require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json())

const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const paymentMethodRouter = require("./routers/paymentmethod");
const expenseCategoryRouter = require("./routers/expensecategory");
const expenseIncurredRouter = require("./routers/expenseincurred");

const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/paymentmethod", paymentMethodRouter);
app.use("/expensecategory", expenseCategoryRouter);
app.use("/expenseincurred", expenseIncurredRouter);

// Manejo de errores
app.use(validationError);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});