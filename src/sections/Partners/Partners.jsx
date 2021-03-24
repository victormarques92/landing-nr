import React from 'react';
import * as images from '../../images';

import { Container } from './styles';

const Partners = () => {
  return (
    <Container>
      <div>
        <p>Apoio: </p>
        <img src={images.nota} alt="nota" />
        <img src={images.microsoft} alt="microsoft" />
      </div>

      <div>
        <p>Divulgação: </p>
        <img src={images.uqbar} alt="uqbar" />
      </div>
    </Container>
  );
};

export default Partners;
