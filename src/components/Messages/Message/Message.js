import { memo } from 'react';
import styles from './Message.module.css';

const Message = ({ message, deleteMessage }) => {
  return (
    <div className={styles['message-container']}>
      <span className={styles.message}>{message.text}</span>
      <button
        className={styles.button}
        onClick={() => deleteMessage(message.id)}
      >
        &times;
      </button>
    </div>
  );
};

export default memo(Message);
