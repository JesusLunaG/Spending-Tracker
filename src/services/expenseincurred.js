const ExpenseIncurred = require("../models/expenseincurred");

exports.create = async function (data) {
	const expense = await ExpenseIncurred.create(data);
	return expense;
};

exports.findByUser  = function (userId) {
	return ExpenseIncurred.findAll({
		where: {
			userId,
		},
		order: [['dateexpense', 'DESC']]
	});
};