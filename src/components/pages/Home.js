import React from 'react';
import Hero from "../hero/Hero";
import ContentHome from '../content_home/ContentHome';
import CardData from '../content_home/CardData';
import SliderData from '../content_home/SliderData';
import TestimonialData from '../content_home/TestimonialData';

function Home() {
 
  return (
    <div>
      <Hero />
      <ContentHome />
      <CardData />
      <SliderData />
      <TestimonialData />
    </div>
  );
}

export default Home;
