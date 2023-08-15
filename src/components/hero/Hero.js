import React from 'react';
import './Hero.css';
import Button from '../button/Button';
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.4, 
  });
  return (
    <div className={inView ? 'hero hero--zoom' : 'hero'} ref={ref}>
      <div className='content'>
        <h1><span className='clr'>Folders </span><span>World</span></h1>
        <p className='search-text'>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button
            icon='login'
            text='Log In'
            size='large'
          />
          <Button
            icon='product'
            text='Product'
            size='large'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
