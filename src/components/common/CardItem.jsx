import React from 'react';
import './CardItem.scss';

const CardItem = ({ imageSrc, title, description }) => {
  return (
    <div className='card-item_container'>
      <img src={imageSrc} style={{ borderBottom: '5px solid red' }}/>
      <div className='card-item_title'>{title}</div>
      <p>{description}</p>
      <div className='card-item_read-more'>
        READ MORE
      </div>
    </div>
  );
}

export default CardItem;