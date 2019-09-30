import React from 'react';
import './cardStade.scss';
import Resume from './resumen/resume';
import Comment from './comment/comment';
import Actions from './actions/actions';
import WriteState from '../stateInput/stateInput';

class CardStade extends React.Component {

  constructor(props) {
    super(props);


    const { postInfo } = this.props;
    const { post } = postInfo;
    this.state = { post, showComment: false };

    this.makeAComment = this.makeAComment.bind(this);
  }

  makeAComment(ev, text) {

    debugger;

    const { post } = this.state;
    const newComment = {
      userName: 'Jeffer Barragan',
      avatarURL: 'https://picsum.photos/200',
      contentPost: text,
      timeComment: '0 days',
    };

    post.comments.push(newComment);
    this.setState(post);
  }

  render() {
    const { post, showComment } = this.state;

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
            {post.comments.map((comment, index) => {
              // eslint-disable-next-line react/no-array-index-key
              return <Comment key={index} data={comment} />;
            })}
            <WriteState className={`${showComment ? '' : 'hide'}`} onSubmit={this.makeAComment} />
          </div>
        </div>
      </section>
    );
  }
}

export default CardStade;

