const { create, findOneByEmail } = require("../services/user");

exports.createUser = async function (request, response) {
	const { email, password } = request.body;

	const userCurrent = await findOneByEmail(email);

	if (!userCurrent) {
		const user = await create({ email, password });
		response.status(201).json(user);
	}
	else {
		response.status(400).json({
			message: "¡Ya existe un usuario con el email proporcionado!"
		});
	}
};