'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
     await queryInterface.bulkInsert('users', [
        {id: 1,name: "Alyna", surname: "Nastas", phone: "666555444", email: "alyna@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", RolId: 1},
        {id: 2,name: "Ignacio", surname: "Furio", phone: "333222111", email: "ignacio@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", RolId: 2},
        {id: 3,name: "Marcos", surname: "Garrido", phone: "888777555", email: "marcos@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", RolId: 2},
   
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('users', null, {});
     */
  }
};
