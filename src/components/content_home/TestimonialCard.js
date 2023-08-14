import React from 'react';
import '../content_home/TestimonialCard.css';

const TestimonialCard = ({ name, role, content, imageSrc }) => {
  return (
    <div className="testimonial-card">
      <div className="circle">
        <img src={process.env.PUBLIC_URL + imageSrc} alt={name} className="circle-image" />
      </div>
      <div className="card-content">
        <h4>{name}</h4>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;