'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Accounts', 'date', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Accounts', 'date')
  }
};
