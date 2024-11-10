import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFinishForm = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const FinishForm = async (formData) => {
    setLoading(true);
    setError(null); // Reset error state before making the request
    setResponse(null); // Clear previous response

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_API}form/finish`,
        { form_data: formData }, 
        {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );


      setResponse(response.data); // Update response state with the API response data
      return response.data; // Return response data to the caller
    } catch (err) {
 

      // Set error state to "500" whenever an error occurs
      setError(err.response ? err.response.status : err.message);

      //return null; // Return null to indicate failure
    } finally {
      setLoading(false); // Reset the loading state
    }
  };

  return { FinishForm, response, loading, error };
};
