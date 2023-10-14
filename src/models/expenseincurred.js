const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("expensesincurred", {
	descriptionexpense: {
		type: DataTypes.STRING(150),
		allowNull: false,
	},
    amount: {
        type: DataTypes.FLOAT,
		allowNull: false,
    },
    dateexpense: {
        type: DataTypes.DATE,
		allowNull: false, 
    }
});