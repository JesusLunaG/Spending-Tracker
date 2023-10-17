const Joi = require("joi");

exports.createExpenseCategorySchema = Joi.object({
	name: Joi.string().min(3).max(200).required(),
});