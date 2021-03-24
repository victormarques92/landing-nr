import React from 'react';
import { Twitter } from '../../components';
import { Col, Row } from '../../styles';
import {
  Apoio,
  Container,
  Content,
  Parceiros,
  Btn,
  Contact,
} from './styles';
import * as images from '../../images';

function Contacts() {
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

      <Row>
        <Col xs={3}>
          <Twitter />
        </Col>

        <Col xs={4}>
          <Content>
            <h2>Receba as informações no seu e-mail</h2>

            <form>
              <input
                type="text"
                name="name"
                placeholder="Nome"
              />

              <input
                type="email"
                name="email"
                placeholder="email"
              />

              <input
                type="numer"
                name="telephone"
                placeholder="Celular"
              />
              <br />
              <Btn>
                <input type="submit" value="Enviar" />
              </Btn>
            </form>
          </Content>
        </Col>

        <Col xs={5}>
          <Content>
            <img src={images.logo} alt="logo"/>
          <Contact>
          <h2>Contato</h2>

          <span>atendimento@creditinovation.com.br</span>

          <p>+ 55 11 5555-09834</p>
          </Contact>
          </Content>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
