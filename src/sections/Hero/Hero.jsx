import React from 'react';
import * as images from '../../images';
import { Container, Covid, Nav } from './styles';

const Hero = () => {
  return (
    <Container>
      <Covid>COVID 19</Covid>
      <Nav>
        <img src={images.logo} alt="" />
        <button>enter</button>
      </Nav>
    </Container>
  );
};

export default Hero;
