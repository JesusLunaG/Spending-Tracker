const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("usersettings", {
	name: {
		type: DataTypes.STRING(150),
		allowNull: false,
	},
	settingvalue: {
		type: DataTypes.STRING(250),
		allowNull: false
	}
});