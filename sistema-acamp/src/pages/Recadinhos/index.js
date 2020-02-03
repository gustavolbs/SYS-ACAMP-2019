import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../components/Sidebar';
import RecadinhosModal from '../../components/RecadinhosModal';
import api from '../../services/Api';

import {
  Container,
  Content,
  FinancialContainer,
  FinancesTable,
} from './styles';

export default class Recadinhos extends Component {
  constructor() {
    super();
    this.state = {
      quant: null,
      recadinhos: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/recadinhos');

    this.setState({
      quant: response.data.count,
      recadinhos: response.data.rows,
    });
  }

  render() {
    const { quant, recadinhos } = this.state;
    return (
      <Container>
        <Sidebar />
        <Content>
          <FinancialContent quant={quant} recadinhos={recadinhos} />
        </Content>
      </Container>
    );
  }
}

function FinancialContent(recadinhos) {
  return (
    <FinancialContainer>
      <header>
        <h1>RECADINHOS DO CORAÇÃO</h1>
      </header>
      <div className="card-list">
        <div id="card-2" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Recadinhos Enviados</div>
              <div className="card-value">{recadinhos.quant}</div>
            </div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>

        {/* <div id="card-2" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Saídas</div>
              <div className="card-value">$ XXX.XXX,XX</div>
            </div>
          </div>
        </div> */}
      </div>
      <RecadinhosModal />
      {/* <TableFinances recadinhos={recadinhos.recadinhos} /> */}
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
              </tr>
            </thead>
            <tbody>
              {recadinhos.recadinhos.map(item => (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <th>{item.para}</th>
                  <th>{item.recadinho}</th>
                  <th>{item.data}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FinancesTable>
  );
}
