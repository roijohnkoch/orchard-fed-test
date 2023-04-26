import React from 'react';
import { ImagesContainer } from './common';
import image1 from '../images/component_1/Image-01.jpg';
import image2 from '../images/component_1/Image-02.jpg';
import image3 from '../images/component_1/Image-03.jpg';
import { bodyNeedsText, warningText } from '../constants';
import './BodyNeeds.scss'

const BodyNeeds = () => {
  return (
    <div className='body-needs_container'>
      <ImagesContainer firstImage={image1} secondImage={image2} thirdImage={image3} />
      <div className='text-container'>
        <span>ANSWER YOUR BODY'S NEEDS</span>
        <hr className='solid' />
        <p>{bodyNeedsText}</p>
        {warningText && (
          <div className='warning_container'>
            <span className='warning_label'>BE MINDFUL</span>
            <p>{warningText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BodyNeeds;