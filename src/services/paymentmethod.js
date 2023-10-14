const PaymentMethod = require("../models/paymentmethod");

exports.create = function (data) {
	return PaymentMethod.create(data);
};


exports.findByUser  = function (userId) {
	return PaymentMethod.findAll({
		where: {
			userId,
		},
	});
};