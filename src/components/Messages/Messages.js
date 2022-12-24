import { Fragment, useState } from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';
import Input from './Input/Input';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  function sendMessage(messageText) {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: messageText, timeStamp: Date.now() },
    ]);
  }

  function deleteMessage(id) {
    setMessages(messages.filter((message) => message.id !== id));
  }

  return (
    <div className={styles.container}>
      <Input sendMessage={sendMessage} />
      <div className={styles['items-container']}>
        <div className={styles.items}>
          {messages.map((message) => (
            <Fragment key={message.id}>
              <Message message={message} deleteMessage={deleteMessage} />
              <span className={styles['time-stamp']}>
                {new Date(message.timeStamp).toLocaleString()}
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
