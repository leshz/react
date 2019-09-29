import React from 'react';
import './cardStade.scss';

const user = 'Julian Rodriguez';

const CardStade = () => (
  <section>
    <div className='card-stade'>
      <div className='card-stade--profile'>
        <img className='card-stade--profile__imagen' src='https://picsum.photos/200' alt='foto de perfil' />
      </div>
      <article>
        <div className='card-stade--post'>
          <h3 className='code-stade--post__user'>{user}</h3>
          <span className='code-stade--post__time'>Hace 2 días</span>
          <p className='code-stade--post__user'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eum facere facilis nemo repellendus harum, nesciunt recusandae cumque earum velit pariatur quae qui, excepturi optio error quod, debitis mollitia quia.
          </p>
        </div>
        <div className='card-stade--resume'>
          <div className='card-stade--resume__reactions'>
            ll
          </div>
          <div className='card-stade--resume__counter'>
            ll
          </div>
        </div>
        <div className='card-stade--buttons'>
          <div className='card-stade--buttons__buttonwhite'>
            ll
          </div>
          <div className='card-stade--buttons__buttonwhite'>
            ll
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default CardStade;

