import React from 'react';
import { LoginPageContainer } from '../components/Container/Container';
import LoginInput from '../components/Inputs/Login';
import { LoginButton } from '../components/Buttons/Buttons';
import Hello, { Text } from '../components/Text/Text';

export default function LoginPage() {
  return (
    <LoginPageContainer>
      <Hello>Hi!</Hello>
      <Text>Sign in to your account</Text>
      <LoginInput type="text" placeholder="Name" />
      <LoginInput type="password" placeholder="Password" />
      <LoginButton>Sign in</LoginButton>
    </LoginPageContainer>
  );
}
