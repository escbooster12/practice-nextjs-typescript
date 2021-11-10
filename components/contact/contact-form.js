import { useState } from 'react';

import { saveMessage } from '../../api/contact';
import useNotification from '../../hooks/useNotification';

import classes from './contact-form.module.css';

const ContactForm = (props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const { updateNotificationStates, Notification } = useNotification();

  const clearStates = () => {
    setEmail('');
    setName('');
    setMessage('');
  };

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    updateNotificationStates({
      status: 'pending',
      message: 'Your message is on its way!',
    });

    try {
      await saveMessage({ email, name, message });
      updateNotificationStates({
        status: 'success',
        message: 'Message sent successfully!',
      });
      clearStates();
    } catch (error) {
      updateNotificationStates({
        status: 'failed',
        message: error,
      });
    }
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.action}>
          <button>Send Message</button>
        </div>
        <Notification />
      </form>
    </section>
  );
};

export default ContactForm;
