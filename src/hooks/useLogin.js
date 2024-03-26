import { useState } from 'react';

export const useLogin = () => {
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username, password) => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if(data.status === 200) {
        window.location.href = "/";
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};