import { PureComponent } from 'react';
import styles from './Message.module.css';

class Message extends PureComponent {
  componentDidMount() {
    console.log('Message mounted');
  }

  getSnapshotBeforeUpdate() {
    console.log('Message before update');
    return null;
  }

  componentDidUpdate() {
    console.log('Message updated');
  }

  componentWillUnmount() {
    console.log('Message unmount');
  }

  render() {
    return (
      <div className={styles['message-container']}>
        <span className={styles.message}>{this.props.message.text}</span>
        <button
          className={styles.button}
          onClick={() => this.props.deleteMessage(this.props.message.id)}
        >
          &times;
        </button>
      </div>
    );
  }
}

export default Message;
