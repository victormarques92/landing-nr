import React from 'react';
import {
  FaShare,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { Container } from './styles';

const Medias = () => {
  return (
    <Container>
      <a href="http://twitter.com/" target="blank">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/" target="blank">
        <FaLinkedinIn />
      </a>
      <a href="https://instagram.com/" target="blank">
        <FaInstagram />
      </a>
      <a href="https://instagram.com/" target="blank">
        <FaShare />
      </a>
    </Container>
  );
};

export default Medias;
