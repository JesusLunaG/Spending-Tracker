const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("expensecategories", {
	name: {
		type: DataTypes.STRING(100),
		allowNull: false,
	}
});