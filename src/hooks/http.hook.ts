import { useState } from 'react';

const useHttp = () => {
  /*  const [process, setProcess] = useState('waiting'); */
  const request = async (
    url: string,
    method = 'GET',
    body: string | null = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    try {
      /* setProcess('loading'); */
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      /* setProcess('error') */ throw e;
    }
  };

  const clearError = () => {
    /* setProcess('loading'); */
  };

  return {
    request,
    clearError,
  };
};

export default useHttp;
