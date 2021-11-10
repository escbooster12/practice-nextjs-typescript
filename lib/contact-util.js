export const getNotifications = (request, message) => {
  const NOTIFICATIONS = {
    pending: {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    },
    success: {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    },
    error: {
      status: 'error',
      title: 'Error!',
      message: message,
    },
    undefined: undefined,
  };

  return NOTIFICATIONS[request];
};
