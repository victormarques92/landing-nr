import React from 'react';
import Head from 'next/head';
import {
  About,
  Contacts,
  Footer,
  Hero,
  Highlighted,
} from '../sections';

const Home = () => {
  return (
    <>
      <Head>
        <title>Credit Innovation</title>
      </Head>

      <Hero />

      {/* <About /> */}

      {/* <Highlighted /> */}

      <Contacts />

      <Footer />
    </>
  );
};

export default Home;
