import { useState } from 'react';
import axios from 'axios';

export const useBulkUserUpload = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const bulkUserUpload = async (file) => {
    setLoading(true);
    setError(null); // Reset error state before making the request
    setResponse(null); // Clear previous response

    try {
      const formData = new FormData();
      formData.append('file', file); // Append the file to FormData

      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_API}auth/bulk-users`, // API endpoint
        formData, // FormData for file upload
        {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`, // Bearer token for auth
            'Content-Type': 'multipart/form-data', // Required for file uploads
          },
        }
      );

      setResponse(response.data); // Update response state with the API response data
      return response.data; // Return response data to the caller
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message); // Capture error message
    } finally {
      setLoading(false); // Reset the loading state
    }
  };

  return { bulkUserUpload, response, loading, error };
};
