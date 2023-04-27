import React from 'react';
import './CardItem.scss';

const CardItem = ({ imageSrc, title, description }) => {
  const onAnchorClick = (event) => {
    console.log(event);
  }

  return (
    <div className='card-item_container'>
      <img src={imageSrc} style={{ borderBottom: '5px solid red' }} alt='' />
      <div className='card-item_title'>{title}</div>
      <p>{description}</p>
      <div className='card-item_button' onClick={onAnchorClick}>READ MORE</div>
    </div>
  );
}

export default CardItem;