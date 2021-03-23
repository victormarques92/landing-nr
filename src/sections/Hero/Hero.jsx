import React from 'react';
import * as images from '../../images';
import {
  Invite,
  Container,
  Content,
  Covid,
  Credit,
  Nav,
} from './styles';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Button, Contador } from '../../components';
import Colors from '../../styles/colors';

const Hero = () => {
  return (
    <Content>
      <Covid>COVID 19</Covid>
      <Container>
        <Nav>
          <img src={images.logo} alt="logo" />
          <Button>
            <p>Conheça o evento em 60seg</p> <AiFillPlayCircle />
          </Button>
        </Nav>

        <Credit>
          <h3>Credit innovation Summit 2021</h3>
          <h2>11 e 12 de maio</h2>

          <Contador />
          <h2>
            Fórum de inovação do mercado <br /> de Crédito
            Corporativo Brasileiro
          </h2>
          <p>
            O <strong>evento online</strong> CREDIT INNOVATION
            SUMMIT 2021 objetiva preencher uma lacuna de mercado
            que
            <br /> é a de servir de vitrine e referência para o
            aspecto tecnológico do universo de crédito
            corporativo.
          </p>
          <Invite>
            <div>
              <Button bg={Colors.primary}>
                Receber um convite
              </Button>
            </div>

            <div>
              <Button bg={Colors.white} color={Colors.black}>
                Save the Date
              </Button>
            </div>
          </Invite>
        </Credit>
      </Container>
    </Content>
  );
};

export default Hero;
