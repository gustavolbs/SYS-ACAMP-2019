import express from 'express';
import EquipesController from './controllers/EquipesController';
import RecadinhosController from './controllers/RecadinhosController';
import DicasController from './controllers/DicasController';

const routes = express.Router();

routes.get('/equipes', EquipesController.index);
routes.post('/equipes', EquipesController.store);
routes.put('/equipes', EquipesController.update);

routes.get('/recadinhos', RecadinhosController.index);
routes.post('/recadinhos', RecadinhosController.store);
routes.delete('/recadinhos/:id', RecadinhosController.delete);

routes.get('/dicas', DicasController.index);
routes.post('/dicas', DicasController.store);
routes.get('/dicas/:id/:numeroEquipe', DicasController.update);

module.exports = routes;
