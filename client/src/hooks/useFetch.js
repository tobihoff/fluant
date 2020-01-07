import React from 'react';

function useFetch(url) {
  const [data, setData] = React.useState([]);
  const auth = localStorage.getItem('token');

  React.useEffect(() => {
    async function doFetch() {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': auth
        }
      });
      const newData = await res.json();
      setData(newData);
    }
    doFetch();
  }, []);

  return data;
}

export default useFetch;
