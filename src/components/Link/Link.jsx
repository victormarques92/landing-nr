import React from 'react';

import { Container } from './styles';

const Link = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Link;
