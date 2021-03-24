import React from 'react';
import Countdown from 'react-countdown';
import { Cont } from './styles';

const Contador = () => {
  const Completionist = () => <span>Começou!</span>;

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <Cont>
          {days > 0 && (
            <div>
              {days}
              <p>DIAS</p>
            </div>
          )}

          {hours > 0 && (
            <div>
              {hours < 10 ? `0${hours}` : hours}
              <p>HORAS</p>
            </div>
          )}

          {minutes > 0 && (
            <div>
              {minutes < 10 ? `0${minutes}` : minutes}
              <p>Minutos</p>
            </div>
          )}

          <div>
            {seconds < 10 ? `0${seconds}` : seconds}
            <p>SEGUNDOS</p>
          </div>
        </Cont>
      );
    }
  };

  return (
    <Countdown
      date={new Date('2021-05-12T12:00:00Z')}
      renderer={renderer}
    />
  );
};

export default Contador;
