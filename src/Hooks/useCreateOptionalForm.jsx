import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCreateOptionalForm = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createOptionalForm = async (formData) => {
    setLoading(true);
    setError(null); // Reset error state before making the request
    setResponse(null); // Clear previous response

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_API}form/optional`,
        { form_data: formData }, // Payload for the API
        {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`, // Auth token from local storage
            'Content-Type': 'application/json', // Request content type
          },
        }
      );

      setResponse(response.data); // Update response state with the API response data
      return response.data; // Return response data to the caller
    } catch (err) {
      setError(err.response ? err.response.status : err.message); // Capture error status or message
    } finally {
      setLoading(false); // Reset the loading state
    }
  };

  return { createOptionalForm, response, loading, error };
};
