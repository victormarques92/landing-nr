import React from 'react';
import Countdown from 'react-countdown';
import { Cont } from './styles';

const Contador = () => {
  // Random component
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
        <Cont>
          {days} {hours} {minutes}{' '}
          {seconds < 10 ? `0${seconds}` : seconds}
          <div>
            <p>Days</p>
            <p>Hours</p>
            <p>minutes</p>
            <p>Second</p>
          </div>
        </Cont>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + 5000000000}
      renderer={renderer}
    />
  );
};

export default Contador;
