'use strict';

/** @type {import('sequelize-cli').Migration} */
// cole esse código dentro do arquivo da migration "books"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      releaseYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'release_year', // só precisamos definir explicitamente os campos com nomes compostos, por causa da semelhança entre camelCase e snake_case
      },
      totalPages: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'total_pages', // ambos começam com letra minúscula, quando temos duas palavras que existe diferença
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('books');
  },
};

