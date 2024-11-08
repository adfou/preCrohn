import { useState } from 'react';
import axios from 'axios';

export const useDeleteUser = () => {
  const [deleteData, setDeleteData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const triggerDeleteUser = async (id) => {
    setLoading(true);
    setError(null);
    console.log(id)
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_API}users/delete?id=${id}`,  // Endpoint for deleting user with id
        {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`,
          },
        }
      );
      console.log("response", response?.data?.response?.status);
      //if(response?.data?.response?.status)
      setDeleteData("response delet",response);
    } catch (err) {
        console.log("response err zabi", err);
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { triggerDeleteUser, deleteData, loading, error };
};
