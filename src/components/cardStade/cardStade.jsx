import React from 'react';
import './cardStade.scss';
import Resume from './resumen/resume';
import Comment from './comment/comment';
import Actions from './actions/actions';

class CardStade extends React.Component {

  render() {

    const { postInfo } = this.props;
    const { post } = postInfo;
    // eslint-disable-next-line react/no-array-index-key
    const comments = post.comments.map((comment, index) => <Comment key={index} data={comment} />);

    return (
      <section>
        <div className='card-stade'>
          <article className='card-stade--post'>
            <div className='card-stade--profile'>
              <img className='card-stade--profile__imagen' src={post.avatarURL} alt='foto de perfil' />
            </div>
            <div className='card-stade--content'>
              <h3 className='card-stade--content__user'>{post.userName}</h3>
              <span className='card-stade--content__time'>{post.timePost}</span>
              <p className='card-stade--content__publication'>
                {post.contentPost}
              </p>
            </div>
          </article>
          <Resume reactions={post.reactions} comments={post.comments.length} />
          <Actions />
          <div className='comments'>
            {comments}
          </div>
        </div>
      </section>
    );
  }
}

export default CardStade;

