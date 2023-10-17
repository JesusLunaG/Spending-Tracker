const { create, findByUser } = require("../services/expenseincurred");

exports.createExpense = async function (request, response) {
	const { descriptionexpense, amount, dateexpense, paymentmethodId, expensecategoryId } = request.body;
	const { id } = request.user;

	const paymentmethod = await create({ descriptionexpense, amount, dateexpense, paymentmethodId, expensecategoryId, userId: id });

	response.status(201).json(paymentmethod);
};

exports.getAll = async function (request, response) {
	const { id } = request.user;
	const paymentmethods = await findByUser(id);
	response.status(200).json(paymentmethods);
};