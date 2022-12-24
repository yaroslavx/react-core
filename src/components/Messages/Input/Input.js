import { Component, createRef } from 'react';
import styles from './Input.module.css';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      messageText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.inputRef = createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  static getDerivedStateFromProps() {
    console.log('Input before mount');
    return null;
  }

  componentDidMount() {
    console.log('Input mounted');
    this.focusInput();
  }

  getSnapshotBeforeUpdate() {
    console.log('Input before update');
    return null;
  }

  shouldComponentUpdate() {
    console.log('Should input update?');
    return true;
  }

  componentDidUpdate() {
    console.log('Input updated');
  }

  componentWillUnmount() {
    console.log('Input unmount');
  }

  handleChange(e) {
    this.setState({
      messageText: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.messageText) {
      this.setState({
        messageText: '',
      });
      this.props.sendMessage(this.state.messageText);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          ref={this.inputRef}
          className={styles.input}
          placeholder='Enter message'
          type='text'
          value={this.state.messageText}
          onChange={this.handleChange}
        />
        <button
          disabled={this.state.messageText.includes('react')}
          className={styles.button}
          type='submit'
        >
          Send message
        </button>
        <button onClick={this.focusInput} className={styles.button}>
          Focus
        </button>
      </form>
    );
  }
}

export default Input;
