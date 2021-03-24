import React from 'react';
import { Twitter } from '../../components';
import { Col, Row } from '../../styles';

import { Container } from './styles';

function Contacts() {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Twitter />
        </Col>

        <Col>
          <Twitter />
        </Col>

        <Col xs={3}>
          <Twitter />
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
