import { useState } from 'react';
import axios from 'axios';

export const useCreateForm = () => {
  const [response, setresponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createForm = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(import.meta.env.VITE_APP_BASE_API + 'form', {
        form_data: formData, // Sending formData as form_data
      }, {
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

  return { createForm, response, loading, error };
};
