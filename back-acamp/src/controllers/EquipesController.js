/* eslint-disable class-methods-use-this */
// const Equipes = require('../models/equipes');
import Equipes from '../models/equipes';

class EquipesController {
  async store(req, res) {
    const {
      // eslint-disable-next-line camelcase
      id, equipe_1, pontos_1, equipe_2, pontos_2, equipe_3, pontos_3,
    } = await Equipes.create(req.body);

    return res.json({
      id,
      equipe_1,
      pontos_1,
      equipe_2,
      pontos_2,
      equipe_3,
      pontos_3,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async index(req, res) {
    const equipes = await Equipes.findAll();
    return res.json(equipes);
  }

  // eslint-disable-next-line class-methods-use-this
  async update(req, res) {
    const linha = await Equipes.findByPk(1);

    const { equipe, pontos } = req.body;

    let teste;
    if (equipe === 'YORK') {
      teste = await linha.increment({ pontos_1: pontos });
    }
    if (equipe === 'LANCASTER') {
      teste = await linha.increment({ pontos_2: pontos });
    }
    if (equipe === 'TUDOR') {
      teste = await linha.increment({ pontos_3: pontos });
    }

    return res.json(teste);
  }
}

export default new EquipesController();
