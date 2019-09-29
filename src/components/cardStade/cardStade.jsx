import React from 'react';
import './cardStade.scss';

const user = 'Julian Rodriguez';

const CardStade = () => (
  <section>
    <div className='card-stade'>
      <article className='card-stade--post'>
        <div className='card-stade--profile'>
          <img className='card-stade--profile__imagen' src='https://picsum.photos/200' alt='foto de perfil' />
        </div>
        <div className='card-stade--content'>
          <h3 className='card-stade--content__user'>{user}</h3>
          <span className='card-stade--content__time'>Hace 2 días</span>
          <p className='card-stade--content__publication'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eum facere facilis nemo repellendus harum, nesciunt recusandae cumque earum velit pariatur quae qui, excepturi optio error quod, debitis mollitia quia.
          </p>
        </div>
      </article>
      <div className='card-stade--resume'>
        <div className='card-stade--reactions'>
          <span className='card-stade--reactions__item' role='img' aria-label='like'>👍🏻</span>
          <span className='card-stade--reactions__item' role='img' aria-label='rock!'>👾</span>
          <span className='card-stade--reactions__item' role='img' aria-label='love'>❤️</span>
        </div>
        <div className='card-stade--counter'>
          <span className='card-stade--counter__comments'>3 Comentarios</span>
        </div>
      </div>
      <div className='card-stade--actions'>
        <button type='button' className='card-stade--actions__button'>Reaccionar</button>
        <button type='button' className='card-stade--actions__button'>Comentar</button>
      </div>

      <div className='comments'>
        <div className='comment'>
          <div className='comment--profile'>
            <img className='comment--profile__img' src='https://picsum.photos/200' alt='foto de perfil' />
          </div>
          <div className='comment--post'>
            <p className='comment--post__user'>{user}</p>
            <p className='comment--post__publication'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eum facere facilis nemo repellendus harum, nesciunt recusandae cumque earum velit pariatur quae qui, excepturi optio error quod, debitis mollitia quia.
            </p>
            <span className='comment--post__time'>Hace 2 días</span>
          </div>
        </div>
        <div className='comment'>
          <div className='comment--profile'>
            <img className='comment--profile__img' src='https://picsum.photos/200' alt='foto de perfil' />
          </div>
          <div className='comment--post'>
            <p className='comment--post__user'>{user}</p>
            <p className='comment--post__publication'>
            Lorem ipsum dllitia quia.
            </p>
            <span className='comment--post__time'>Hace 2 días</span>
          </div>
        </div>
      </div>
    </div>

  </section>
);

export default CardStade;

