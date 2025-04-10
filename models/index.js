const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Account = require("./account.model")(sequelize, Sequelize);

module.exports = db;
