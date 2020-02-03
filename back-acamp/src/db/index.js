const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Equipes = require('../models/equipes');
const Recadinhos = require('../models/recadinhos');
const Dicas = require('../models/dica');

const connection = new Sequelize(dbConfig);

Equipes.init(connection);
Recadinhos.init(connection);
Dicas.init(connection);

module.exports = connection;
