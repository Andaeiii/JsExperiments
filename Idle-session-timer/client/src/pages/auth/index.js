import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const {
    authState: { user },
  } = useAuth();

  //if the user is logged in.. return navigate component.... 

  if (user) {
    return <Navigate to='/profile' />;
  }

  //else take him to the login/register routes... 

  return (
    <div className='mx-auto w-50'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default Auth;
