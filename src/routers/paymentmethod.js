const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const joiValidator = require("../middlewares/joi");
const { createPaymentMethodSchema } = require("../validations/paymentmethod.js");
const { createPaymentMethod,getAll } = require("../controllers/paymentmethod");

router.post("/", jwtValidator, joiValidator.body(createPaymentMethodSchema), createPaymentMethod);

router.get("/", jwtValidator, getAll);

module.exports = router;