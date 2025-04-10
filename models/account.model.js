const OccupationEnum = require("../models/enums/occupation.enum");

module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define("Account", {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    occupation: {
      type: Sequelize.ENUM,
      values: Object.values(OccupationEnum),
      allowNull: false,
      unique: true,
    },
    // date: {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.NOW,
    // },
  });

  return Account;
};
