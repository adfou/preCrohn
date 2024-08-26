import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from 'store/slice/authSlice';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(import.meta.env.VITE_API_URL_AUTH, {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        maxBodyLength: Infinity,
      });

      const { token, user } = response.data;

      // Dispatch loginSuccess to update Redux state and save token in localStorage
      dispatch(loginSuccess({ token, user }));

      // Store both data and status in the state for further usage in the component
      setData({ status: response.status, data: response.data });
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, data };
};
