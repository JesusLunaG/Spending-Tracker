const Joi = require("joi");

exports.createPaymentMethodSchema = Joi.object({
	name: Joi.string().min(3).max(100).required(),
});