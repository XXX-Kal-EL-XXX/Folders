import React from 'react';
import CardLayout from '../content_home/CardLayout'


function CardData() {
  const cardsData = [
    {
      title: 'Mountain View',
      description: 'Explore the breathtaking beauty of mountain landscapes.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      title: 'Beach Paradise',
      description: 'Relax and unwind on sandy shores with crystal-clear waters.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
        title: 'Mountain View',
        description: 'Explore the breathtaking beauty of mountain landscapes.',
        imageUrl: 'https://via.placeholder.com/300',
      },
      {
        title: 'Beach Paradise',
        description: 'Relax and unwind on sandy shores with crystal-clear waters.',
        imageUrl: 'https://via.placeholder.com/300',
      },
    // Add more card data here
  ];

  return (
    <div className="cards">
      <div className="card-container">
        {cardsData.map((card, index) => (
          <CardLayout
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CardData;
