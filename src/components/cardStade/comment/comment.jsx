import React from 'react';
import './comment.scss';

class Comment extends React.Component {
  render() {

    const { data } = this.props;
    const { userName, contentPost, avatarURL, timeComment } = data;
    return (
      <div className='comment'>
        <div className='comment--profile'>
          <img className='comment--profile__img' src={avatarURL} alt='foto de perfil' />
        </div>
        <div className='comment--post'>
          <p className='comment--post__user'>{userName}</p>
          <p className='comment--post__publication'>
            {contentPost}
          </p>
          <span className='comment--post__time'>{timeComment}</span>
        </div>
      </div>
    );
  }
}

export default Comment;

