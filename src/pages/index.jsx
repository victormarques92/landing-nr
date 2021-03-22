import React from 'react';
import Head from 'next/head';
import { About, Footer, Hero, Highlighted } from '../sections';

const Home = () => {
  return (
    <>
      <Head>
        <title>Credit Innovation</title>
      </Head>

      <Hero />

      <About />

      <Highlighted />

      <Footer />
    </>
  );
};

export default Home;
