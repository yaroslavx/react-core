import { Component } from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';
import Input from './Input/Input';

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  static getDerivedStateFromProps() {
    console.log('Messages component before mount');
    return null;
  }

  componentDidMount() {
    console.log('Messages component mounted');
  }

  getSnapshotBeforeUpdate() {
    console.log('Messages component before update');
    return null;
  }

  shouldComponentUpdate() {
    console.log('Should messages component update?');
    return true;
  }

  componentDidUpdate() {
    console.log('Messages component updated');
  }

  componentWillUnmount() {
    console.log('Messages component unmount');
  }

  sendMessage(messageText) {
    this.setState((state) => ({
      messages: [...state.messages, { id: Date.now(), text: messageText }],
    }));
  }

  deleteMessage(id) {
    this.setState({
      messages: this.state.messages.filter((message) => message.id !== id),
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Input sendMessage={this.sendMessage} />
        <div className={styles['items-container']}>
          <div className={styles.items}>
            {this.state.messages.map((message) => (
              <Message
                key={message.id}
                message={message}
                deleteMessage={this.deleteMessage}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
