import { useState } from 'react';
import axios from 'axios';

export const useNextStep = () => {
  const [nextStepData, setNextStepData] = useState(null);
  const [loading, setLoading] = useState(false); // Initially not loading
  const [error, setError] = useState(null);

  const triggerNextStep = async (id) => {  // Accepts id as a parameter
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_API}next-step?id=${id}`,  // Include id in the URL
        {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`,
          },
        }
      );
      setNextStepData(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { triggerNextStep, nextStepData, loading, error };
};
