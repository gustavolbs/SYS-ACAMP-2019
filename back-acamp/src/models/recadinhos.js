const { Model, DataTypes } = require('sequelize');

class recadinhos extends Model {
  static init(sequelize) {
    super.init(
      {
        para: DataTypes.STRING,
        recadinho: DataTypes.STRING,
        data: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = recadinhos;
