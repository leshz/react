import React from 'react';
import './writeStade.scss';

class WriteStade extends React.Component {

  constructor(props) {
    super(props);
    // this.state = { text: ooo };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { text: '' };
  }

  submitHandler(ev) {
    ev.preventDefault();
    const { onSubmit } = this.props;
    const { text } = this.state;
    onSubmit(ev, text);
    this.setState({ text: '' });

  }

  handleChange(ev) {
    this.setState({ text: ev.target.value });
  }

  render() {
    const textButton = 'Publicar';
    const { text } = this.state;

    return (
      <section>
        <div className='user-stade'>
          <div className='user-stade__form'>
            <form onSubmit={this.submitHandler}>
              <input name='textpost' autoComplete='off' onChange={this.handleChange} value={text || ''} className='user-stade__form--text' type='text' placeholder='Escribte aquí tu estado' />
              <button className='user-stade__form--button' type='submit'>{textButton}</button>
            </form>
          </div>
        </div>
      </section>
    );

  }

}

export default WriteStade;

