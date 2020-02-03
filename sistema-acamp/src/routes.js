/**
 * Routes
 * File that routes every page on the app.
 *
 * Additional librarys:
 *  - React Router Dom
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Admin from './pages/Admin';
import Pontuacao from './pages/Pontuacao';
import Recadinhos from './pages/Recadinhos';
import Dicas from './pages/Dicas';
import Personagens from './pages/Personagens';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Pontuacao} />
        <Route path="/recadinhos" component={Recadinhos} />
        <Route path="/dicas" exact component={Dicas} />
        <Route path="/personagens" exact component={Personagens} />

        <PrivateRoute path="/admin" exact component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}
