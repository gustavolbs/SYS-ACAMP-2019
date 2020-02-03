
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('recadinhos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    para: {
      type: Sequelize.STRING,
    },
    recadinho: {
      type: Sequelize.STRING,
    },
    data: {
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('recadinhos'),
};
