import React from 'react';

function useFetch(url) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    async function fetchUser() {
      const response = await fetch(url);
      const newData = await response.json();
      setUser(newData);
    }

    doFetch();
  }, []);

  return user;
}

export default useFetch;
