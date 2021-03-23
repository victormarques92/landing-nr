import React from 'react';
import Button from '../../components/Button/Button';
import * as images from '../../images';
import { Container, Content, Covid, Nav } from './styles';

const Hero = () => {
  return (
    <Content>
      <Covid>COVID 19</Covid>
      <Container>
        <Nav>
          <img src={images.logo} alt="" />
          <Button>enter</Button>
        </Nav>
      </Container>
    </Content>
  );
};

export default Hero;
