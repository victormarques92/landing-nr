import React from 'react';
import Head from 'next/head';
import { About, Hero } from '../sections';

const Home = () => {
  return (
    <>
      <Head>
        <title>Credit Innovation</title>
      </Head>

      <Hero />

      <About />
    </>
  );
};

export default Home;
