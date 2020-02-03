import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../components/Sidebar';
import api from '../../services/Api';
import Notificate from '../../utils/Notification';

import { Container, Content, DashboardContainer } from './styles';

export default class Pontuacao extends Component {
  constructor() {
    super();
    this.state = {
      equipe1: [],
      equipe2: [],
      equipe3: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/dicas');

    console.log(response.data.equipe1);

    this.setState({
      equipe1: response.data.equipe1,
      equipe2: response.data.equipe2,
      equipe3: response.data.equipe3,
    });
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
  const enviaCodigo = () => {
    const codigo = document.getElementById('codigo').value;
    if (codigo === 'erasoisso') {
      localStorage.setItem('acamp2019token', codigo);
    }
    if (
      codigo !== 'essafoiaequipe1' &&
      codigo !== 'errouessaea2' &&
      codigo !== 'erasoisso' &&
      codigo !== 'trolleiqueessaea3'
    ) {
      Notificate('Código inválido', 'error');
    } else {
      if (codigo !== 'erasoisso') {
        localStorage.setItem('equipeAcamp2019', codigo);
      }
      window.location.reload();
    }
  };

  return (
    <DashboardContainer>
      <header>
        <h1>SUAS DICAS</h1>
      </header>

      {!localStorage.getItem('equipeAcamp2019') && (
        <>
          <input type="text" id="codigo" placeholder="Código da sua equipe" />
          <button type="submit" onClick={enviaCodigo}>
            Enviar
          </button>
        </>
      )}

      <div className="card-list">
        {localStorage.getItem('equipeAcamp2019') === 'essafoiaequipe1' &&
          equipes.equipe1.map(item => (
            <div id="card-3" className="card">
              <div className="card-content">
                <div className="header-card">
                  <div className="card-title">Dica {item.id}</div>
                  <div className="card-value">{item.dica}</div>
                </div>
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
            </div>
          ))}
        {localStorage.getItem('equipeAcamp2019') === 'errouessaea2' &&
          equipes.equipe2.map(item => (
            <div id="card-2" className="card">
              <div className="card-content">
                <div className="header-card">
                  <div className="card-title">Dica {item.id}</div>
                  <div className="card-value">{item.dica}</div>
                </div>
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
            </div>
          ))}

        {localStorage.getItem('equipeAcamp2019') === 'trolleiqueessaea3' &&
          equipes.equipe3.map(item => (
            <div id="card-1" className="card">
              <div className="card-content">
                <div className="header-card">
                  <div className="card-title">Dica {item.id}</div>
                  <div className="card-value">{item.dica}</div>
                </div>
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
            </div>
          ))}
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
