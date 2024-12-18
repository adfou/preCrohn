import { useState } from 'react';
import axios from 'axios';

export const useDownloadSheet = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const downloadSheet = async (idUser) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `${import.meta.env.VITE_APP_BASE_API}/sheet`, // Update to match your backend endpoint
                {
                    params: { idUser }, // Pass `idUser` as query parameter
                    headers: {
                        Authorization: `${localStorage.getItem('token')}`, // Include token if required
                    },
                    responseType: 'blob', // Treat response as binary data
                }
            );

            // Create a download link for the file
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `user_${idUser}_form.xlsx`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            // Capture and set any errors
            setError(err.response ? err.response.data.message : err.message);
            console.error('Error downloading sheet:', err);
        } finally {
            setLoading(false);
        }
    };

    return { downloadSheet, loading, error };
};
