import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from "./TestimonialCard";
import './TestimonialCard.css'

const testimonials = [
  {
    name: 'John Doe 1',
    role: 'CEO',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: '/images/bed1.jpg',
  },
  {
    name: 'John Doe 2',
    role: 'CTO',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: 'path/to/image2.jpg',
  },
  {
    name: 'John Doe 3',
    role: 'COO',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: 'path/to/image3.jpg',
  },
  {
    name: 'John Doe 4',
    role: 'CFO',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: 'path/to/image4.jpg',
  },
  {
    name: 'John Doe 5',
    role: 'CFO',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: 'path/to/image4.jpg',
  },
  // Add more testimonials
];

const TestimonialData = () => {
  const settings = {
    dots: true,
    infinite: false, // Don't loop back to the beginning
    speed: 500,
    slidesToShow: 4, // Show 4 cards in one slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

    return (
      <div className="testimonial-slider">
        <div className="testimonial-heading-container">
          <h1 className="testimonial-heading">Testimonials</h1>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    );
};

export default TestimonialData;