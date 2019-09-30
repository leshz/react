import React from 'react';
import './stateInput.scss';

class WriteState extends React.Component {

  constructor(props) {
    super(props);
    // this.state = { text: ooo };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { text: '', hideButton: true };
  }

  submitHandler(ev) {
    ev.preventDefault();
    const { onSubmit } = this.props;
    const { text } = this.state;
    onSubmit(ev, text);
    this.setState({
      text: '', hideButton: true });
  }

  handleChange(ev) {
    if (ev.target.value !== '') {
      this.setState({ text: ev.target.value });
      this.setState({ hideButton: false });
    } else {
      this.setState({ text: '' });
      this.setState({ hideButton: true });
    }
  }

  render() {
    const textButton = 'Publicar';
    const { text, hideButton } = this.state;

    return (

      <div className='user-stade'>

        <form className='user-stade__form' onSubmit={this.submitHandler}>
          <input name='textpost' autoComplete='off' onChange={this.handleChange} value={text || ''} className='user-stade__form--text' type='text' placeholder='Escribte aquí tu estado' />
          <button className={`user-stade__form--button ${hideButton ? 'hide' : ''}`} type='submit'>{textButton}</button>
        </form>

      </div>
    );

  }

}

export default WriteState;

