import React from 'react';
import { LoginPageContainer } from '../components/Container/Container';
import LoginInput, { Label } from '../components/Inputs/Login';
import Hello, { Text } from '../components/Text/Text';
import Form from '../components/Container/Form';
import { SignInButton } from '../components/Buttons/SignInButton';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handelSubmit = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <LoginPageContainer>
      <Hello>Hi!</Hello>
      <Text>Sign in to your account</Text>
      <Form onSubmit={handelSubmit}>
        <Label htmlFor="email">Your E-Mail?</Label>
        <LoginInput
          placeholder="E-Mail"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Label htmlFor="password">Your Password?</Label>
        <LoginInput
          oginInput
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </Form>
      <SignInButton type="submit">Sign in</SignInButton>
    </LoginPageContainer>
  );
}
