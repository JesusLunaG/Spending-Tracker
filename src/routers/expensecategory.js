const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const joiValidator = require("../middlewares/joi");
const { createExpenseCategorySchema } = require("../validations/expensecategory");
const { createExpenseCategory,getAll } = require("../controllers/expensecategory");

router.post("/", jwtValidator, joiValidator.body(createExpenseCategorySchema), createExpenseCategory);

router.get("/", jwtValidator, getAll);

module.exports = router;