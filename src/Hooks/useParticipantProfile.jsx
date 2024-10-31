import { useEffect, useState } from 'react';
import axios from 'axios';

export const useParticipantProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParticipantProfile = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_APP_BASE_API + 'participant-profile',
          {
            headers: {
              'Authorization': `${localStorage.getItem('token')}`,
            },
          }
        );
        console.log(response.data);
        setProfileData(response.data);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipantProfile();
  }, []);

  return { profileData, loading, error };
};
