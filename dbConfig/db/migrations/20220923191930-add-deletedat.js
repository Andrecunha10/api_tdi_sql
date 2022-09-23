"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("Users", "deletedAt", {
          allowNull: true,
          type: Sequelize.DATE
        });
    
        await queryInterface.addColumn("Suggestions", "deletedAt", {
          allowNull: true,
          type: Sequelize.DATE
        });
    
        await queryInterface.addColumn("Problems", "deletedAt", {
          allowNull: true,
          type: Sequelize.DATE
        });
      },
      async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("Users");
        await queryInterface.removeColumn("Suggestions");
        await queryInterface.removeColumn("Problems");
      }
};
