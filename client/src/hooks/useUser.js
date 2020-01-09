import React from 'react';
import { UserContext } from '../context/user';

export default async function loadUser(url) {
  const [login, setLogin] = React.useState(false);
  const [user, setUser] = React.useContext(UserContext);

  const auth = localStorage.getItem('token');
  try {
    const res = await fetch(url, {
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
      img: me.img
    });
    console.log(me.name);
  } catch (err) {
    console.log(err);
  }
}
