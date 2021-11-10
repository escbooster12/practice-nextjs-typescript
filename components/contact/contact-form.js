import { useState, useEffect } from 'react';

import Notification from '../ui/notification';
import { saveMessage } from '../../pages/api/contact';
import { getNotifications } from '../../lib/contact-util';

import classes from './contact-form.module.css';

const ContactForm = (props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  let notification = getNotifications(requestStatus, requestError);

  const clearStates = (params) => {
    setEmail('');
    setName('');
    setMessage('');
  };

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    setRequestStatus('pending');

    try {
      await saveMessage({ email, name, message });
      setRequestStatus('success');
      clearStates();
    } catch (error) {
      setRequestStatus('error');
      setRequestError(error);
    }
  };

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

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
      </form>
      {notification && <Notification {...notification} />}
    </section>
  );
};

export default ContactForm;
