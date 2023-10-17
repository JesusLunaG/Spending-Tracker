const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("notificaciones", {
	description: {
		type: DataTypes.STRING(250),
		allowNull: false,
	},
	datenotification: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	isread: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	}
});