const ExpenseCategory = require("../models/expensecategory");

exports.create = async function (data) {
	const category = await ExpenseCategory.create(data);
	return category;
};

exports.findByUser  = function (userId) {
	return ExpenseCategory.findAll({
		where: {
			userId,
		},
		order: ['name']
	});
};