import React, { useState } from 'react';
import './ImagesContainer.scss';

const ImagesContainer = ({ firstImage, secondImage, thirdImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const onClickImage = (image) => {
    setSelectedImage(image);
  }

  return (
    <>
      <div className='images-container'>
        <div className='images-container_box'>
          <div className='box_1'>
            <img src={firstImage} className='image_style' onClick={() => onClickImage(firstImage)} alt='' />
          </div>
          <div className='box_2'>
            <img src={secondImage} className='image_style' onClick={() => onClickImage(secondImage)} alt='' />
            <img src={thirdImage} className='image_style' onClick={() => onClickImage(thirdImage)} alt='' />
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className='image_modal'>
          <span className='image_modal-close' onClick={() => setSelectedImage(null)}>&times;</span>
          <img src={selectedImage} className='image_modal-content' alt=''/>
        </div>
      )}
    </>
  );
}

export default ImagesContainer;