import React from 'react';
import { Link } from 'react-router-dom';
import client from '../../client';
import { useAuth } from '../../context';

const Login = () => {
  const { setAuthState } = useAuth();
  const onSubmit = (event) => {
    
    //console.log the event - and fish out the elements from the event object... 
    //if it actually contains a complete reference... 
    //to the username and the password .... 


    event.preventDefault();

    const [email, password] = event.target.elements;

    client
      .post('auth/login', {
        email: email.value,
        password: password.value,
      })
      .then(({ data: { token, user } }) => {
        client.defaults.headers.token = token;
        localStorage.setItem('token', token);
        setAuthState((prevState) => ({
          ...prevState,
          user,
          isAuthenticated: true,
        }));
      })
      .catch(console.log);
  };

  return (
    <div className='text-center'>
      <form className='form-signin' onSubmit={onSubmit}>
        <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
        <label htmlFor='inputEmail' className='sr-only'>
          Email address
        </label>
        <input
          type='email'
          id='inputEmail'
          className='form-control mb-2'
          placeholder='Email address'
          required
          autoFocus
        />
        <label htmlFor='inputPassword' className='sr-only'>
          Password
        </label>
        <input
          type='password'
          id='inputPassword'
          className='form-control mb-3'
          placeholder='Password'
          required
        />
        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          Sign in
        </button>
        <p className='mt-3 mb-3 text-muted text-center'>
          No account ? <Link to='/auth/register'>Create here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
