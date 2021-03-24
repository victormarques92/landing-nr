import React from 'react';
import Head from 'next/head';
import { Contacts, Footer, Hero, Partners } from '../sections';

const Home = () => {
  return (
    <>
      <Head>
        <title>Credit Innovation</title>
      </Head>

      <Hero />

      <Partners />

      <Contacts />

      <Footer />
    </>
  );
};

export default Home;
