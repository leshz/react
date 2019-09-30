import React from 'react';
import './resume.scss';

class Resume extends React.Component {

  render() {
    const { reactions, comments } = this.props;
    const text = comments === 1 ? 'comentario ' : 'comentarios ';
    // eslint-disable-next-line react/no-array-index-key
    const renderReactions = reactions.map((reaction, index) => <span className='resume--reactions__item' key={index} role='img' aria-label='like'>{reaction}</span>);

    return (
      <div className='resume'>
        <div className='resume--reactions'>
          {renderReactions}
        </div>
        <div className='resume--counter'>
          <span className='resume--counter__comments'>
            {`${comments} ${text}`}
          </span>
        </div>
      </div>
    );
  }
}

export default Resume;

