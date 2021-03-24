import React from 'react';
import { Anchor, Btn } from './styles';

const Button = ({ children, primary, download, ...rest }) => {
  if (download) {
    return (
      <Anchor download {...rest}>
        {children}
      </Anchor>
    );
  }

  return (
    <Btn primary={primary} {...rest}>
      {children}
    </Btn>
  );
};

export default Button;
