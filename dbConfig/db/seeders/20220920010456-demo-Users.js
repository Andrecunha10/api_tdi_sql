'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "colaborador@colaborador.com",
          password: "$2a$10$zw9eaFE/dYdMXmXVNmKUUOT60akWlIpc9vIY.4T.usl6plSRZ88YC",
          name: "Francisco Chagas",
          nickname: "Chico",
          departament: "RH",
          type: 2,
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "andre@andre.com",
          password: "$2a$10$aub/u5L8su1BH5NitEzs2OlW144FbdnGtnchK6EMlGRHEDhBm97ya",
          name: "André Luiz da Cunha",
          nickname: "André Cunha",
          departament: "Dev",
          type: 1,
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
