import React from 'react';

function useFetch(url) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const auth = localStorage.getItem('token');
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
