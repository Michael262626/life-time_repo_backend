const OccupationEnum = require("./enums/occupation.enum")

module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = Sequelize

  const Account = sequelize.define("Account", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    occupation: {
      type: DataTypes.ENUM,
      values: Object.values(OccupationEnum),
      allowNull: false,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  return Account
}
