/* eslint-disable class-methods-use-this */
import Recadinhos from '../models/recadinhos';

class RecadinhosController {
  async store(req, res) {
    const {
      // eslint-disable-next-line camelcase
      id, para, recadinho, data,
    } = await Recadinhos.create(req.body);

    return res.json({
      id,
      para,
      recadinho,
      data,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async index(req, res) {
    const recadinhos = await Recadinhos.findAndCountAll();
    return res.json(recadinhos);
  }

  async delete(req, res) {
    const { id } = req.params;
    const recadinho = await Recadinhos.findByPk(id);

    await recadinho.destroy();

    return res.send();
  }
}

export default new RecadinhosController();
