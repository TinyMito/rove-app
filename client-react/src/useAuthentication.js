import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function useAuthentication() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get('/api/check-auth')
      .then((response) => {
        const isAuthenticated = response.data.isAuthenticated;
        setIsAuthenticated(isAuthenticated);

        // Redirect to the login page if not authenticated
        if (!isAuthenticated) {
          navigate('/access');
        }
      })
      .catch((error) => {
        console.error('Error checking authentication:', error);
      });
  }, [navigate]);

  return isAuthenticated;
}