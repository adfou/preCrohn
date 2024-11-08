import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(import.meta.env.VITE_APP_BASE_API + "users", {
        headers: {
          'Authorization': `${localStorage.getItem('token')}`, // Assuming the token is stored in localStorage
        },
      });
      
      setUsers(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, loading, error, refetch: fetchUsers };
};
