const { Sequelize } = require("sequelize");

const {
  FORCE_DB_UPDATE,
  MYSQL_HOST,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

const sequelize = new Sequelize({
  dialect: "mysql",
  host: MYSQL_HOST,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  //Nam of database
  database: MYSQL_DATABASE,
});

exports.sequelize = sequelize;

exports.connect = async function () {
  try {
    await sequelize.authenticate();
    console.log("> Conectado a la bd");
  } catch (e) {
    console.error("> No se pudo conectar a la base de datos:(");
    console.error(e);
  }
};

exports.sync = async function () {
  try {
    //Actualiza las tablas dentro de la base de datos
    await sequelize.sync({ force: FORCE_DB_UPDATE === "yes" });
    console.log("> Base de datos actualizada!");
  } catch (e) {
    console.error("> No se puede actualizar base de datos");
    console.error(e);
  }
};
