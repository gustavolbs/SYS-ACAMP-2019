import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../components/Sidebar';
import api from '../../services/Api';
import Notificate from '../../utils/Notification';

import { Container, Content, DashboardContainer } from './styles';

export default class Personagens extends Component {
  render() {
    return (
      <Container>
        <Sidebar />
        <Content>
          <DashboardContent />
        </Content>
      </Container>
    );
  }
}

function DashboardContent(equipes) {
  return (
    <DashboardContainer>
      <header>
        <h1>Os Personagens</h1>
      </header>

      <div className="card-list">
        <div id="card-4" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">A Rainha</div>
              <div className="card-value">
                Dália, esposa do falecido rei Ribas, por demais apaixonada por
                seu amado, sempre muito comprometida com toda a atribuição de
                rainha, mas disposta a abrir mão de tudo, totalmente, por seu
                marido, nunca deu tanta atenção aos filhos ou a si mesma, sempre
                Ribas, seu marido era seu deus. Após a morte de seu amado ídolo,
                seu marido, a rainha caiu numa depressão profunda, alegando
                estar saudosa por demais, chega a dizer que sua vida não tem
                mais qualquer sentido, distante do seu amado.
              </div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>

        <div id="card-4" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">A Princesa</div>
              <div className="card-value">
                Filha do Rei Ribas, irmã caçula de Gonçalo, considerada por si
                mesma a mais bela dama de todo o reino, ambiciosa por status e
                glória, eis Isabela, a vaidosa princesa.
              </div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>

        <div id="card-4" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">O Príncipe</div>
              <div className="card-value">
                Desde muito cedo Gonçalo se mostrou habilidoso no domínio da
                espada e do escudo, forte guerreiro, honrado por todos, contudo,
                os elogios não o caíram muito bem. Quando derrotou o Dragão da
                Montanha e derrotou o exército imperal se tornou um arrogante e
                orgulhoso, ansioso pelo trono, desejoso por assumir o posto de
                seu pai.
              </div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>

        <div id="card-4" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">O Conselheiro</div>
              <div className="card-value">
                O homem mais confiável do rei Ribas, o maior baú de segredos, o
                cofre ambulante, que se quisesse detonaria todo o reino só com
                sua língua, esse é Anuro, o grande amigo, o conselheiro do Rei,
                presente em suas maiores peripécias e desventuras.
              </div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>

        <div id="card-4" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">O Clérigo</div>
              <div className="card-value">
                “Homem de Deus”, é como chamam Evaldo, o clérigo, o único
                religioso de todo o reino, zeloso pela igreja, e claro, pelo
                bolso dos fiéis, o ganancioso clérigo, desde que assumiu sua
                posição eclesiástica tem se tornado famoso por enricar as custas
                dos leigos, enganados por suas vãs filosofias e doutrinas vazias
                da verdadeira religião, em resumo, poder é sua religião,
                dinheiro é o seu deus.
              </div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>

        <div id="card-4" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Bobo da Corte</div>
              <div className="card-value">
                Bobo da corte, filho de um grande guerreiro, assassinado
                brutalmente diante dos olhos de Seboseira, o bobo, que após seu
                grande trauma, vive em busca de alegrias e prazeres, com um
                toque de psicopatia, um tanto quanto sádico, mas, no fundo, só
                quer mesmo ser feliz.
              </div>
            </div>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
}
