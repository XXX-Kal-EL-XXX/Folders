import React from 'react';
import '../content_home/CardLayout.css'; 

function CardLayout({ title, description, imageUrl }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default CardLayout;
