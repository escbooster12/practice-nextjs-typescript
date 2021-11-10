import { bcrypt } from '../lib/auth-util';
import { createUser } from '../api/user';
import useNotification from '../hooks/useNotification';

const useAuthForm = (props) => {
  const { updateNotificationStates, Notification } = useNotification();

  const signup = async ({ email, password }) => {
    const hashedPassword = await bcrypt(password);
    try {
      const response = await createUser({ email, password: hashedPassword });

      if (response.status === 201) {
        updateNotificationStates({
          status: 'success',
          message: 'New account was successfully created.',
        });
      }
    } catch (error) {
      updateNotificationStates({
        status: 'failed',
        message: error,
      });
    }
  };

  return {
    signup,
    Notification,
  };
};

export default useAuthForm;
