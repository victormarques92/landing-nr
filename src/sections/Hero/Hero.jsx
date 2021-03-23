import React from 'react';
import * as images from '../../images';
import {
  Btn,
  Container,
  Content,
  Covid,
  Credit,
  Nav,
} from './styles';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Button } from '../../components';
import Colors from '../../styles/colors';

const Hero = () => {
  return (
    <Content>
      <Covid>COVID 19</Covid>
      <Container>
        <Nav>
          <img src={images.logo} alt="" />
          <Button>
            <p>Conheça o evento em 60seg</p> <AiFillPlayCircle />
          </Button>
        </Nav>

        <Credit>
          <h3>Credit innovation Summit 2021</h3>
          <h2>11 e 12 de maio</h2>
          <h1>58 09 55 36 </h1>
          <div>
            <span>days</span>
            <span>hours</span>
            <span>minutes</span>
            <span> seconds</span>
          </div>
          <h2>
            Fórum de inovação do mercado <br /> de crédito
            Brasileiro
          </h2>
          <p>
            O <strong>evento online</strong> CREDIT INNOVATION
            SUMMIT 2021 objetiva preencher uma lacuna de mercado
            <br /> que é a de servir de vitrine e referência para
            o aspecto tecnológico do universo de crédito
            corporativo.
          </p>
        </Credit>
        <Btn>
          <div>
            <Button bg={Colors.primary}>Evento</Button>
          </div>
          <div>
            <Button bg={Colors.white} color={Colors.black}>Evento</Button>
          </div>
        </Btn>
      </Container>
    </Content>
  );
};

export default Hero;
