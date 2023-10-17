const Joi = require("joi");
const joi = require("../middlewares/joi");

exports.createExpenseIncurredSchema = Joi.object({
	descriptionexpense: Joi.string().min(5).max(150).required(),
	amount: Joi.number().required(),
    dateexpense: Joi.date().required(),
	expensecategoryId: Joi.number(),
	paymentmethodId: Joi.number()
});