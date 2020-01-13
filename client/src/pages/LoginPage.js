import React from 'react';
import { LoginPageContainer } from '../components/Container/Container';
import { useHistory } from 'react-router-dom';
import LoginInput, { Label } from '../components/Inputs/Login';
import Hello, { Text } from '../components/Text/Text';
import Form from '../components/Container/Form';
import { SignInContainer } from '../components/Container/Container';
import { ToSignInButton } from '../components/Buttons/Buttons';
import { LoginButton } from '../components/Buttons/Buttons';
import { UserContext } from '../context/user';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [login, setLogin] = React.useState(false);
  const [user, setUser] = React.useContext(UserContext);
  const history = useHistory();

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
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    setEmail('');
    setPassword('');
  }

  async function loadUser() {
    const auth = localStorage.getItem('token');
    try {
      const res = await fetch('http://localhost:7100/api/auth', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': auth
        }
      });
      const me = await res.json();
      setLogin(true);
      setUser({
        name: me.name,
        email: me.email,
        img: me.img,
        id: me._id
      });
      console.log(me.name);
    } catch (err) {
      console.log(err);
    }
  }

  if (localStorage.token) {
    loadUser().then(history.push('/profile'));
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
        <ToSignInButton to="/register">Don't you have an account yet?</ToSignInButton>
      </SignInContainer>
    </LoginPageContainer>
  );
}
