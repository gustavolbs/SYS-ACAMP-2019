const { Model, DataTypes } = require('sequelize');

class equipes extends Model {
  static init(sequelize) {
    super.init(
      {
        equipe_1: DataTypes.STRING,
        pontos_1: DataTypes.INTEGER,
        equipe_2: DataTypes.STRING,
        pontos_2: DataTypes.INTEGER,
        equipe_3: DataTypes.STRING,
        pontos_3: DataTypes.INTEGER,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = equipes;
