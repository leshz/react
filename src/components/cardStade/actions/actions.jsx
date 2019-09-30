import React from 'react';
import './actions.scss';

class Actions extends React.Component {

  constructor(props) {
    super(props);
    this.handleReactionButton = this.handleReactionButton.bind(this);
  }

  handleReactionButton() {
    const { onClick } = this.props;
    onClick();
  }

  render() {

    return (
      <div className='actions'>
        <button type='button' className='actions--button' onClick={this.handleReactionButton}>Reaccionar</button>
        <button type='button' className='actions--button'>Comentar</button>
      </div>

    );
  }

}

export default Actions;

