const { Model, DataTypes } = require('sequelize');

class dica extends Model {
  static init(sequelize) {
    super.init(
      {
        dica: DataTypes.STRING,
        equipe1: DataTypes.STRING,
        equipe2: DataTypes.STRING,
        equipe3: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = dica;
