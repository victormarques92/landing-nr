import React from 'react';
import { Container } from './styles';
import Link from 'next/link';

const Button = ({
  children,
  primary,
  download,
  href,
  ...rest
}) => {
  if (download) {
    return (
      <Container primary={primary}>
        <a download {...rest}>
          {children}
        </a>
      </Container>
    );
  }

  if (href) {
    return (
      <Container primary={primary}>
        <Link href={href} {...rest}>
          {children}
        </Link>
      </Container>
    );
  }

  return (
    <Container primary={primary}>
      <button {...rest}>{children}</button>
    </Container>
  );
};

export default Button;
