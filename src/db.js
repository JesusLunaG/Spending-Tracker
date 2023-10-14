const { connect, sync } = require("./models/sequelize");
const User = require("./models/user");
const ExpenseCategory = require("./models/expensecategory");
const ExpenseIncurred = require("./models/expenseincurred");
const PaymentMethod = require("./models/paymentmethod");

// "Un usuario registra muchos gastos"
User.hasMany(ExpenseIncurred);
ExpenseIncurred.belongsTo(User);

// "Un usuario registra muchos metodos de pago"
User.hasMany(PaymentMethod);
PaymentMethod.belongsTo(User);

// "Un usuario registra muchas categorias de pago"
User.hasMany(ExpenseCategory);
ExpenseCategory.belongsTo(User);

// "El gasto de un usuario tiene una categoria"
ExpenseIncurred.belongsTo(ExpenseCategory);
// "El gasto de un usuario tiene un metodo de pago"
ExpenseIncurred.belongsTo(PaymentMethod);


exports.initDatabase = async function () {
	await connect();
	await sync();
};