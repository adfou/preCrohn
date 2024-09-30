import { useState } from 'react';
import axios from 'axios';

export const useCreateForm = () => {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createForm = async (formData ,currentSectionIndex) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(import.meta.env.VITE_APP_BASE_API + 'form', {
        form_type: currentSectionIndex,  // Sending currentSectionIndex as form_type
        form_data: formData              // Sending formData as form_data
      }, {
        headers: {
          'Authorization': `${localStorage.getItem('token')}`, 
          'Content-Type': 'application/json',
        },
      });

      setForm(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createForm, form, loading, error };
};
