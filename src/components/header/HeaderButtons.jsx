import React from 'react';
import CV from '../../resumeDoc/Ihor_Makoida.pdf'

const HeaderButtons = () => {
  return (
    <div className='buttons-holder'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contacts' className='btn'>Let`s Talk</a>
    </div>
  );
};

export default HeaderButtons;
