import React from 'react';
import { LoginPageContainer } from '../components/Container/Container';
import LoginInput, { Label } from '../components/Inputs/Login';
import Hello, { Text } from '../components/Text/Text';
import Form from '../components/Container/Form';
import { SignInContainer } from '../components/Container/Container';
import { ToSignInButton } from '../components/Buttons/Buttons';
import LoginButton from '../components/Buttons/LogInButton';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handelSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:7100/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    setEmail('');
    setPassword('');
  }

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
