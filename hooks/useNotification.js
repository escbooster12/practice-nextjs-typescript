import React, { useState, useEffect } from 'react';

import Notification from '../components/ui/notification';

const useNotification = (props) => {
  const [states, setStates] = useState({
    status: '',
    title: '',
    message: '',
  });
  const status = states.status;

  useEffect(() => {
    if (status !== '') {
      const timer = setTimeout(() => {
        setStates({ ...states, status: '', message: '' });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [states]);

  const updateNotificationStates = (params) => setStates({ ...states, ...params });

  const component = (params) => {
    let notification = states;
    if (notification.title === '') {
      notification = { ...states, title: notification.message, message: '' };
    }
    return status ? <Notification {...notification} /> : '';
  };

  return {
    updateNotificationStates,
    Notification: component,
  };
};

export default useNotification;
