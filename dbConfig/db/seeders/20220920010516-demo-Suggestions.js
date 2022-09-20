'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Suggestions",
      [
        {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus.",
          problemId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus.",
          problemId: 2,
          userId: 2,
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
