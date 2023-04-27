import React from 'react';
import { CardItem } from './common';
import { mockAegData } from '../constants';
import './AegComponent.scss';

const AegComponent = () => {
  return (
    <div className='aeg-component_container'>
      <div className='aeg-component_label'>ALL THE LATEST FROM AEG</div>
      <div className='aeg-component_cards-container'>
        {mockAegData.map((aeg) => (
          <CardItem
            key={aeg.id}
            imageSrc={aeg.imageSrc}
            title={aeg.title}
            description={aeg.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AegComponent;