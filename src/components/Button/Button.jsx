import React from 'react';
import { Btn } from './styles';

const Button = ({ children, bg, color }) => {
  return (
    <Btn bg={bg} color={color}>
      {children}
    </Btn>
  );
};

export default Button;
