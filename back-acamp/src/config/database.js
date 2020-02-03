const secret = require('./secret');

module.exports = {
  username: 'acamp',
  password: secret.DATABASE_PASSWORD,
  database: 'acamp',
  host: '127.0.0.1',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    timestamps: true,
    undescored: true,
  },
};
