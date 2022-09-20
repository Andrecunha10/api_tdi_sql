'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Problems",
      [
        {
          name: "Hora Extra",
          shortDescription: "Elevado custo com horas extras",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus.",
          departament: "Recursos Humanos",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Reclamação Clientes",
          shortDescription: "Aumento do número de reclamações de clientes",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus.",
          departament: "Custumer Service",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date()
        },
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
