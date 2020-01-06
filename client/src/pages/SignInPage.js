import React from 'react';
import { LoginPageContainer } from '../components/Container/Container';
import LoginInput, { Label } from '../components/Inputs/Login';
import Hello, { Text } from '../components/Text/Text';
import Form from '../components/Container/Form';
import { ToSignInButton } from '../components/Buttons/Buttons';
import { SignInContainer } from '../components/Container/Container';
import LoginButton from '../components/Buttons/LogInButton';

export default function LoginPage() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handelSubmit(event) {
    event.preventDefault();
    console.log(name, email, password);
    try {
      const response = fetch('http://localhost:7100/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
      const data = response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <LoginPageContainer>
      <Hello>Hi!</Hello>
      <Text>Sign up to your account</Text>
      <Form onSubmit={handelSubmit}>
        <Label htmlFor="name">Your Name?</Label>
        <LoginInput
          placeholder="Name"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
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
        <LoginButton type="submit" value="Sign up"></LoginButton>
      </Form>
      <SignInContainer>
        <ToSignInButton to="/login">Back to the Login!</ToSignInButton>
      </SignInContainer>
    </LoginPageContainer>
  );
}
