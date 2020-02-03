import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  logout = () => {
    localStorage.removeItem('acamp2019token');
  };

  render() {
    return (
      <Container id="sidebar">
        <div id="title">ACAMP</div>
        <hr />

        {/* HOME */}
        <li>
          <Link to="/">
            <span>Pontuacao</span>
          </Link>
        </li>

        <hr />

        {/* FINANCEIRO */}
        <li>
          <Link to="/recadinhos">
            <span>Recadinhos</span>
          </Link>
        </li>

        <hr />

        <li>
          <Link to="/dicas">
            <span>Dicas</span>
          </Link>
        </li>

        <hr />

        <li>
          <Link to="/personagens">
            <span>Personagens</span>
          </Link>
        </li>

        {localStorage.getItem('acamp2019token') === 'erasoisso' && (
          <>
            <hr />
            <li>
              <Link to="/admin">
                <span>Admin</span>
              </Link>
            </li>

            <hr />
            <li>
              <Link onClick={this.logout} to="/">
                <span>Sair</span>
              </Link>
            </li>
          </>
        )}
      </Container>
    );
  }
}
