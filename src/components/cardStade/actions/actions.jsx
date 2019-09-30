import React from 'react';
import './actions.scss';

class Actions extends React.Component {

  constructor(props) {
    super(props);
    this.handleReactionButton = this.handleReactionButton.bind(this);
    this.handleCommentButton = this.handleCommentButton.bind(this);
  }

  handleReactionButton() {
    const { onClick } = this.props;
    const reaction = 'react';
    onClick(reaction);
  }

  handleCommentButton() {
    const { onClick } = this.props;
    const comment = 'comment';
    onClick(comment);
  }

  render() {

    return (
      <div className='actions'>
        <button type='button' className='actions--button' onClick={this.handleReactionButton}>Reaccionar</button>
        <button type='button' className='actions--button' onClick={this.handleCommentButton}>Comentar</button>
      </div>

    );
  }

}

export default Actions;

