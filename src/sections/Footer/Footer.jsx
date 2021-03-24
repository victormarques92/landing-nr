import React from 'react';
import * as images from '../../images';
import {
  Apoio,
  Container,
  Parceiros,
  Copy,
} from './styles';

const Footer = () => {
  return (
    <Container>
      <Parceiros>
        <Apoio>
          <p>Apoio: </p>
          <img src={images.nota} alt="nota" />
          <img src={images.microsoft} alt="microsoft" />
          <img src={images.google} alt="google" />
          <img src={images.la_playa} alt="laPlaya" />
        </Apoio>

        <Apoio>
          <p>Divulgação: </p>
          <img src={images.uqbar} alt="uqbar" />
        </Apoio>
      </Parceiros>

      <Copy>
        <p>
          <strong>Política de sigilo e Confidencialidade</strong>
        </p>

        <p>Copyright</p>
      </Copy>
    </Container>
  );
};

export default Footer;
