import { useState } from 'react';
import axios from 'axios';

export const useDeleteUser = () => {
  const [deleteData, setDeleteData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const triggerDeleteUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_API}users/delete?id=${id}`,  // Endpoint for deleting user with id
        {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`,
          },
        }
      );
      //if(response?.data?.response?.status)
      setDeleteData("response delet",response);
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { triggerDeleteUser, deleteData, loading, error };
};
