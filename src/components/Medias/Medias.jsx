import React from 'react';
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { Container } from './styles';

const Medias = () => {
  return (
    <Container>

      <a  href="#" >
        <FaWhatsapp />
      </a>
      <a  href="#">
        <FaTwitter />
      </a>
      <a  href="#">
        <FaLinkedinIn />
      </a>
      <a  href="#">
        <FaInstagram />
      </a>
    </Container>
  );
};

export default Medias;
