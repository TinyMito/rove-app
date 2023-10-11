import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export function DataProvider({ children }) {
  const [userData, setUserData] = useState({
    id: undefined,
    userFirst: undefined,
    userLast: undefined,
    userName: undefined,
    userEmail: undefined,
    userImg: undefined,
    scheduleId: undefined,
    scheduleStartDate: undefined,
    scheduleEndDate: undefined,
    destinationId: undefined,
    googleApiKey: process.env.REACT_APP_API_KEY
  });

  useEffect(() => {
    // Fetch user session data and set it in the state
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios
      .get('/api/getUserSession')
      .then((response) => {
        setUserData({
          id: response.data.userId,
          userFirst: response.data.userFirst,
          userLast: response.data.userLast,
          userName: response.data.userAlias,
          userEmail: response.data.userEmail,
          userImg: response.data.userProfile
        });
      })
      .catch((error) => {
        console.error('Error getting user data:', error);
      });
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function globalData() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Error Global Data');
  }
  return context;
}