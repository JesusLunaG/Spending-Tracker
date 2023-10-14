const { connect, sync } = require("./models/sequelize");
const User = require("./models/user");
const Transaction = require("./models/transaction");
const Category = require("./models/category");
const Method = require("./models/category");
const Budget = require("./models/budget");
const Currency = require("./models/currency");

exports.initDatabase = async function () {
  await connect();
  await sync();
};
