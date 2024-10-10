import { useState } from 'react';
import axios from 'axios';

export const useRiskCalculation = () => {
  const [response, setresponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const RiskCalculation = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(import.meta.env.VITE_APP_BASE_API + 'risk', {
        headers: {
          'Authorization': `${localStorage.getItem('token')}`, 
          'Content-Type': 'application/json',
        },
      });

      setresponse(response.data);  // Store only response.data
      return response.data;        // Return response to the caller
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
      return null; // Return null in case of an error
    } finally {
      setLoading(false);
    }
  };

  return { RiskCalculation, response, loading, error };
};
