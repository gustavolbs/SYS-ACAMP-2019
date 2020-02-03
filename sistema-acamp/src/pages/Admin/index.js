import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../../components/Sidebar';
import DicasModal from '../../components/DicasModal';
import FinancialModal from '../../components/FinancialModal';
import FinancialModalRemove from '../../components/FinancialModalRemove';
import api from '../../services/Api';

import {
  Container,
  Content,
  FinancialContainer,
  FinancesTable,
} from './styles';

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      equipe1: null,
      equipe2: null,
      equipe3: null,
      quant: null,
      recadinhos: [],
    };
  }

  async componentDidMount() {
    let response = await api.get('/equipes');

    this.setState({
      equipe1: response.data[0].pontos_1,
      equipe2: response.data[0].pontos_2,
      equipe3: response.data[0].pontos_3,
    });

    response = await api.get('/recadinhos');

    this.setState({
      quant: response.data.count,
      recadinhos: response.data.rows,
    });
  }

  render() {
    const { equipe1, equipe2, equipe3, quant, recadinhos } = this.state;

    return (
      <Container>
        <Sidebar />
        <Content>
          <FinancialContent
            equipe1={equipe1}
            equipe2={equipe2}
            equipe3={equipe3}
            quant={quant}
            recadinhos={recadinhos}
          />
        </Content>
      </Container>
    );
  }
}

function FinancialContent(dados) {
  return (
    <FinancialContainer>
      <header>
        <h1>ADMIN - PONTUAÇÃO</h1>
      </header>
      <div className="card-list">
        <div id="card-3" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Casa YORK</div>
              <div className="card-value">{dados.equipe1}</div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>

        <div id="card-2" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Casa LANCASTER</div>
              <div className="card-value">{dados.equipe2}</div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>

        <div id="card-1" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Casa TUDOR</div>
              <div className="card-value">{dados.equipe3}</div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>
      </div>
      <FinancialModal />
      <header>
        <h1>DICAS</h1>
      </header>
      <DicasModal />
      <header>
        <h1>RECADINHOS</h1>
      </header>
      <TableFinances recadinhos={dados.recadinhos} />
    </FinancialContainer>
  );
}

function TableFinances(recadinhos) {
  return (
    <FinancesTable>
      <header>Recados</header>
      <div className="bodyTable">
        <div className="divTable">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Para</th>
                <th>Recadinho</th>
                <th>Data</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              {recadinhos.recadinhos.map(item => (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <th>{item.para}</th>
                  <th>{item.recadinho}</th>
                  <th>{item.data}</th>
                  <th>
                    <FinancialModalRemove id={item.id} />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FinancesTable>
  );
}
