import React from 'react';
import HeroSection from '../../components/HeroSection';
import Card from '../../components/HomeCard';
import Info from '../../components/HomeInfo';
import RoadMap from '../../components/HomeMap';
import Footer from '../../components/Footer';

const Home = () => {

  return (
    <>
      <HeroSection />
      <Card />
      <Info />
      <RoadMap />
      <Footer />
    </>
  );
};

export default Home;
