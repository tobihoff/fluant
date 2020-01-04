import React from 'react';

export const UserContext = React.createContext([{}, () => {}]);

export const UserProvider = ({ children }) => {
  const [state, setState] = React.useState({
    login: false,
    currentUser: null
  });

  return <UserContext.Provider value={[state, setState]}>{children}</UserContext.Provider>;
};
