import React from 'react';
import LoginName from '../components/Login';

export default {
  title: 'Login'
};

export const LoginArea = () => (
  <>
    <LoginName type="text" placeholder="Name" />
    <LoginName type="password" placeholder="Password" />
  </>
);
