import { useCallback, useState } from 'react';

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(
    async (
      url: string,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' }
    ) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(true);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(false);
  }, []);

  return {
    request,
    clearError,
    loading,
    setLoading,
    error,
  };
};

export default useHttp;
