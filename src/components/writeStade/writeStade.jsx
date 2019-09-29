import React from 'react';
import './writeStade.scss';

const WriteStade = () => {
  const textButton = 'Publicar';
  return (
    <section>
      <div className='user-stade'>
        <div className='user-stade__form'>
          <input className='user-stade__form--text' type='text' placeholder='Escribte aquí tu estado' />
          <button className='user-stade__form--button' type='button'>{ textButton }</button>
        </div>
      </div>
    </section>
  );
};

export default WriteStade;

