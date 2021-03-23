import React from 'react';
import Countdown from 'react-countdown';
import { Container } from './styles';

const Contador = () => {
  const Completionist = () => <span>Começou !</span>;
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Container>
          {days} {hours}:{minutes}:{seconds}
        </Container>
      );
    }
  };

  <Countdown
    date={Date.now() + 5000000000}
    renderer={renderer}
  />;
};

export default Contador;
