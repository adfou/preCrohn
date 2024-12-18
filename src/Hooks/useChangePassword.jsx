import { useState } from 'react';
import axios from 'axios';

export const useChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const changePassword = async (userId, newPassword) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BASE_API}/auth/passwoard`, {
        userId,
        newPassword,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Store response data in state
      setData({ status: response.status, data: response.data });
    } catch (err) {
      // Handle and store error response
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { changePassword, loading, error, data };
};
