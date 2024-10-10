import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const register = async (firstName, secondName, username, email, password, role,biomarkers) => {
    setLoading(true);
    setError(null);
   
   
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL_REGISTER, {
        firstName,
        secondName,
        username,
        email,
        password,
        role,
        biomarkers

      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        maxBodyLength: Infinity,
      });
      console.log()
      setData(response.data);
     
    } catch (err) {
      // Ensure error is a string
      console.log(err?.response?.data?.message)
      setError(err.response ? err.response.data.message || err.message : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, data };
};
