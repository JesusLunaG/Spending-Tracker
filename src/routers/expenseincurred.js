const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const joiValidator = require("../middlewares/joi");
const { createExpenseIncurredSchema } = require("../validations/expenseincurred");
const { createExpense,getAll } = require("../controllers/expenseincurred");

router.post("/", jwtValidator, joiValidator.body(createExpenseIncurredSchema), createExpense);

router.get("/", jwtValidator, getAll);

module.exports = router;