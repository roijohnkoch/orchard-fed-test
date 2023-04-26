import React from 'react';
import './ImagesContainer.scss';

const ImagesContainer = ({ firstImage, secondImage, thirdImage }) => {
  return (
    <div className='images-container'>
      <div className='images-container_box'>
        <div className='box_1'><img src={firstImage} className='image_style' /></div>
        <div className='box_2'>
          <img src={secondImage} className='image_style' />
          <img src={thirdImage} className='image_style' />
        </div>
      </div>
    </div>
  );
}

export default ImagesContainer;