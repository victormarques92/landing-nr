import React from 'react';
import { Btn } from './styles';

const Button = ({ children, bg, primary }) => {
  return (
    <Btn bg={bg} primary={primary}>
      {children}
    </Btn>
  );
};

export default Button;
