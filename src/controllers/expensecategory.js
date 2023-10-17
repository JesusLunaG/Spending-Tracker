const { create, findByUser } = require("../services/expensecategory");

exports.createExpenseCategory = async function (request, response) {
	const { name } = request.body;
	const { id } = request.user;

	const category = await create({ name, userId: id });

	response.status(201).json(category);
};

exports.getAll = async function (request, response) {
	const { id } = request.user;
	const categories = await findByUser(id);
	response.status(200).json(categories);
};