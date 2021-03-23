import React from 'react';
import { Btn } from './styles';

const Button = ({bg, color} ) => {
  return (
    <Btn bg={bg} color={color}>
      <p>Conheça o evento em 60seg</p>{' '}
    </Btn>
  );
};

export default Button;
