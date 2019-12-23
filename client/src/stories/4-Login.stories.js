import React from 'react';
import LoginInput from '../components/Inputs/Login';

export default {
  title: 'Login'
};

export const LoginArea = () => (
  <>
    <LoginInput type="text" placeholder="Name" />
    <LoginInput type="password" placeholder="Password" />
  </>
);
