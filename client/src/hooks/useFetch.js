import React from 'react';

function useFetch(url) {
  const [data, setData] = React.useState([]);

  async function doFetch() {
    const auth = localStorage.getItem('token');
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

  React.useEffect(() => {
    doFetch();
    // eslint-disable-next-line
  }, [url]);

  return [data, doFetch];
}

export default useFetch;
