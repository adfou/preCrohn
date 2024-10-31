import { useState } from 'react';
import axios from 'axios';

export const useNextStep = () => {
  const [nextStepData, setNextStepData] = useState(null);
  const [loading, setLoading] = useState(false); // Initially not loading
  const [error, setError] = useState(null);

  const triggerNextStep = async () => {
    setLoading(true);
    setError(null);
    //console.log("localStorage.getItem('token')",localStorage.getItem('token'))
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_API}next-step`,
        
        {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`,
          },
        }
      );
      console.log(response.data);
      setNextStepData(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { triggerNextStep, nextStepData, loading, error };
};
