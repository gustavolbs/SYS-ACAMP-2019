module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('dicas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    dica: {
      type: Sequelize.STRING,
    },
    equipe1: {
      type: Sequelize.STRING,
    },
    equipe2: {
      type: Sequelize.STRING,
    },
    equipe3: {
      type: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('dicas'),
};
