/* eslint-disable class-methods-use-this */
import Dicas from '../models/dica';

class DicasController {
  async store(req, res) {
    const {
      id, dica, equipe1, equipe2, equipe3,
    } = await Dicas.create(req.body);

    return res.json({
      id, dica, equipe1, equipe2, equipe3,
    });
  }

  async index(req, res) {
    const equipe1 = await Dicas.findAll({ where: { equipe1: 'YORK' } });
    const equipe2 = await Dicas.findAll({ where: { equipe2: 'LANCASTER' } });
    const equipe3 = await Dicas.findAll({ where: { equipe3: 'TUDOR' } });

    return res.json({ equipe1, equipe2, equipe3 });
  }

  async update(req, res) {
    const { id, numeroEquipe } = req.params;

    const dica = await Dicas.findByPk(id);

    let dicas;

    if (numeroEquipe == 1) {
      dicas = await dica.update({ equipe1: 'YORK' });
    }
    if (numeroEquipe == 2) {
      dicas = await dica.update({ equipe2: 'LANCASTER' });
    }
    if (numeroEquipe == 3) {
      dicas = await dica.update({ equipe3: 'TUDOR' });
    }
    return res.json(dicas);
  }
}

export default new DicasController();
