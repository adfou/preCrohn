import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logout, loginSuccess } from 'store/slice/authSlice';

export const useVerifyToken = () => {
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [success, setSuccess] = useState(false); 
  const [userRole, setuserRole] = useState(false);
  const { token } = useSelector((state) => state.auth); 
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setLoading(false); // No token, we can stop loading
        return;
      }

      try {
        const response = await axios.get(import.meta.env.VITE_APP_BASE_API + "auth/token", {
          headers: {
            'Authorization': `${token}`, // Pass token in headers with Bearer
          },
        });

        if (response.status === 200) {
          console.log("response.data.user:",response.data.user)
          setuserRole(response.data.user)
          const { user } = response.data.user; // Assuming the API response contains user info
          dispatch(loginSuccess({ token, user })); // Save user info including roles in Redux
          setSuccess(true); // Set success flag if token is valid
        } else {
          dispatch(logout()); // Log out if the token is invalid
        }
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
        dispatch(logout()); // On error, logout user
      } finally {
        setLoading(false); // Ensure loading state is stopped
      }
    };

    verifyToken();
  }, [token, dispatch]);

  return { loading, error, success ,userRole}; // Return loading, error, and success states
};
