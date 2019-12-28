import React from 'react';
import { LoginPageContainer } from '../components/Container/Container';
import LoginInput, { Label } from '../components/Inputs/Login';
import Hello, { Text } from '../components/Text/Text';
import Form from '../components/Container/Form';
import { LogInButton } from '../components/Buttons/LogInButton';
import { SignInContainer } from '../components/Container/Container';
import { ToSignInButton } from '../components/Buttons/Buttons';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handelSubmit = e => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <LoginPageContainer>
      <Hello>Hi!</Hello>
      <Text>Login in to your account</Text>
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
        <LoginButton type="submit" value="Login"></LoginButton>
      </Form>
      <SignInContainer>
        <ToSignInButton>Don't you have an account yet?</ToSignInButton>
      </SignInContainer>
    </LoginPageContainer>
  );
}
