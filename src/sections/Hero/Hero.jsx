import React from 'react';
import * as images from '../../images';
import {
  Container,
  Content,
  Covid,
  Credit,
  Nav,
} from './styles';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Button } from '../../components';

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
          <h1>11 e 12 de maio</h1>

        </Credit>
      </Container>
    </Content>
  );
};

export default Hero;
