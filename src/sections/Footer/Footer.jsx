import React from 'react';
import Medias from '../../components/Medias/Medias';
import { Container, Copy } from './styles';

const Footer = () => {
  return (
    <Container>
      <Medias />

      <Copy>
        <p>
          <strong>Política de sigilo e Confidencialidade</strong>
        </p>

        <p>
          Copyright 2021 Credit Innovation Alliance Brasil ·
          Todos os direitos reservados.
        </p>
      </Copy>
    </Container>
  );
};

export default Footer;
