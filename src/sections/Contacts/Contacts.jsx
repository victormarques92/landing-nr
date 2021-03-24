import React from 'react';
import { Newslatter, Twitter } from '../../components';
import { Col, Row } from '../../styles';
import { Container, Logo } from './styles';
import * as images from '../../images';

function Contacts() {
  return (
    <Container id="contacts">
      <Row>
        <Col xs={3}>
          <h3>No Twitter</h3>

          <Twitter />
        </Col>

        <Col xs={4}>
          <h3>Receba as informações no seu e-mail:</h3>

          <Newslatter />
        </Col>

        <Col xs={5}>
          <Logo src={images.logoBlack} alt="logo" />

          <h3>Contato</h3>

          <a href="mailto:atendimento@creditinovation.com.br">
            atendimento@creditinovation.com.br
          </a>

          <a href="tel:+551135828457">(11) 3582-8457</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
