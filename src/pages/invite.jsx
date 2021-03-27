import React from 'react';
import Head from 'next/head';
import { Footer } from '../sections';
import { Form } from '../components';
import { Container } from '../styles';

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Credit Innovation</title>
      </Head>

      <Form />

      <Footer />
    </Container>
  );
};

export default Home;
