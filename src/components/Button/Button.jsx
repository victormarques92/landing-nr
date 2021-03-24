import React from 'react';
import { Btn } from './styles';

const Button = ({ children, primary, ...rest }) => {
  return (
    <Btn primary={primary} {...rest}>
      {children}
    </Btn>
  );
};

export default Button;
