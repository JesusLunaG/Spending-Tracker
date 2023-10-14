const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("users", {
	email: {
		type: DataTypes.STRING(150),
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING(250),
		allowNull: false
	}
});