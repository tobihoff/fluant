import React from 'react';
import { useHistory } from 'react-router-dom';

export const UserContext = React.createContext([{}, () => {}]);

export const UserProvider = props => {
  const history = useHistory();

  const [user, setUser] = React.useState({});

  async function getUser(auth) {
    const res = await fetch('/api/auth', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
      }
    });
    const me = await res.json();
    setUser({
      name: me.name,
      email: me.email,
      img: me.img,
      id: me._id
    });
  }

  async function login(email, password) {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      await getUser(data.token);
      history.push('/profile');
    }
  }

  function logout() {
    localStorage.removeItem('token');
    setUser(false);
    history.push('/login');
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>{props.children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return React.useContext(UserContext).user;
};

export const useLogin = () => {
  return React.useContext(UserContext).login;
};

export const useLogout = () => {
  return React.useContext(UserContext).logout;
};
