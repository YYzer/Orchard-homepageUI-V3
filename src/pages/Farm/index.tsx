import React from 'react';
import FarmCard from './FarmCard';
import FarmFilter from './FarmFilter';
import Accordion from '../../components/Accordion';
import Footer from '../../components/Footer';

const Farm = () => {
  return (
    <>
      <FarmCard />
      <FarmFilter />
      <Accordion />
      <Footer />
    </>
  );
};

export default Farm;