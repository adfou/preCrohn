import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logout, loginSuccess } from 'store/slice/authSlice';

export const useVerifyToken = () => {
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage errors
  const [success, setSuccess] = useState(false); // New success flag
  const { token } = useSelector((state) => state.auth); // Extract token from Redux state
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        console.log("No token found, not verifying.");
        setLoading(false); // No token, we can stop loading
        return;
      }

      try {
        console.log("Verifying token...");
        const response = await axios.get(import.meta.env.VITE_APP_BASE_API + "auth/token", {
          headers: {
            'Authorization': `${token}`, // Pass token in headers with Bearer
          },
        });

        if (response.status === 200) {
          console.log("log in success");
          setSuccess(true); // Set success flag if token is valid
          // const { user } = response.data;
          // dispatch(loginSuccess({ token, user })); // Save user info if token is valid
        } else {
          console.log("Token is invalid, logging out.");
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

  return { loading, error, success }; // Return loading, error, and success states
};
