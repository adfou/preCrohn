import { useState } from 'react';
import axios from 'axios';

export const useRestart = () => {
  const [restartData, setRestartData] = useState(null);
  const [loading, setLoading] = useState(false); // Initially not loading
  const [error, setError] = useState(null);

  const triggerRestart = async (id) => {  // Accepts id as a parameter
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_API}restart?id=${id}`,  // Include id as query parameter
        {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`,
          },
        }
      );
      setRestartData(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { triggerRestart, restartData, loading, error };
};
