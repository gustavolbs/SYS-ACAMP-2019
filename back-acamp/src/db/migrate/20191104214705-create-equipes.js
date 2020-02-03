
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('equipes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    equipe_1: {
      type: Sequelize.STRING,
    },
    pontos_1: {
      type: Sequelize.INTEGER,
    },
    equipe_2: {
      type: Sequelize.STRING,
    },
    pontos_2: {
      type: Sequelize.INTEGER,
    },
    equipe_3: {
      type: Sequelize.STRING,
    },
    pontos_3: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('equipes'),
};
