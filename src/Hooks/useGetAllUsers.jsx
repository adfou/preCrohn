import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_APP_BASE_API + "users", {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`, // Assuming the token is stored in localStorage
          },
        });
        console.log(response.data)
        setUsers(response.data);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
