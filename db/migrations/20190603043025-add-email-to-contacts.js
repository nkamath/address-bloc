'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contacts',
      'email',
      {
        type: Sequelize.STRING
      });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Contacts', 'email')
  }
};
