import { useState } from 'react';

import useAuthForm from '../../hooks/useAuthForm';
import classes from './auth-form.module.css';

const LoginForm = (props) => {
  const [form, setForm] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signup, Notification } = useAuthForm();

  const switchForm = (params) => setForm(form === 'login' ? 'signup' : 'login');

  const submitFormHandler = (event) => {
    event.preventDefault();
    signup({ email, password });
  };

  return (
    <section className={classes.auth}>
      <h1>{form === 'login' ? 'Login' : 'Signup'}</h1>
      <form onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>Login</button>

          <button className={classes.toggle} type="button" onClick={switchForm}>
            {form === 'login' ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
      <Notification />
    </section>
  );
};

export default LoginForm;
