import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../components/Sidebar';
import api from '../../services/Api';

import { Container, Content, DashboardContainer } from './styles';

export default class Pontuacao extends Component {
  constructor() {
    super();
    this.state = {
      equipe1: null,
      equipe2: null,
      equipe3: null,
    };
  }

  async componentDidMount() {
    const response = await api.get('/equipes');

    // console.log(response.data[0].pontos_1);

    this.setState({
      equipe1: response.data[0].pontos_1,
      equipe2: response.data[0].pontos_2,
      equipe3: response.data[0].pontos_3,
    });

    // console.log(this.state.equipe1, this.state.equipe2, this.state.equipe3);
  }

  render() {
    const { equipe1, equipe2, equipe3 } = this.state;

    return (
      <Container>
        <Sidebar />
        <Content>
          <DashboardContent
            equipe1={equipe1}
            equipe2={equipe2}
            equipe3={equipe3}
          />
        </Content>
      </Container>
    );
  }
}

function DashboardContent(equipes) {
  return (
    <DashboardContainer>
      <header>
        <h1>PONTUAÇÃO</h1>
      </header>
      <div className="card-list">
        <div id="card-3" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Casa YORK</div>
              <div className="card-value">{equipes.equipe1}</div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>

        <div id="card-2" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Casa LANCASTER</div>
              <div className="card-value">{equipes.equipe2}</div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>

        <div id="card-1" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Casa TUDOR</div>
              <div className="card-value">{equipes.equipe3}</div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>

        {/* <div id="card-4" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Sócios</div>
              <div className="card-value">XXX.XXX</div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div> */}
      </div>
    </DashboardContainer>
  );
}
