const UserSetting = require("../models/usersetting");

exports.create = async function (data) {
	const notification = await Notification.create(data);
	return notification;
};

exports.findByUser  = function (userId) {
	return Notification.findAll({
		where: {
			userId,
            isread: false
		},
		order: ['datenotification', 'DESC']
	});
};