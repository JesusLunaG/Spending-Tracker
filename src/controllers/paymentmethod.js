const { create, findByUser } = require("../services/paymentmethod");

exports.createPaymentMethod = async function (request, response) {
	const { name } = request.body;
	const { id } = request.user;

	const paymentmethod = await create({ name, userId: id });

	response.status(201).json(paymentmethod);
};

exports.getAll = async function (request, response) {
	const { id } = request.user;
	const paymentmethods = await findByUser(id);
	response.status(200).json(paymentmethods);
};